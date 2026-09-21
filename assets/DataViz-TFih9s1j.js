import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CCKs4X5K.js";import{i as n,r}from"./react-CM_ILeOv.js";import{a as i,o as a}from"./blocks-BBUlm_LH.js";import{r as o,s}from"./TokenBlocks-WprxEyJr.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Foundations/Data visualization`}),`
`,(0,u.jsx)(t.h1,{id:`màu-dữ-liệu`,children:`Màu dữ liệu`}),`
`,(0,u.jsxs)(t.p,{children:[`Ba việc khác nhau, ba bảng khác nhau. Chọn theo `,(0,u.jsx)(t.strong,{children:`việc màu đang làm`}),`, không theo thẩm mỹ.`]}),`
`,(0,u.jsx)(t.p,{children:`| Bảng | Việc nó làm | Dùng cho |
|---|---|---|
| Categorical | danh tính — phân biệt series rời rạc | cột, đường, lát bánh |
| Sequential | độ lớn liên tục | heatmap, choropleth |
| Diverging | hai cực đối nhau quanh một mốc | chênh lệch, tăng/giảm so với 0 |`}),`
`,(0,u.jsxs)(t.p,{children:[`Màu trạng thái (`,(0,u.jsx)(t.code,{children:`--color-text-success`}),`, `,(0,u.jsx)(t.code,{children:`--color-text-danger`}),`…) `,(0,u.jsx)(t.strong,{children:`không được dùng làm series`}),`. Chúng có nghĩa riêng, và luôn đi kèm icon + nhãn chứ không đứng một mình bằng màu.`]}),`
`,(0,u.jsx)(t.h2,{id:`categorical--8-bậc`,children:`Categorical — 8 bậc`}),`
`,(0,u.jsxs)(t.p,{children:[`Gán theo `,(0,u.jsx)(t.strong,{children:`thứ tự cố định`}),`, không xoay vòng: series thứ nhất luôn lấy `,(0,u.jsx)(t.code,{children:`--viz-cat-1`}),`. Lọc bỏ bớt series thì các series còn lại `,(0,u.jsx)(t.strong,{children:`giữ nguyên màu cũ`}),` — màu bám vào thực thể, không bám vào thứ hạng. Cần series thứ 9 thì gộp thành "Khác" hoặc tách thành nhiều biểu đồ nhỏ, không sinh thêm hue.`]}),`
`,(0,u.jsx)(o,{names:[`--viz-cat-1`,`--viz-cat-2`,`--viz-cat-3`,`--viz-cat-4`,`--viz-cat-5`,`--viz-cat-6`,`--viz-cat-7`,`--viz-cat-8`]}),`
`,(0,u.jsxs)(t.p,{children:[`Bậc 1 chính là brand `,(0,u.jsx)(t.code,{children:`#287CF0`}),`. Gạt sang dark để thấy bộ màu dark — `,(0,u.jsx)(t.strong,{children:`chọn riêng cho nền tối`}),`, không phải lật ngược từ light.`]}),`
`,(0,u.jsx)(t.h2,{id:`sequential--một-tông-sáng--đậm`,children:`Sequential — một tông, sáng → đậm`}),`
`,(0,u.jsx)(o,{names:[`--viz-seq-100`,`--viz-seq-200`,`--viz-seq-300`,`--viz-seq-400`,`--viz-seq-500`,`--viz-seq-600`,`--viz-seq-700`]}),`
`,(0,u.jsxs)(t.p,{children:[`Dùng `,(0,u.jsx)(t.strong,{children:`cả dải`}),` cho độ lớn liên tục, ở đó bậc nhạt nhất nghĩa là "gần bằng không" nên được phép chìm vào nền. Với `,(0,u.jsx)(t.strong,{children:`bậc rời rạc`}),` (phễu, hạng, nhóm có thứ tự) thì đầu gần nền phải tách khỏi nền: trên nền sáng bắt đầu từ `,(0,u.jsx)(t.code,{children:`--viz-seq-400`}),`, trên nền tối dừng ở `,(0,u.jsx)(t.code,{children:`--viz-seq-600`}),`.`]}),`
`,(0,u.jsx)(t.h2,{id:`diverging--hai-cực-giữa-là-xám`,children:`Diverging — hai cực, giữa là xám`}),`
`,(0,u.jsx)(o,{names:[`--viz-diverge-cool`,`--viz-diverge-mid`,`--viz-diverge-warm`]}),`
`,(0,u.jsxs)(t.p,{children:[`Xanh ↔ đỏ, hai cực đọc ra là đối nghịch. Điểm giữa phải là `,(0,u.jsx)(t.strong,{children:`xám trung tính`}),` — nó nghĩa là "không có gì", nên không được là một hue. Hai cánh chia đều số bậc.`]}),`
`,(0,u.jsx)(t.h2,{id:`quy-tắc-khi-vẽ`,children:`Quy tắc khi vẽ`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Một trục.`}),` Không bao giờ hai thang y trên cùng một biểu đồ. Hai đại lượng khác thang thì tách hai biểu đồ, hoặc quy về cùng một mốc chỉ số.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Từ 2 series trở lên luôn có legend`}),`, và từ 4 series trở xuống thì gắn nhãn trực tiếp — danh tính không bao giờ chỉ dựa vào màu. Một series thì tiêu đề đã gọi tên nó, không cần legend.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Chữ mặc chữ.`}),` Số liệu, nhãn, legend dùng `,(0,u.jsx)(t.code,{children:`--color-text-primary/secondary/muted`}),`, không tô theo màu series. Ô màu nhỏ bên cạnh mới là thứ mang danh tính.`]}),`
`,(0,u.jsx)(t.li,{children:`Mark mảnh, lưới và trục lùi về sau, không ghi số lên mọi điểm.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`bốn-màu-cần-nhãn-kèm-trên-nền-sáng`,children:`Bốn màu cần nhãn kèm trên nền sáng`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`--viz-cat-2`}),` (2.98:1), `,(0,u.jsx)(t.code,{children:`--viz-cat-3`}),` (2.62:1), `,(0,u.jsx)(t.code,{children:`--viz-cat-4`}),` (2.02:1), `,(0,u.jsx)(t.code,{children:`--viz-cat-5`}),` (2.51:1) nằm dưới 3:1 so với nền kem. Chúng vẫn hợp lệ, nhưng `,(0,u.jsx)(t.strong,{children:`bắt buộc có nhãn nhìn thấy được hoặc bảng số kèm theo`}),` — không được để người đọc chỉ dựa vào màu. Trên nền tối cả 8 bậc đều đạt ≥ 3:1.`]}),`
`,(0,u.jsx)(t.h2,{id:`kết-quả-kiểm-tra`,children:`Kết quả kiểm tra`}),`
`,(0,u.jsx)(t.p,{children:`Bảng màu được chấm bằng máy, không ước lượng bằng mắt.`}),`
`,(0,u.jsxs)(t.p,{children:[`| Phép kiểm | Light (nền `,(0,u.jsx)(t.code,{children:`#f7f7f4`}),`) | Dark (nền `,(0,u.jsx)(t.code,{children:`#16150f`}),`) |
|---|---|---|
| Dải sáng OKLCH | đạt, cả 8 trong 0.43–0.77 | đạt, cả 8 trong 0.48–0.67 |
| Sàn chroma ≥ 0.10 | đạt | đạt |
| Tách màu cho người mù màu (cặp kề) | ΔE 9.1 — đạt mốc 8 | ΔE 8.4 — đạt |
| Sàn thị lực thường (cặp kề) | ΔE 19.6 — đạt sàn 15 | ΔE 19.3 — đạt |
| Tương phản với nền | 4 bậc dưới 3:1, cần nhãn kèm | cả 8 đạt ≥ 3:1 |`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),s()})))()}d();export{l as default};