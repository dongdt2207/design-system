#!/usr/bin/env node
// Kiểm tra một file landing JSON có tuân thủ manifest không.
// Dùng: node scripts/validate-landing.mjs src/content/landing.ebig-cdn.json
import { readFileSync } from 'node:fs';

const [, , file] = process.argv;
if (!file) { console.error('Cách dùng: node scripts/validate-landing.mjs <landing.json>'); process.exit(2); }

const manifest = JSON.parse(readFileSync(new URL('../src/sections/manifest.json', import.meta.url)));
const spec = JSON.parse(readFileSync(file, 'utf8'));
const errors = [], warns = [];
const known = Object.keys(manifest.sections);
const visuals = Object.keys(manifest.visuals);

const types = spec.sections.map((s) => s.type);
types.forEach((t, i) => { if (!known.includes(t)) errors.push(`section[${i}]: type "${t}" không có trong manifest`); });

// thứ tự
let last = -1;
types.forEach((t, i) => {
  const idx = manifest.order.indexOf(t);
  if (idx !== -1 && idx < last) errors.push(`section[${i}] "${t}" đứng sai thứ tự (sau "${types[i - 1]}")`);
  if (idx !== -1) last = Math.max(last, idx);
});

// bắt buộc / lặp
for (const t of manifest.order) {
  const n = types.filter((x) => x === t).length;
  const rep = manifest.repeatable[t];
  const optional = manifest.optional.includes(t) || (rep && rep.min === 0);
  if (n === 0 && !optional) errors.push(`thiếu section bắt buộc "${t}"`);
  if (rep && n > rep.max) errors.push(`"${t}" lặp ${n} lần, tối đa ${rep.max}`);
  if (!rep && n > 1) errors.push(`"${t}" chỉ được có 1, đang có ${n}`);
}

// visual + nội dung
const count = (s) => String(s ?? '').trim().split(/\s+/).filter(Boolean).length;
spec.sections.forEach((s, i) => {
  const p = s.props ?? {};
  if ('visual' in p) {
    if (!p.visual?.type || !visuals.includes(p.visual.type)) errors.push(`section[${i}] "${s.type}": visual.type "${p.visual?.type}" không hợp lệ (${visuals.join(', ')})`);
  }
  if (s.type === 'hero') {
    if (count(p.title) > 4) warns.push(`hero: tiêu đề ${count(p.title)} từ, quy tắc ≤ 4`);
    const deep = (p.blocks ?? []).filter((b) => b.deep).length;
    if (deep !== 1) warns.push(`hero: cần đúng 1 khối deep, đang có ${deep}`);
    if ((p.blocks ?? []).length < 4 || (p.blocks ?? []).length > 6) warns.push(`hero: ${p.blocks?.length ?? 0} khối, quy tắc 4–6`);
    const eb = p.eyebrow ?? ''; if (/\p{L}/u.test(eb) && eb === eb.toUpperCase()) errors.push('hero: eyebrow không được viết hoa toàn bộ');
  }
  if (s.type === 'manifesto' && (count(p.text) < 12 || count(p.text) > 25)) warns.push(`manifesto: ${count(p.text)} từ, quy tắc 12–25`);
  if (s.type === 'feature' && count(p.description) > 40) warns.push(`feature ${p.index}: mô tả ${count(p.description)} từ, quy tắc ≤ 40`);
  if (s.type === 'testimonial') {
    const need = p.variant === 'pair' ? 2 : 1;
    if ((p.quotes ?? []).length !== need) errors.push(`testimonial ${p.variant}: cần ${need} quote, có ${p.quotes?.length ?? 0}`);
  }
});

// đảo trái-phải
const feats = spec.sections.filter((s) => s.type === 'feature');
feats.forEach((f, i) => {
  const expect = i % 2 === 0 ? 'right' : 'left';
  if ((f.props.visualSide ?? 'right') !== expect) warns.push(`feature ${f.props.index}: visualSide nên là "${expect}" (đảo luân phiên)`);
});

// placeholder
const raw = JSON.stringify(spec);
const ph = (raw.match(/\[cần [^\]]+\]/g) ?? []).length;
if (ph) warns.push(`còn ${ph} placeholder "[cần …]" chưa điền`);

for (const w of warns) console.log('⚠  ' + w);
for (const e of errors) console.log('✖  ' + e);
if (errors.length) { console.log(`\n${errors.length} lỗi — không đạt.`); process.exit(1); }
console.log(`\n✓ ${file}: hợp lệ (${spec.sections.length} section, ${warns.length} cảnh báo).`);
