# Ebig Design Rules

Tài liệu quy tắc thiết kế cho hệ Ebig. Viết theo cấu trúc của Carbon Design System (IBM):
mọi quyết định thiết kế đều quy về **token có tên** hoặc **quy tắc kiểm tra được**.

Đối tượng đọc: designer, developer, và AI (Claude Code, Claude Design). Với AI, file này là ngữ cảnh bắt buộc — xem mục 12.

Nguồn giá trị thật: `src/tokens/tokens.css` . Nếu tài liệu này và file đó lệch nhau, file CSS đúng.

**Quy ước class**: component chỉ dùng class semantic — `--color-bg-surface`, `--color-bg-brand`, `--color-text-primary`, `--color-text-muted`, `--color-border-default`. Cấm `bg-gray-*`, `--color-bg-brand-500`, `text-[#hex]`, `p-[13px]` trong component và section. Primitive chỉ xuất hiện trong `tokens.css`.

---

## 1. Nguyên tắc

1. **Token trước, giá trị sau.** Không có màu, cỡ chữ, khoảng cách nào được viết bằng số trực tiếp. Mọi giá trị phải gọi qua token.
2. **Semantic trước, primitive sau.** Component và màn hình chỉ dùng token semantic (`--color-bg-brand`). Primitive (`brand-500`) chỉ xuất hiện trong `tokens.css`.
3. **Có sẵn trước, làm mới sau.** Trước khi tạo component hoặc pattern mới, chứng minh rằng không ghép được từ thứ đã có.
4. **Một nhấn mạnh mỗi màn hình.** Một primary button, một tiêu đề cấp cao nhất, một hành động chính.
5. **Hairline thay bóng.** Hệ này không có bóng đổ. Phân tách bằng viền 1px và trắng-trên-kem; `--shadow-*` là hairline với ba độ đậm.
6. **Sentence case.** Mọi chữ trong giao diện viết hoa chữ cái đầu câu, không viết hoa từng từ, không viết hoa toàn bộ.

---

## 2. Color

### 2.1 Cấu trúc

| Tầng | Ví dụ | Ai dùng |
|---|---|---|
| Primitive | `gray-200`, `brand-500`, `--red-100` | chỉ `tokens.css` |
| Semantic | `--color-bg-surface`, `--color-text-muted`, `--color-border-default` | component, màn hình, Figma Variables |

Semantic đổi theo theme (`light` / `dark`). Primitive không đổi.

### 2.2 Layering — nền chồng lên nhau

Theo thứ tự từ dưới lên. Mỗi lớp chỉ được đặt trực tiếp lên lớp ngay dưới nó.

| Lớp | Token | Dùng cho |
|---|---|---|
| 0 | `--color-bg-page` | nền trang |
| 1 | `--color-bg-surface` | card, panel, sidebar, ô nhập |
| 2 | `--color-bg-surface-raised` | menu, popover, modal, dropdown |
| — | `--color-bg-subtle` | vùng phụ bên trong lớp 1: footer card, header bảng, hàng hover |
| — | `--color-bg-muted` | nút disabled, track toggle tắt, phân tách mạnh |

Quy tắc:
- Card (lớp 1) không lồng trong card (lớp 1).
- Không đặt `surface` lên `surface`. Nếu cần tách hai vùng cùng lớp, dùng viền `--color-border-default` hoặc `--color-bg-subtle`.
- Modal luôn là lớp 2, đặt trên overlay tối, không kể nó mở từ đâu.

### 2.3 Text

| Token | Dùng cho | Không dùng cho |
|---|---|---|
| `--color-text-primary` | tiêu đề, nội dung chính, giá trị trong bảng | — |
| `--color-text-secondary` | mô tả dưới tiêu đề, nội dung phụ | tiêu đề |
| `--color-text-muted` | placeholder, gợi ý, metadata (thời gian, đếm) | nội dung người dùng phải đọc |
| `--color-text-disabled` | chữ trên phần tử disabled | bất kỳ phần tử đang hoạt động |
| `--color-text-brand` | link, ghost button, chữ nhấn | nội dung dài |
| `--color-text-on-brand` | chữ trên `--color-bg-brand` | mọi nền khác |
| `--color-text-danger` / `-success` / `-warning` | thông báo trạng thái, lỗi validation | trang trí |

### 2.4 Brand và trạng thái

- `--color-bg-brand`: **chỉ** primary button, toggle bật, checkbox chọn, chỉ báo tab đang chọn, thanh tiến trình. Không dùng làm nền vùng lớn.
- `--color---color-bg-brand-subtle`: nền hover của ghost button, nền hàng đang chọn, badge tone brand.
- `--color-bg-danger`: **chỉ** danger button. Không dùng cho badge, thông báo.
- `--color-bg-*-subtle` (danger, success, warning): nền badge, nền inline notification.

### 2.5 Border

| Token | Dùng cho |
|---|---|
| `--color-border-default` | phân tách vùng, viền card, viền bảng |
| `--color-border-strong` | viền ô nhập, viền secondary button |
| `--color-border-brand` | ô nhập focus, phần tử đang chọn |
| `--color-border-danger` | ô nhập lỗi |
| `--color-border-focus` | focus ring (utility `focus-ring`) |

### 2.6 Contrast tối thiểu

- Chữ thường trên nền: 4.5:1.
- Chữ lớn (≥ 18px hoặc ≥ 14px semibold) và icon có ý nghĩa: 3:1.
- Chữ disabled được miễn.
- Kiểm tra bằng tab Accessibility trong Storybook trước khi merge.

---

## 3. Grid & Layout

### 3.1 Đơn vị

Đơn vị cơ sở: **4px**. Mọi kích thước, khoảng cách, chiều cao phần tử là bội của 4.

### 3.2 Cột

| Breakpoint | Rộng | Cột | Gutter | Lề ngoài |
|---|---|---|---|---|
| sm | < 640px | 4 | 16px | 16px |
| md | 640–1023px | 8 | 24px | 24px |
| lg | 1024–1439px | 12 | 24px | 32px |
| xl | ≥ 1440px | 12 | 32px | 40px, nội dung tối đa 1280px |

### 3.3 Khu vực màn hình

```
┌──────────────────────────────────────────┐
│ Header (56px)                            │
├─────────┬────────────────────────────────┤
│ Sidebar │ Page header                    │
│ (240px) │ ──────────────────────────────  │
│         │ Content                        │
│         │                                │
└─────────┴────────────────────────────────┘
```

- Header: cao 56px, nền `--color-bg-surface`, viền dưới `--color-border-default`.
- Sidebar: rộng 240px (lg trở lên), ẩn thành drawer dưới lg. Nền `--color-bg-surface`.
- Page header: tiêu đề `heading-03` bên trái, hành động chính bên phải, padding dưới `6`.
- Content: padding `6` (lg) / `4` (sm).

### 3.4 Căn lề

- Chữ căn trái. Không căn giữa đoạn văn.
- Căn giữa chỉ cho: empty state, trang đăng nhập, modal xác nhận ngắn.
- Số trong bảng căn phải.

---

### 3.5 Co giãn

Nguyên tắc: **component co theo khung chứa nó, không theo cửa sổ.** Cùng một component còn nằm trong drawer, split view, cột hẹp, iframe preview — bề rộng cửa sổ không nói được nó đang đứng trong chỗ rộng bao nhiêu.

- Component chiếm cả vùng nội dung (màn hình, panel, bảng, biểu đồ, card lớn) khai báo `container-type: inline-size` ở phần tử ngoài cùng và đổi bố cục bằng `@container`. Đặt container ở phần tử ngoài, layout ở phần tử con — một phần tử không tự truy vấn chính nó.
- Phần tử đã khai `container-type: inline-size` **không tự co theo nội dung nữa** (`contain: inline-size`). Nó phải nhận bề rộng từ layout bên ngoài: block trong luồng thường, một track của grid, hoặc flex item có `flex-basis`/`width` rõ ràng. Thả nó làm flex item co giãn theo nội dung thì nó sập về 0.
- `@media` chỉ còn dùng cho hai việc: khung trang (header, sidebar, lề trang) và đặc tính thiết bị (`hover: none`, `prefers-reduced-motion`, `prefers-color-scheme`).
- Ngưỡng lấy từ mục 3.2, viết dạng `max-width`: **1023** (dưới lg) và **639** (dưới md). Không đặt ngưỡng riêng cho một component; cần ngưỡng khác thì nói rõ lý do khi review.
- Thứ tự việc phải làm khi hẹp lại: (1) nhiều cột → một cột; (2) vùng phụ ẩn thành Drawer hoặc Accordion; (3) padding tụt một bậc trên thang (`6` → `4` → `3`); (4) type set tụt một bậc, chỉ display và heading (mục 4.3); (5) nhóm nút/chip ngang → dọc. Không đổi thứ tự đọc, không ẩn nội dung bắt buộc.
- Chiều rộng cố định bằng px chỉ dành cho: icon, avatar, checkbox, track toggle, sidebar 240, và `max-width` của dòng văn bản. Mọi chiều rộng khác dùng `%`, `min()`, `minmax()` hoặc token.
- **Không bao giờ cuộn ngang cả trang.** Cuộn ngang chỉ được phép bên trong một vùng có viền rõ (bảng, khối mã, dải thẻ), và vùng đó phải cuộn được bằng bàn phím (`tabindex="0"` + nhãn).
- Bảng nhiều cột dưới 640 chuyển thành danh sách card (mục 9.6). Không thu nhỏ chữ để nhét vừa cột.
- Thiết bị chạm (`hover: none`): mọi vùng bấm ≥ 40×40; hành động chỉ hiện khi hover phải hiện sẵn.
- Ảnh và biểu đồ giữ khung bằng `aspect-ratio`, không đặt chiều cao cố định.
- **Kiểm được**: component chiếm cả vùng nội dung phải có story ở khung cố định **390px** (thêm story **820px** nếu bố cục còn đổi ở mốc lg). Dùng helper `frame(390)` trong `src/story-frame.tsx` — khung tự đặt trong story, không phụ thuộc bề rộng cửa sổ trình duyệt.

---

## 4. Typography

### 4.1 Font

- `--font-sans` cho toàn bộ giao diện.
- `--font-mono` chỉ cho: mã, ID, giá trị kỹ thuật (hash, token, đường dẫn).

### 4.2 Type sets

Thay vì chọn cỡ chữ, chọn một **type set**. Mỗi set là tổ hợp cố định.

| Type set | Size | Weight | Line-height | Dùng cho |
|---|---|---|---|---|
| `display-01` | `--text-3xl` | semibold | tight | tiêu đề trang chủ, số liệu lớn (hiếm dùng) |
| `heading-01` | `--text-2xl` | semibold | tight | tiêu đề trang |
| `heading-02` | `--text-xl` | semibold | tight | tiêu đề section |
| `heading-03` | `--text-lg` | semibold | tight | tiêu đề card, modal |
| `heading-04` | `--text-md` | semibold | normal | tiêu đề nhóm nhỏ, tiêu đề cột bảng |
| `body-01` | `--text-md` | regular | loose | đoạn văn dài, nội dung đọc |
| `body-compact-01` | `--text-sm` | regular | normal | nội dung trong card, bảng, form |
| `label-01` | `--text-sm` | medium | normal | nhãn field, nút, tab, menu |
| `helper-01` | `--text-xs` | regular | normal | gợi ý, lỗi, metadata |
| `code-01` | `--text-sm` | regular | normal | font mono |

Quy tắc:
- Mỗi màn hình đúng một `heading-01`.
- Không nhảy cấp: `heading-01` → `heading-02` → `heading-03`. Không dùng `heading-01` rồi `heading-03`.
- Không có weight khác ngoài regular / medium / semibold. Không dùng bold (700) hay light (300).
- Không in nghiêng trong giao diện.
- Không viết hoa toàn bộ, kể cả nhãn nhỏ và eyebrow trong landing.
- Dòng văn bản đọc tối đa ~70 ký tự; giới hạn bằng `max-width`.

### 4.3 Co giãn

- `display-01`, `heading-01` giảm một mức ở breakpoint sm (`--text-3xl` → `--text-2xl`, `--text-2xl` → `--text-xl`).
- Các set khác không đổi theo breakpoint.

---

## 5. Spacing

### 5.1 Thang

| Token | px | Dùng cho |
|---|---|---|
| `1 (4px)` | 4 | giữa icon và chữ trong badge; giữa nhãn và ô nhập |
| `2 (8px)` | 8 | giữa icon và chữ trong nút; giữa các badge; giữa các nút trong nhóm |
| `3` | 12 | padding ngang nút sm; giữa checkbox và nhãn |
| `4` | 16 | giữa các field trong form; padding ngang nút md; padding cell bảng |
| `5` | 20 | padding trong card; padding ngang nút lg |
| `6` | 24 | giữa các card; padding content; giữa page header và content |
| `8` | 32 | giữa các section trong một trang |
| `10` | 40 | padding trong modal lớn |
| `12` | 48 | khoảng trên/dưới empty state |
| `16` | 64 | khoảng lớn trong trang marketing |

### 5.2 Quy tắc

- Khoảng cách **bên trong** một phần tử nhỏ hơn khoảng cách **giữa** các phần tử cùng cấp.
- Khoảng cách giữa các nhóm lớn hơn khoảng cách trong nhóm (`space-8` giữa section, `space-4` giữa field).
- Không dùng `space-5` và `space-6` cạnh nhau trong cùng một cấu trúc; chọn một.
- Auto-layout trong Figma: padding và gap chỉ nhận giá trị trong thang này.

### 5.3 Chiều cao chuẩn

| Phần tử | sm | md | lg |
|---|---|---|---|
| Button, Input, Select | 32 | 40 | 48 |
| Badge | 22 | — | — |
| Checkbox box | 18 | — | — |
| Toggle track | 18 | 24 | — |
| Hàng bảng | 40 | 48 | 56 |
| Menu item | — | 36 | — |

Mặc định là `md`. `sm` cho vùng đậm đặc (toolbar, bảng); `lg` cho form độc lập (đăng nhập, onboarding).

---

## 6. Radius & Shadow

### 6.1 Radius theo kích thước phần tử

| Token | px | Dùng cho |
|---|---|---|
| `--radius-sm` | 4 | checkbox, tag nhỏ, cell được highlight |
| `--radius-md` | 8 | button, input, select, menu item |
| `--radius-lg` | 12 | card, panel, dropdown menu |
| `--radius-xl` | 20 | modal, drawer, bottom sheet |
| `--radius-full` | 999 | badge, avatar, toggle, pill |

Quy tắc: phần tử lớn hơn có radius lớn hơn. Phần tử con không có radius lớn hơn phần tử cha.

### 6.2 Shadow theo độ nổi

| Token | Dùng cho |
|---|---|
| (không bóng) | mặc định. Card flat, panel, sidebar |
| `--shadow-sm` | thumb toggle, phần tử đang kéo |
| `--shadow-md` | card raised, dropdown, popover, tooltip |
| `--shadow-lg` | modal, drawer, toast |

Không dùng bóng để "làm đẹp" card thường. Bóng có nghĩa là "phần tử này đang nổi lên và có thể đóng lại".

---

## 7. Motion

### 7.1 Hai loại

| Loại | Duration | Easing | Dùng cho |
|---|---|---|---|
| Productive | `--duration-fast` (120ms) | `--ease-standard` | hover, focus, toggle, checkbox, đổi màu nút |
| Expressive | `--duration-normal` (200ms) | `--ease-standard` | mở/đóng modal, drawer, dropdown, toast xuất hiện |

### 7.2 Quy tắc

- Motion chỉ trả lời hành động của người dùng. Không có hiệu ứng tự chạy khi tải trang.
- Mở: fade + dịch nhỏ (8px) theo hướng xuất hiện. Đóng: nhanh hơn mở, chỉ fade.
- Không có bounce, không có spring, không có lặp.
- Luôn tôn trọng `prefers-reduced-motion` (đã xử lý trong `base.css`).
- Không transition thuộc tính layout (width, height, padding) trên phần tử lớn.

---

## 8. Component — quy tắc dùng

Mỗi component có: **Dùng khi** / **Không dùng khi** / **Quy tắc**. Style chi tiết xem Storybook.

### Button

Dùng khi: cần một hành động rõ ràng (lưu, gửi, xoá, mở).
Không dùng khi: điều hướng sang trang khác (dùng link); bật/tắt cài đặt (dùng Toggle).

- Mỗi màn hình hoặc modal đúng **một** `primary`.
- Thứ tự trong nhóm: hành động phụ bên trái, hành động chính bên phải. Huỷ luôn bên trái.
- `danger` chỉ cho hành động không hoàn tác (xoá, huỷ vĩnh viễn) và luôn có bước xác nhận.
- `ink` (nền mực) cho CTA lớn kiểu "Tải về" khi không muốn thêm accent; landing dùng `ink` cho CTA cuối.
- `ghost` cho hành động cấp ba, thường nằm trong card hoặc bảng.
- Nhãn bắt đầu bằng động từ và nói đúng việc sẽ xảy ra: "Lưu thay đổi", không "OK"; "Xoá dự án", không "Xác nhận".
- Nhãn tối đa 3 từ. Không dấu chấm, không dấu chấm than.
- Nút chỉ có icon phải có `aria-label`.
- `loading` giữ nguyên kích thước nút, ẩn nhãn, không cho bấm lại.
- `fullWidth` chỉ trong form độc lập (đăng nhập) và trên mobile.

### Input

Dùng khi: nhập một dòng văn bản, số, email, mật khẩu.
Không dùng khi: nhiều dòng (Textarea); chọn từ danh sách (Select); ngày (DatePicker).

- Luôn có `label`. Chỉ được bỏ khi ngữ cảnh đã thay thế nhãn (ô tìm kiếm có icon và placeholder).
- Placeholder là ví dụ, không phải nhãn. Không dùng placeholder để giải thích.
- `hint` nói điều người dùng cần biết *trước* khi nhập. `error` nói điều sai *sau* khi nhập.
- Lỗi hiện sau khi rời ô (blur) hoặc sau khi submit, không hiện trong lúc gõ.
- Nội dung lỗi: nói cái gì sai và sửa thế nào. "Email không đúng định dạng", không "Lỗi".
- Chiều rộng ô phản ánh độ dài dự kiến: mã OTP hẹp, địa chỉ rộng.

### Badge

Dùng khi: gắn trạng thái ngắn cho một đối tượng (đang hoạt động, chờ duyệt, mới).
Không dùng khi: cần bấm được (dùng Button hoặc Tag có hành động); nội dung dài hơn 2 từ.

- `tone` phải khớp ý nghĩa: `success` cho hoàn tất/hoạt động, `warning` cho chờ/cần chú ý, `danger` cho lỗi/bị khoá, `brand` cho mới/nổi bật, `neutral` cho các trạng thái trung tính (nháp, lưu trữ).
- `dot` khi trạng thái thay đổi theo thời gian thực hoặc có nhiều badge cạnh nhau cần phân biệt nhanh.
- Tối đa 2 badge trên một đối tượng.

### Card

Dùng khi: nhóm nội dung liên quan thành một đơn vị có thể đứng riêng.
Không dùng khi: chỉ có một đoạn văn (đặt trực tiếp lên trang); danh sách nhiều mục giống nhau (dùng bảng hoặc list).

- Card không lồng trong card.
- `elevation="flat"` mặc định. `raised` chỉ khi card nằm trên nền có nhiều chi tiết hoặc là card nổi bật duy nhất.
- `title` là `heading-03`; `description` là `body-compact-01` màu secondary.
- `action` chứa tối đa một Badge hoặc một nút `ghost`/`secondary` size sm. Không đặt primary button ở header card.
- `footer` chứa nhóm nút, căn phải, theo quy tắc thứ tự của Button.
- `flush` khi thân card là bảng, ảnh, hoặc danh sách cần chạm mép.

### Checkbox

Dùng khi: chọn nhiều trong danh sách; đồng ý điều khoản; bật tuỳ chọn cần nút Lưu.
Không dùng khi: chỉ chọn một (Radio); thay đổi có hiệu lực ngay (Toggle).

- Nhãn là câu khẳng định: "Gửi thông báo qua email", không "Bạn có muốn nhận thông báo?".
- `description` khi hệ quả không rõ từ nhãn.
- Nhóm checkbox cách nhau `3`, có tiêu đề nhóm `label-01`.

### Toggle

Dùng khi: bật/tắt một cài đặt và có hiệu lực **ngay lập tức**.
Không dùng khi: cần bấm Lưu (Checkbox); lựa chọn không phải nhị phân.

- Nhãn mô tả thứ được bật, không mô tả hành động: "Chế độ tối", không "Bật chế độ tối".
- Không hiện chữ On/Off bên trong track.
- Sau khi gạt, không hỏi xác nhận. Nếu cần xác nhận, không dùng Toggle.

### Các component còn lại — tóm tắt
- **Textarea**: như Input; `showCount` khi có `maxLength`. Không auto-grow vô hạn.
- **Switch** thay Toggle cho component mới; cùng rule Toggle.
- **ComboBox** khi > 15 lựa chọn; **DatePicker** luôn theo locale, không tự parse.
- **Tabs** ≤ 6, không điều hướng giữa trang; `pill` chỉ trong toolbar.
- **Tooltip** một dòng, không hành động, không giấu thông tin bắt buộc. **Popover** có hành động và nút đóng rõ.
- **Menu**: một loại từ trong menu, xoá ở cuối sau separator, tone `danger`.
- **AlertDialog** cho xác nhận (không đóng khi bấm ngoài, focus vào Huỷ); **Modal** cho form; **Drawer** cho chi tiết/chỉnh sửa giữ ngữ cảnh; không lồng overlay.
- **Toast** một dòng, tự đóng 5s, cái mới thay cái cũ, chỉ có nút Hoàn tác.
- **Table**: tiêu đề `--text-xs` medium nền subtle; số căn phải; hành động hàng là menu ⋯; chọn hàng → thanh hàng loạt nền mực; rỗng dùng EmptyState compact.
- **Pagination** kèm "từ–đến / tổng"; trang hiện tại nền mực.
- **Breadcrumb** khi sâu > 2 cấp, mục cuối không link.
- **Avatar**: chữ cái đầu trên nền mực khi không có ảnh; nhóm chồng −8px, tối đa 4 + "+n".
- **Progress**: fill màu mực, không accent; không xác định = thanh chạy.
- **Slider** kèm giá trị hiển thị; cần chính xác thì thêm ô số.
- **Accordion** cho FAQ/nâng cao; không giấu thông tin bắt buộc.
- **Skeleton** theo hình dạng thật, nhấp nháy nhẹ; **EmptyState** theo 9.3.
- **ChatMessage**: một lượt hội thoại. `user` là bong bóng ngắn bên phải (`--color-bg-subtle`), `agent` là khối chữ rộng bên trái, không bong bóng. Trạng thái: `sending`, `streaming` (con trỏ ở cuối, vùng nội dung `aria-live="polite"`), `error` (inline notification theo 9.4). Hành động trên tin hiện khi hover hoặc focus.
- **AgentTrace**: nhật ký bước chạy của agent, đặt trên câu trả lời, đóng mặc định. Mỗi bước có trạng thái bằng icon + `aria-label`, không chỉ bằng màu; tham số dùng font mono. Không đặt thông tin bắt buộc trong này.
- **PromptInput**: ô soạn câu hỏi. Enter gửi, Shift + Enter xuống dòng, cao dần tới 8 dòng rồi cuộn. Nút Gửi khoá khi rỗng; khi trợ lý đang trả lời đổi thành Dừng. Bật `voice` để thêm ghi âm: khi đang ghi, ô gõ nhường chỗ cho dải trạng thái (chấm đỏ + đồng hồ), nút thành Huỷ / Xong; bản ghi chỉ thành chữ trong ô, không tự gửi.

### Component chưa có — quy tắc chung khi thêm

- Đặt tên theo chức năng, không theo hình dạng: `Select`, không `Dropdown`; `Notification`, không `Banner`.
- Props: `variant` cho kiểu hiển thị, `size` cho kích thước, `tone` cho ý nghĩa trạng thái, `disabled`, `loading`. Không đặt tên mới cho khái niệm đã có.
- Mọi component tương tác phải có trạng thái: default, hover, focus, active, disabled. Component nhập liệu thêm: error, readonly.
- Mọi component chứa dữ liệu phải có trạng thái: loading, rỗng, lỗi tải, dữ liệu dài/tràn.

---

## 9. Pattern — ghép component thành màn hình

### 9.1 Form

```
Tiêu đề form (heading-02)
Mô tả ngắn (body-compact-01, secondary)     ← tuỳ chọn
                                             ← space-6
Field 1
                                             ← space-4
Field 2
                                             ← space-4
Nhóm checkbox (có tiêu đề nhóm)
                                             ← space-8
[Huỷ]                              [Lưu]    ← secondary trái, primary phải
```

- Một cột. Hai cột chỉ khi hai field ngắn liên quan (Họ / Tên, Thành phố / Mã bưu điện).
- Field bắt buộc là mặc định; đánh dấu field **tuỳ chọn** bằng "(tuỳ chọn)" trong nhãn. Không dùng dấu *.
- Validate khi blur từng field và khi submit. Sau submit lỗi, focus vào field lỗi đầu tiên.
- Nút primary disabled khi đang gửi (`loading`), không disabled khi form chưa hợp lệ.
- Form dài hơn 8 field: chia section với `heading-03`, cách nhau `8`.

### 9.2 Dialog / Modal

- Rộng: sm 400px (xác nhận), md 560px (form ngắn), lg 800px (nội dung phức tạp). Không rộng hơn 800.
- Cấu trúc: tiêu đề `heading-03` → nội dung → footer nút (huỷ trái, chính phải).
- Đóng bằng: nút X góc trên phải, phím Esc, nút Huỷ. Không đóng khi bấm ra ngoài nếu là form có dữ liệu chưa lưu.
- Focus vào phần tử tương tác đầu tiên khi mở; trả focus về nút đã mở khi đóng.
- Modal xác nhận xoá: tiêu đề nói rõ đối tượng ("Xoá dự án Alpha?"), nội dung nói hệ quả, nút `danger` với động từ ("Xoá dự án").
- Không mở modal từ modal.

### 9.3 Empty state

Dùng khi: danh sách, bảng, hoặc khu vực chưa có dữ liệu.

```
        [icon 48px, màu muted]     ← tuỳ chọn
        Tiêu đề (heading-03)
        Một câu giải thích (body-compact-01, secondary)
        [Hành động primary]        ← space-4 phía trên
```

- Căn giữa, padding trên/dưới `12`.
- Tiêu đề nói **chưa có gì** và **có thể làm gì**: "Chưa có thành viên nào", không "Trống".
- Luôn có hành động nếu người dùng có thể tạo dữ liệu. Nếu không (kết quả tìm kiếm rỗng), gợi ý sửa tìm kiếm.
- Phân biệt ba loại: lần đầu (hướng dẫn bắt đầu), tìm kiếm rỗng (gợi ý), lỗi tải (nút thử lại).

### 9.4 Notification

| Loại | Vị trí | Tự đóng | Dùng cho |
|---|---|---|---|
| Toast | góc dưới phải (desktop) / dưới cùng (mobile) | sau 5s | xác nhận hành động vừa xong ("Đã lưu") |
| Inline | ngay trong ngữ cảnh, trên form hoặc section | không | lỗi hoặc cảnh báo liên quan đến vùng đó |
| Banner | đầu trang, dưới header | không | thông tin toàn hệ thống (bảo trì, hết hạn) |

- Toast tối đa một dòng, không có nút trừ "Hoàn tác".
- Inline có `tone` và icon tương ứng; nền `--color-bg-*-subtle`, viền trái 3px màu `--color-text-*`.
- Không hiện hai toast cùng lúc; cái mới thay cái cũ.
- Thông báo thành công không cần nếu kết quả đã nhìn thấy (mục mới hiện trong danh sách).

### 9.5 Loading

| Tình huống | Cách hiện |
|---|---|
| Tải cả trang lần đầu | skeleton theo hình dạng nội dung |
| Tải lại một vùng | skeleton trong vùng đó, phần còn lại giữ nguyên |
| Đang gửi form / hành động | nút `loading`, form giữ nguyên |
| Hành động dưới 300ms | không hiện gì |
| Hành động trên 10s | thanh tiến trình hoặc thông báo "đang xử lý, có thể rời trang" |

- Không dùng spinner toàn màn hình. Không chặn toàn bộ giao diện trừ khi hành động thực sự không thể song song.
- Skeleton dùng `--color-bg-subtle`, radius theo phần tử thật, không có hiệu ứng lấp lánh mạnh.

### 9.6 Bảng dữ liệu

- Tiêu đề cột `heading-04`, nền `--color-bg-subtle`, dính khi cuộn.
- Hàng cao 48px (md), viền dưới `--color-border-default`, hover `--color-bg-subtle`.
- Cột đầu tiên là định danh chính, luôn hiện, có thể dính khi cuộn ngang.
- Số căn phải, chữ căn trái, trạng thái (Badge) căn trái.
- Hành động trên hàng: menu "⋯" ở cột cuối, không dàn nhiều nút ra hàng.
- Hàng chọn được: checkbox ở cột đầu; chọn > 0 thì hiện thanh hành động hàng loạt thay tiêu đề bảng.
- Trên mobile: chuyển thành danh sách card, không cuộn ngang bảng nhiều cột.

### 9.7 Navigation

- Sidebar: tối đa 7 mục cấp 1. Nhiều hơn thì nhóm có tiêu đề.
- Mục đang chọn: nền `--color---color-bg-brand-subtle`, chữ `--color-text-brand`, thanh 3px bên trái màu `--color-bg-brand`.
- Tab: tối đa 6 tab; chỉ báo dưới tab đang chọn `--color-bg-brand` 2px. Tab không dùng để điều hướng giữa trang.
- Breadcrumb khi sâu hơn 2 cấp; mục cuối không phải link.


### 9.8 Landing page — style "Landing minimal"

Áp dụng cho mọi trang marketing của Ebig (landing sản phẩm, trang chung). Không áp dụng trong app.
Tham chiếu gốc: editorial studio kiến trúc — chữ là hình ảnh chính, lưới lề rộng, khoảng trắng dọc lớn, nhịp sáng/tối.

**Định nghĩa**

| Yếu tố | Quy tắc |
|---|---|
| Chữ | Đúng **hai cấp**: tiêu đề khổng lồ (`--display-lg/md/sm`, weight regular, tracking `--tracking-tight`, line-height 0.95–1.15) và chữ nhỏ (`--text-xs`/`--text-sm`). Không có cấp giữa. Không bold. |
| Eyebrow | `--text-xs`, màu muted, viết thường theo sentence case. **Không viết hoa toàn bộ.** |
| Nền | `--color-bg-canvas` (xám ấm), không trắng tinh. Khối nhấn dùng `--color---color-bg-canvas-deep`. |
| Lưới | 12 cột, `--lp-max` 1280px, lề `--lp-gutter`. Mọi phần tử bám cột; cụm chữ đẩy về mép cột (aside trái/phải), không "lơ lửng". |
| Khoảng dọc | `--lp-section` giữa section, `--lp-block` trong section. Chấp nhận trống nhiều. |
| Ảnh / minh hoạ | Không bo góc lớn, không bóng, không khung trang trí. Khối minh hoạ là bề mặt phẳng có viền 1px hoặc khối tối. |
| Nhịp | Xen kẽ kem → mực → kem. Mỗi tính năng chính là một khối đảo mực (`FeatureFullBleed`) cao theo nội dung, tối đa 3 khối liên tiếp. |
| Nút | CTA chính là Button `ink` size lg; CTA phụ là link gạch chân `--text-sm` màu muted. Nav CTA là chữ thường `--text-xs`. Accent chỉ dùng cho wordmark và một CTA cam nếu cần. |
| Motion | Không có. Chỉ hover đổi màu chữ. |
| Mobile | Dưới 900px: mọi cột về full width, aside ẩn, khối tối bỏ min-height viewport, dải hero cuộn ngang. |

**Thứ tự section chuẩn**

```
Nav                 logo trái · menu dọc cột 8–10 · CTA sát phải
HeroEditorial       eyebrow · tiêu đề ≤ 4 từ · dải 4–6 khối lệch cao thấp (số liệu / điểm nhấn), một khối tối
Manifesto           một câu 12–25 từ căn giữa cột 2–11 · hai mốc ở mép cột 1 và 12
SplitText           eyebrow + đoạn ≤ 60 từ cột 1–5 · minh hoạ cột 7–12
Timeline            eyebrow + tiêu đề cột 1–5 · danh sách mốc cột 7–12, mỗi hàng cách nhau viền 1px
FeatureFullBleed ×3 khối tối, số thứ tự 01/02/03, tiêu đề display-md, mô tả ≤ 40 từ, minh hoạ (terminal / biểu đồ) · đảo trái-phải luân phiên
Testimonial         single: quote display-sm căn giữa · pair: hai quote text-lg cột 1–5 và 8–12
Team                ảnh tràn lưới cột 1–12 · tiêu đề cột 1–7 · đoạn + link cột 8–12
CTAFinal            tiêu đề display-md cột 1–8 · ghi chú cột 9–12 · hai link gạch chân
Footer              brand + tagline cột 1–4 · 3 cột link từ cột 7 · meta dưới cùng
```

Comparison        eyebrow + tiêu đề · bảng 3 cột (tiêu chí / ta / họ), 3–7 hàng sự thật kiểm chứng được, không ✓/✗, cột ta nền brand-subtle
Pricing           eyebrow + tiêu đề · 2–4 tier, đúng một featured đảo mực, giá thật hoặc [cần số thật]
```
Thứ tự: Nav → Hero → Manifesto → Split → Timeline → Feature×n → Comparison → Pricing → Testimonial → Team → CTA → Footer. Có thể bỏ Manifesto, Split, Timeline, Comparison, Pricing, Testimonial, Team khi trang ngắn. CTAFinal mặc định luôn có; chỉ bỏ khi trang cố ý không có hành động nào, lúc đó footer là lối ra duy nhất. Không thêm section loại khác (logo strip, video) mà không định nghĩa trước theo cùng style.

**Nội dung**

- Tiêu đề hero: lời hứa, không phải tên tính năng. "Nhanh ở mọi nơi", không "CDN toàn cầu".
- Số liệu trong dải hero: số thật, có đơn vị, nhãn nói rõ đo cái gì.
- Mỗi FeatureFullBleed một ý. Minh hoạ phải chứng minh ý đó (terminal cho thấy header thật, không phải ảnh trang trí).
- Testimonial: nói kết quả cụ thể, có tên và chức danh thật. Không dùng quote chung chung.
- Timeline: mốc là thời gian thật (tuần, tháng, năm), không phải số thứ tự trang trí. 3–6 mốc, nhãn ≤ 6 từ, mô tả ≤ 30 từ. Dùng cho lịch dự án hoặc chặng đường công ty.
- Team: ảnh người làm việc thật, không phải ảnh stock. Một câu cam kết kiểm chứng được, không phải lời khen về đội ngũ.
- CTA cuối: động từ + kết quả trong khung thời gian. Ghi chú bên phải xoá rào cản (miễn phí, không cần thẻ).

**Cho AI**: landing là dữ liệu, không phải code. Đọc `src/sections/manifest.json`, sinh `src/content/landing.<tên>.json` theo schema `LandingSpec`, chạy `npm run validate:landing` đến khi sạch lỗi. Không tạo section, không viết layout, không dùng visual ngoài manifest. Thiếu dữ liệu thật → `[cần số thật]`, không bịa. Quy trình đầy đủ trong `CLAUDE.md`.

### 9.9 Trợ lý agent

Màn hình hỏi đáp với agent: sidebar hội thoại 240px, header 56px, luồng tin nhắn cuộn, ô soạn dưới cùng. Component `AgentAssistant`.

- Một primary mỗi màn hình: nút Gửi trong ô soạn. "Hội thoại mới" là `secondary`, hành động trên tin là `ghost`.
- Luồng tin nhắn rộng tối đa 800px; nội dung một tin tối đa 70 ký tự mỗi dòng (60 với tin của người dùng).
- Bốn trạng thái bắt buộc: đang tải (skeleton hình dạng tin nhắn), rỗng (EmptyState + tối đa 4 gợi ý câu hỏi), lỗi tải (EmptyState + Thử lại, khoá ô soạn), đang trả lời (AgentTrace chạy + con trỏ + nút Dừng).
- Lỗi một lượt không xoá các lượt trước: hiện inline trong tin đó kèm "Trả lời lại".
- Ghi âm là cách nhập thay bàn phím, không phải hành động riêng: kết quả rơi vào ô soạn để người dùng sửa rồi mới gửi. Luôn còn đường gõ tay; lỗi micro nói cách cấp quyền.
- Không tự cuộn ngược lên khi người dùng đang đọc; không hiện spinner toàn màn hình.
- Co giãn theo mục 3.5 (bám khung chứa, không bám cửa sổ):
  - < 1024: sidebar ẩn thành Drawer mở từ header (mục 3.3), padding content còn `4`.
  - < 640: header gọn lại, tiêu đề xuống `--text-md`, padding `3`, tin nhắn dùng `body-compact-01`, bong bóng người dùng rộng hết khung, gợi ý xếp dọc mỗi dòng một câu.
  - Thiết bị chạm (`hover: none`): mọi mục trong danh sách, chip gợi ý và nút trong ô soạn cao tối thiểu 40px.

---

### 9.10 Biểu đồ

Ba bảng màu, ba việc khác nhau — chi tiết và số đo ở trang Foundations/Data visualization.

- **Chọn dạng theo việc người đọc cần làm**, không theo thẩm mỹ: một con số → `StatTile`; xu hướng trong ô bảng → `Sparkline`; tỉ lệ so với mốc → `Meter`; so sánh hạng mục → `BarChart`; theo thời gian → `LineChart`; phần trên tổng → `BarChart` cộng dồn hoặc `DonutChart`; lưới hai chiều → `Heatmap`; trên/dưới mốc → `DivergingBar`; trước → sau → `Dumbbell`; quan hệ hai đại lượng → `ScatterPlot`; các bước trong luồng → `FunnelChart`.
- **Một trục y duy nhất.** Không có biểu đồ hai thang y — hai đại lượng khác thang thì tách hai biểu đồ. Đây là lỗi biểu đồ phổ biến nhất.
- **Màu series gán theo thứ tự cố định**, không xoay vòng. Lọc bớt series thì các series còn lại giữ nguyên màu: màu bám vào thực thể, không bám vào thứ hạng. Quá 8 series thì gộp "Khác" hoặc tách nhiều biểu đồ nhỏ.
- **Từ 2 series trở lên luôn có legend**; từ 4 trở xuống gắn nhãn trực tiếp. Danh tính không bao giờ chỉ dựa vào màu.
- **Mọi biểu đồ kèm bảng số** cho người dùng screen reader — các component đã dựng sẵn, đừng gỡ.
- **Chữ mặc token chữ**, không tô theo màu series. Ô màu nhỏ bên cạnh mới mang danh tính.
- Màu trạng thái (success/warning/danger) **không được dùng làm màu series**.
- Bốn bậc categorical trên nền sáng dưới 3:1 — dùng chúng thì phải có nhãn nhìn thấy hoặc bảng số kèm theo.
- Không dùng: đồng hồ kim, radar, pie quá 5 lát, biểu đồ 3D.

### 9.11 Card — chọn loại nào

Mười loại, xem đủ ví dụ ở story `Patterns/Card`.

| Loại | Component | Dùng khi |
|---|---|---|
| Nội dung | `Card` | mặc định: tiêu đề, mô tả, một hành động phụ |
| Số liệu | `StatTile` | một con số dẫn dắt + mức thay đổi |
| Biểu đồ | `ChartFrame` | biểu đồ kèm tiêu đề, legend, trạng thái |
| Rỗng | `Card` + `EmptyState` | chưa có dữ liệu |
| Có ảnh | `Card media` | ảnh là thứ nhận ra trước |
| Dải ngang | `Card orientation="horizontal"` | danh sách dọc, quét nhanh |
| Sản phẩm | ghép `Card` + `Badge` + `Button` | thương mại — không đóng thành component |
| Hồ sơ | ghép `Card` + `Avatar` | người — không đóng thành component |
| Hành động | `ActionCard` | một thẻ một việc, đúng một CTA |
| Chọn được | `SelectableCard` | chọn một trong nhiều, cả thẻ là vùng bấm |

- **Card không phải mặc định.** Dữ liệu cần quét theo cột, so sánh giữa các dòng, hoặc sắp xếp thì dùng `Table` (mục 9.6). Card làm mắt phải nhảy ngang dọc để so cùng một trường.
- **Thẻ bấm được phải là phần tử bấm được thật** — `SelectableCard` đặt input thật dưới lớp hình, không phải `div` gắn `onClick`. Bàn phím, nhóm radio và đọc màn hình đi theo đó.
- **Một primary mỗi thẻ.** Header chỉ nhận Badge hoặc nút ghost/secondary sm. Cần hai việc ngang nhau thì đó là hai thẻ.
- **Ảnh trong cùng một lưới giữ cùng tỉ lệ khung**, nếu không hàng sẽ so le. `alt` rỗng chỉ khi ảnh thuần trang trí.
- Không có bóng đổ: phân tầng bằng hairline, `raised` là viền đậm hơn chứ không phải shadow.

---

## 10. Content

### 10.1 Giọng

- Ngắn, rõ, trực tiếp. Chủ động, không bị động: "Đã gửi lời mời", không "Lời mời đã được gửi".
- Nói với người dùng là "bạn". Hệ thống không tự xưng.
- Không cảm thán, không "vui lòng", không xin lỗi trong thông báo lỗi.

### 10.2 Nhãn

| Loại | Quy tắc | Ví dụ |
|---|---|---|
| Nút | động từ + đối tượng, ≤ 3 từ | Lưu thay đổi · Mời thành viên · Xoá dự án |
| Tiêu đề trang | danh từ | Thành viên · Cài đặt · Dự án Alpha |
| Nhãn field | danh từ, không dấu hai chấm | Email · Ngày bắt đầu · Mô tả (tuỳ chọn) |
| Menu | động từ hoặc danh từ nhất quán trong một menu | Chỉnh sửa · Nhân bản · Xoá |
| Toggle | thứ được bật | Chế độ tối · Thông báo email |
| Tab | danh từ, một từ nếu được | Tổng quan · Thành viên · Lịch sử |

- Cùng một hành động dùng cùng một từ ở mọi nơi: nút "Mời", toast "Đã mời", không "Đã gửi lời mời".
- Không viết tắt trừ khi phổ biến hơn dạng đầy đủ (ID, URL, PDF).

### 10.3 Lỗi

Công thức: **cái gì sai** + **làm gì để sửa**.

- "Email không đúng định dạng. Kiểm tra lại dấu @ và tên miền."
- "Không tải được danh sách. Thử lại hoặc kiểm tra kết nối."
- Không: "Đã xảy ra lỗi", "Lỗi không xác định", "Oops".

### 10.4 Trạng thái trống và xác nhận

- Trống: nói chưa có gì + có thể làm gì. "Chưa có dự án nào. Tạo dự án đầu tiên để bắt đầu."
- Xác nhận huỷ: nói hệ quả, không hỏi "bạn có chắc". "Xoá dự án Alpha? Mọi tài liệu bên trong sẽ mất và không khôi phục được."

### 10.5 Định dạng

Giao diện dùng quy ước Anh — Mỹ (chữ trong sản phẩm viết tiếng Anh; tài liệu này viết tiếng Việt).

- Ngày: `Sep 17, 2026`, hoặc tương đối khi dưới 7 ngày ("2 hours ago", "Yesterday").
- Giờ: `9:00 AM`, 12 giờ.
- Số: dấu phẩy phân cách nghìn, dấu chấm thập phân: `1,250.50`.
- Tiền: `$1,250.00`, ký hiệu trước số, không cách.

---

## 11. Accessibility

Kiểm tra được, không thương lượng.

- Mọi phần tử tương tác dùng được bằng bàn phím: Tab đến, Enter/Space kích hoạt, Esc đóng.
- Thứ tự Tab theo thứ tự đọc. Không có tabindex dương.
- Focus luôn nhìn thấy: `focus-ring` trên mọi phần tử tương tác. Không `outline: none` mà không thay thế.
- Vùng bấm tối thiểu 40×40px trên touch, 24×24 trên desktop. Kích thước nhìn thấy có thể nhỏ hơn, vùng bấm thì không.
- Contrast theo mục 2.6.
- Không truyền thông tin chỉ bằng màu: badge có chữ, lỗi có icon hoặc chữ, link có gạch chân hoặc weight khác khi nằm trong đoạn văn.
- Icon có nghĩa có `aria-label`; icon trang trí có `aria-hidden`.
- Ô nhập có `label` liên kết bằng `htmlFor`; lỗi liên kết bằng `aria-describedby`; lỗi có `aria-invalid`.
- Modal có `role="dialog"`, `aria-modal`, `aria-labelledby` trỏ tiêu đề; khoá focus bên trong.
- Toggle có `role="switch"`.
- Thông báo động dùng `aria-live="polite"`; lỗi nghiêm trọng `assertive`.
- Tôn trọng `prefers-reduced-motion` và `prefers-color-scheme`.

---

## 12. Hướng dẫn cho AI

Khi sinh giao diện, component, hoặc màn hình cho hệ Ebig, AI phải:

1. **Đọc `src/tokens/tokens.css` trước** để biết token thật. Không tự đặt màu, cỡ chữ, khoảng cách.
2. **Chỉ dùng token semantic** trong CSS component. Gặp nhu cầu không có token semantic phù hợp → dừng lại và hỏi, không dùng primitive, không viết số.
3. **Dùng component có sẵn trong `src/components/`** trước. Chỉ tạo component mới khi không ghép được, và khi tạo phải theo cấu trúc 3 file (tsx / css / stories) + đủ story + export trong `index.ts`.
4. **Chọn type set (mục 4.2), không chọn cỡ chữ.** Chọn spacing từ thang (mục 5.1) theo đúng ngữ cảnh đã ghi.
5. **Áp pattern (mục 9)** khi sinh form, modal, empty state, notification, bảng, navigation. Không sáng tạo cấu trúc mới cho những thứ đã có pattern.
6. **Viết chữ theo mục 10.** Sentence case, động từ cho nút, lỗi có cách sửa, nhất quán từ ngữ.
7. **Đảm bảo mục 11** trong mọi output: keyboard, focus, aria, contrast.
8. **Co giãn theo mục 3.5**: container query cho component, media query cho khung trang và đặc tính thiết bị; ngưỡng 1023 / 639; kèm story 390px và 820px cho thứ chiếm cả vùng nội dung.
9. **Không thêm**: gradient, bóng trang trí, animation tự chạy, viết hoa toàn bộ, emoji trong giao diện, icon không có nghĩa.
10. **Khi không chắc** một quyết định có token hoặc quy tắc tương ứng không: hỏi, hoặc nêu rõ giả định trong output để người review thấy.
11. **Output của AI luôn kèm story** nếu là component, và kèm danh sách trạng thái đã xử lý nếu là màn hình (loading / rỗng / lỗi / dữ liệu dài).

Cách nạp: đặt file này ở gốc repo và tham chiếu từ `CLAUDE.md` (`Đọc DESIGN-RULES.md trước khi sinh bất kỳ UI nào`), hoặc đóng gói thành skill cùng `tokens.css` và một component mẫu.
