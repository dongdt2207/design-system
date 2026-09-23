# Ebig Design System — hướng dẫn cho Claude Code

Stack: Vite + React 19 + TypeScript + CSS thuần (token = CSS variables) + **React Aria Components** cho logic/a11y (Tabs, Tooltip, Menu, RadioGroup, ComboBox, DatePicker; Radix còn ở Modal, Select) + Storybook 10.

Ngôn ngữ: **tài liệu `.md` ở repo viết tiếng Việt; mọi thứ hiện trong Storybook và trong sản phẩm — nhãn nút, `aria-label`, JSDoc, story, trang `.mdx`, nội dung landing — viết tiếng Anh**, định dạng ngày/số/tiền theo quy ước Anh — Mỹ (DESIGN-RULES mục 10.5).

Co giãn: component co theo **khung chứa** (`container-type: inline-size` + `@container`, ngưỡng 1023 / 639), `@media` chỉ cho khung trang và đặc tính thiết bị — DESIGN-RULES mục 3.5.

Component mới có tương tác: lấy logic từ React Aria Components, style qua data-attribute (`[data-hovered]`, `[data-selected]`, `[data-focus-visible]`) trong file CSS bằng token. Overlay dùng chung `src/components/aria.css` (`.eb-popover`, `.eb-list`). Không tự viết focus trap, keyboard nav, aria.

Trước khi sinh, sửa, hoặc review bất kỳ UI nào:
1. Đọc `DESIGN-RULES.md` — quy tắc thiết kế, content, a11y, mục 12 dành cho AI. Phong cách: editorial calm (`docs/style-reference.md`).
2. Đọc `src/tokens/tokens.css` — token thật. Component chỉ dùng tầng semantic (`--color-bg-brand`), không dùng primitive (`--brand-500`), không viết hex.
3. Xem `src/components/Button/` làm mẫu cấu trúc 3 file: `Name.tsx` + `Name.css` (class `eb-*`) + `Name.stories.tsx`.

## Landing page — quy trình bắt buộc
Landing là **dữ liệu**, không phải code.
1. Đọc `src/sections/manifest.json`.
2. Sinh `src/content/landing.<tên>.json` theo schema `LandingSpec` (`src/sections/renderLanding.tsx`). Mẫu: `landing.ebig-cdn.json`.
3. Chạy `npm run validate:landing src/content/landing.<tên>.json` đến khi sạch lỗi; nêu cảnh báo cho người review.
Không tạo section, không thêm CSS, không viết layout, không dùng visual ngoài manifest. Thiếu dữ liệu thật → `[cần số thật]`.
Section mới: đề xuất (tên, use, props) → chờ duyệt → thêm vào `src/sections/index.tsx` + `sections.css` + `manifest.json` + `renderLanding.tsx` + story + DESIGN-RULES 9.8.

## Component mới
Thư mục trong `src/components/`, 3 file, đủ story mọi trạng thái (thêm story 390px và 820px nếu component chiếm cả vùng nội dung), export trong `src/index.ts`, `npm run build-storybook` không lỗi, tab Accessibility sạch.
