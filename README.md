# Ebig Design System

## Chạy
Node 20.16+. `npm install` rồi `npm run storybook` → http://localhost:6006

## Cấu trúc
```
src/tokens/tokens.css   ← NGUỒN SỰ THẬT: primitive → semantic. Figma Variables trùng tên
src/tokens/base.css
src/components/*/       ← Name.tsx + Name.css + Name.stories.tsx (47 component)
src/components/aria.css ← overlay/list dùng chung cho React Aria
src/sections/           ← 12 section landing + sections.css, manifest.json, renderLanding.tsx
src/content/*.json      ← nội dung landing (agent sinh file này)
src/foundations/*.mdx   ← trang token, đọc giá trị thật từ CSS
src/story-frame.tsx     ← helper frame(390) cho story kiểm co giãn
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

## Landing demo — Internor
`src/content/landing.internor.json` là trang mẫu tiếng Anh cho một studio nội thất hư cấu.
**Toàn bộ số liệu, giá, tên dự án và testimonial trong file này là dữ liệu bịa để trình bày hệ thống, không phải thông tin của một công ty có thật.**
Ảnh trong `public/img/` lấy từ Wikimedia Commons (CC0 và CC BY 2.0), credit ghi ở dòng meta của footer.
Trang này bật chuyển động khi cuộn qua class `.lp-motion` + hook `useScrollReveal` — nằm ngoài DESIGN-RULES 9.8 ("Motion: không có"), giữ riêng trong `landing-motion.css` để gỡ được.

## Ngôn ngữ
Tài liệu `.md` viết tiếng Việt. Chữ trong sản phẩm — nhãn nút, `aria-label`, JSDoc, story, nội dung landing — viết tiếng Anh; ngày/số/tiền theo quy ước Anh — Mỹ (DESIGN-RULES 10.5).

## Danh sách component
Form: Input · Textarea · Select · ComboBox · DatePicker · Checkbox · RadioGroup · Switch · Toggle · Slider
Hành động: Button · Menu · Popover · Tooltip
Hiển thị: Badge · Avatar · Card · ActionCard · SelectableCard · Table · Pagination · Breadcrumb · Tabs · Accordion · Progress · Skeleton · EmptyState
Overlay: Modal · AlertDialog · Drawer · Toast
Biểu đồ: StatTile · Sparkline · Meter · BarChart · LineChart · DonutChart · Heatmap · DivergingBar · Dumbbell · ScatterPlot · FunnelChart · ChartFrame
Trợ lý agent: ChatMessage · AgentTrace · PromptInput · AgentAssistant
Section landing: Nav · HeroEditorial · Manifesto · SplitText · Timeline · FeatureFullBleed · Comparison · Pricing · Testimonial · TeamBlock · CTAFinal · Footer

Đặt `<Toaster />` một lần ở gốc app để dùng `toast()`.
