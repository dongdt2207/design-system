import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-CCKs4X5K.js";import"./chart-BDmoHGW5.js";function r({columns:e,rows:t,max:n,formatValue:r=e=>e.toLocaleString(`vi-VN`),unit:s=``}){let c=t.flatMap(e=>e.values).filter(e=>e!==null),l=n??Math.max(...c,1),u=e=>o[Math.min(o.length-1,Math.floor(e/l*o.length))];return(0,a.jsxs)(`div`,{className:`eb-heat`,children:[(0,a.jsxs)(`div`,{className:`eb-heat__grid`,style:{gridTemplateColumns:`auto repeat(${e.length}, minmax(18px, 1fr))`},children:[(0,a.jsx)(`span`,{}),e.map(e=>(0,a.jsx)(`span`,{className:`eb-heat__colhead`,children:e},e)),t.map(t=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(`span`,{className:`eb-heat__rowhead`,children:t.label}),t.values.map((n,i)=>(0,a.jsx)(`span`,{className:`eb-heat__cell${n===null?` eb-heat__cell--empty`:``}`,style:n===null?void 0:{background:u(n)},title:n===null?`${t.label} · ${e[i]}: không có dữ liệu`:`${t.label} · ${e[i]}: ${r(n)}${s}`},`${t.label}-${i}`))]},t.label))]}),(0,a.jsxs)(`div`,{className:`eb-heat__scale`,children:[(0,a.jsx)(`span`,{children:`Thấp`}),(0,a.jsx)(`span`,{className:`eb-heat__swatches`,"aria-hidden":`true`,children:o.map(e=>(0,a.jsx)(`span`,{style:{background:e}},e))}),(0,a.jsxs)(`span`,{children:[`Cao · tới `,r(l),s]})]}),(0,a.jsxs)(`table`,{className:`eb-chart__table`,children:[(0,a.jsx)(`caption`,{children:`Số liệu dạng bảng`}),(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{scope:`col`,children:`Hàng`}),e.map(e=>(0,a.jsx)(`th`,{scope:`col`,children:e},e))]})}),(0,a.jsx)(`tbody`,{children:t.map(e=>(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{scope:`row`,children:e.label}),e.values.map((e,t)=>(0,a.jsx)(`td`,{children:e===null?`—`:r(e)+s},t))]},e.label))})]})]})}var i,a,o;function s(){return(s=e((()=>{i=n(),a=t(),o=[`var(--viz-seq-100)`,`var(--viz-seq-200)`,`var(--viz-seq-300)`,`var(--viz-seq-400)`,`var(--viz-seq-500)`,`var(--viz-seq-600)`,`var(--viz-seq-700)`],r.__docgenInfo={description:``,methods:[],displayName:`Heatmap`,props:{columns:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Nhãn cột, ví dụ giờ trong ngày.`},rows:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; values: (number | null)[] }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`values`,value:{name:`Array`,elements:[{name:`unknown`}],raw:`(number | null)[]`,required:!0}}]}}],raw:`{ label: string; values: (number | null)[] }[]`},description:`Mỗi hàng: nhãn + một giá trị cho mỗi cột. null = không có dữ liệu.`},max:{required:!1,tsType:{name:`number`},description:``},formatValue:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(n: number) => string`,signature:{arguments:[{type:{name:`number`},name:`n`}],return:{name:`string`}}},description:``,defaultValue:{value:`(n) => n.toLocaleString('vi-VN')`,computed:!1}},unit:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})))()}var c,l,u,d,f,p,m;function h(){return(h=e((()=>{s(),c=[`0h`,`3h`,`6h`,`9h`,`12h`,`15h`,`18h`,`21h`],l=[`T2`,`T3`,`T4`,`T5`,`T6`,`T7`,`CN`].map((e,t)=>({label:e,values:c.map((e,n)=>Math.round(20+60*Math.sin((n+t)/2.2)**2+(t>4?-15:0)))})),u={title:`Components/Charts/Heatmap`,component:r,parameters:{layout:`padded`},tags:[`autodocs`]},d={name:`Lưu lượng theo giờ`,args:{columns:c,rows:l,unit:` đơn`}},f={name:`Có ô thiếu dữ liệu`,args:{columns:c,rows:l.map((e,t)=>t===2?{...e,values:e.values.map((e,t)=>t<3?null:e)}:e),unit:` đơn`}},p={name:`Lưới nhỏ`,args:{columns:[`Q1`,`Q2`,`Q3`],rows:[{label:`Bắc`,values:[12,40,66]},{label:`Nam`,values:[30,22,88]}]}},m=[`TheoGio`,`CoONhungTrong`,`LuoiNho`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Lưu lượng theo giờ',
  args: {
    columns: gio,
    rows,
    unit: ' đơn'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Có ô thiếu dữ liệu',
  args: {
    columns: gio,
    rows: rows.map((r, i) => i === 2 ? {
      ...r,
      values: r.values.map((v, j) => j < 3 ? null : v)
    } : r),
    unit: ' đơn'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Lưới nhỏ',
  args: {
    columns: ['Q1', 'Q2', 'Q3'],
    rows: [{
      label: 'Bắc',
      values: [12, 40, 66]
    }, {
      label: 'Nam',
      values: [30, 22, 88]
    }]
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as CoONhungTrong,p as LuoiNho,d as TheoGio,m as __namedExportsOrder,u as default};