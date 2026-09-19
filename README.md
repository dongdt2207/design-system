# Ebig Design System

## Chạy
Node 20.16+. `npm install` rồi `npm run storybook` → http://localhost:6006

## Cấu trúc
```
src/tokens/tokens.css   ← NGUỒN SỰ THẬT: primitive → semantic. Figma Variables trùng tên
src/tokens/base.css
src/components/*/       ← Name.tsx + Name.css + Name.stories.tsx (29 component)
src/components/aria.css ← overlay/list dùng chung cho React Aria
src/sections/           ← 10 section landing + sections.css, manifest.json, renderLanding.tsx
src/content/*.json      ← nội dung landing (agent sinh file này)
src/foundations/*.mdx   ← trang token, đọc giá trị thật từ CSS
scripts/validate-landing.mjs
docs/style-reference.md ← tham chiếu phong cách
DESIGN-RULES.md · CLAUDE.md
```

## Đổi thương hiệu
Sửa `--brand-*` (đang là placeholder cam), `--gray-*`, `--font-sans` trong `tokens.css`. Semantic và component tự theo.

## Dùng trong app khác (Vite / Astro / Next)
1. Cài package hoặc monorepo.
2. CSS gốc của app: `@import "ebig-design-system/src/index.css";`
3. Đặt `data-theme="light|dark"` trên `<html>`.
4. `import { Button, Modal } from 'ebig-design-system'`.

## Kiểm tra landing
`npm run validate:landing src/content/landing.ebig-cdn.json`

## Danh sách component
Form: Input · Textarea · Select · ComboBox · DatePicker · Checkbox · RadioGroup · Switch · Toggle · Slider
Hành động: Button · Menu · Popover · Tooltip
Hiển thị: Badge · Avatar · Card · Table · Pagination · Breadcrumb · Tabs · Accordion · Progress · Skeleton · EmptyState
Overlay: Modal · AlertDialog · Drawer · Toast
Section landing: Nav · HeroEditorial · Manifesto · SplitText · FeatureFullBleed · Comparison · Pricing · Testimonial · CTAFinal · Footer

Đặt `<Toaster />` một lần ở gốc app để dùng `toast()`.
