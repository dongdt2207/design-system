import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-cv3-HitV.js";import"./chart-BDmoHGW5.js";function n({data:e,labels:t={from:`Trước`,to:`Sau`},formatValue:n=e=>e.toLocaleString(`vi-VN`)}){let i=e.flatMap(e=>[e.from,e.to]),a=Math.min(...i),o=Math.max(...i)-a||1,s=e=>(e-a)/o*100;return(0,r.jsxs)(`div`,{className:`eb-dumb`,children:[(0,r.jsxs)(`ul`,{className:`eb-chart__legend`,children:[(0,r.jsxs)(`li`,{children:[(0,r.jsx)(`span`,{className:`eb-chart__swatch`,style:{background:`var(--color-text-muted)`},"aria-hidden":`true`}),t.from]}),(0,r.jsxs)(`li`,{children:[(0,r.jsx)(`span`,{className:`eb-chart__swatch`,style:{background:`var(--viz-cat-1)`},"aria-hidden":`true`}),t.to]})]}),e.map(e=>{let i=s(Math.min(e.from,e.to)),a=s(Math.max(e.from,e.to));return(0,r.jsxs)(`div`,{className:`eb-dumb__row`,children:[(0,r.jsx)(`span`,{className:`eb-dumb__label`,title:e.label,children:e.label}),(0,r.jsxs)(`div`,{className:`eb-dumb__track`,children:[(0,r.jsx)(`span`,{className:`eb-dumb__line`,style:{left:`${i}%`,width:`${a-i}%`}}),(0,r.jsx)(`span`,{className:`eb-dumb__dot eb-dumb__dot--from`,style:{left:`${s(e.from)}%`},title:`${t.from}: ${n(e.from)}`}),(0,r.jsx)(`span`,{className:`eb-dumb__dot eb-dumb__dot--to`,style:{left:`${s(e.to)}%`},title:`${t.to}: ${n(e.to)}`})]}),(0,r.jsxs)(`span`,{className:`eb-dumb__delta`,children:[e.to-e.from>0?`+`:``,n(e.to-e.from)]})]},e.label)}),(0,r.jsxs)(`table`,{className:`eb-chart__table`,children:[(0,r.jsx)(`caption`,{children:`Số liệu dạng bảng`}),(0,r.jsx)(`thead`,{children:(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`col`,children:`Hạng mục`}),(0,r.jsx)(`th`,{scope:`col`,children:t.from}),(0,r.jsx)(`th`,{scope:`col`,children:t.to}),(0,r.jsx)(`th`,{scope:`col`,children:`Chênh lệch`})]})}),(0,r.jsx)(`tbody`,{children:e.map(e=>(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`row`,children:e.label}),(0,r.jsx)(`td`,{children:n(e.from)}),(0,r.jsx)(`td`,{children:n(e.to)}),(0,r.jsxs)(`td`,{children:[e.to-e.from>0?`+`:``,n(e.to-e.from)]})]},e.label))})]})]})}var r;function i(){return(i=e((()=>{r=t(),n.__docgenInfo={description:`Trước → sau của từng hạng mục. Đọc được độ dịch chuyển, thứ hai thanh cột không cho thấy.`,methods:[],displayName:`Dumbbell`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`DumbbellDatum`}],raw:`DumbbellDatum[]`},description:``},labels:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ from: string; to: string }`,signature:{properties:[{key:`from`,value:{name:`string`,required:!0}},{key:`to`,value:{name:`string`,required:!0}}]}},description:`Tên hai mốc thời gian: "Tháng 8" → "Tháng 9".`,defaultValue:{value:`{ from: 'Trước', to: 'Sau' }`,computed:!1}},formatValue:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(n: number) => string`,signature:{arguments:[{type:{name:`number`},name:`n`}],return:{name:`string`}}},description:``,defaultValue:{value:`(n) => n.toLocaleString('vi-VN')`,computed:!1}}}}})))()}var a,o,s,c;function l(){return(l=e((()=>{i(),a={title:`Components/Charts/Dumbbell`,component:n,parameters:{layout:`padded`},tags:[`autodocs`]},o={name:`Trước → sau`,args:{labels:{from:`Tháng 8`,to:`Tháng 9`},data:[{label:`Hà Nội`,from:980,to:1240},{label:`TP.HCM`,from:1620,to:1890},{label:`Đà Nẵng`,from:700,to:640},{label:`Cần Thơ`,from:280,to:310}]}},s={name:`Đơn vị phần trăm`,args:{labels:{from:`Trước khi đổi`,to:`Sau khi đổi`},formatValue:e=>`${e}%`,data:[{label:`Tỉ lệ hoàn tất`,from:72,to:88},{label:`Tỉ lệ bỏ giữa chừng`,from:28,to:12}]}},c=[`TruocSau`,`PhanTram`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Trước → sau',
  args: {
    labels: {
      from: 'Tháng 8',
      to: 'Tháng 9'
    },
    data: [{
      label: 'Hà Nội',
      from: 980,
      to: 1240
    }, {
      label: 'TP.HCM',
      from: 1620,
      to: 1890
    }, {
      label: 'Đà Nẵng',
      from: 700,
      to: 640
    }, {
      label: 'Cần Thơ',
      from: 280,
      to: 310
    }]
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Đơn vị phần trăm',
  args: {
    labels: {
      from: 'Trước khi đổi',
      to: 'Sau khi đổi'
    },
    formatValue: n => \`\${n}%\`,
    data: [{
      label: 'Tỉ lệ hoàn tất',
      from: 72,
      to: 88
    }, {
      label: 'Tỉ lệ bỏ giữa chừng',
      from: 28,
      to: 12
    }]
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as PhanTram,o as TruocSau,c as __namedExportsOrder,a as default};