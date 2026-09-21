import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CdUAgEio.js";import"./chart-BDmoHGW5.js";function n({data:e,formatValue:t=e=>e.toLocaleString(`vi-VN`),poles:n={negative:`Dưới mốc`,positive:`Trên mốc`}}){let i=Math.max(...e.map(e=>Math.abs(e.value)),1);return(0,r.jsxs)(`div`,{className:`eb-div`,children:[(0,r.jsxs)(`ul`,{className:`eb-chart__legend`,children:[(0,r.jsxs)(`li`,{children:[(0,r.jsx)(`span`,{className:`eb-chart__swatch`,style:{background:`var(--viz-diverge-cool)`},"aria-hidden":`true`}),n.negative]}),(0,r.jsxs)(`li`,{children:[(0,r.jsx)(`span`,{className:`eb-chart__swatch`,style:{background:`var(--viz-diverge-warm)`},"aria-hidden":`true`}),n.positive]})]}),e.map(e=>{let n=Math.abs(e.value)/i*50;return(0,r.jsxs)(`div`,{className:`eb-div__row`,children:[(0,r.jsx)(`span`,{className:`eb-div__label`,title:e.label,children:e.label}),(0,r.jsxs)(`div`,{className:`eb-div__track`,children:[(0,r.jsx)(`span`,{className:`eb-div__zero`,style:{left:`50%`}}),(0,r.jsx)(`span`,{className:`eb-div__fill eb-div__fill--${e.value<0?`neg`:`pos`}`,style:e.value<0?{right:`50%`,width:`${n}%`}:{left:`50%`,width:`${n}%`}})]}),(0,r.jsxs)(`span`,{className:`eb-div__value`,children:[e.value>0?`+`:``,t(e.value)]})]},e.label)}),(0,r.jsxs)(`table`,{className:`eb-chart__table`,children:[(0,r.jsx)(`caption`,{children:`Số liệu dạng bảng`}),(0,r.jsx)(`thead`,{children:(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`col`,children:`Hạng mục`}),(0,r.jsx)(`th`,{scope:`col`,children:`Chênh lệch`})]})}),(0,r.jsx)(`tbody`,{children:e.map(e=>(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`row`,children:e.label}),(0,r.jsxs)(`td`,{children:[e.value>0?`+`:``,t(e.value)]})]},e.label))})]})]})}var r;function i(){return(i=e((()=>{r=t(),n.__docgenInfo={description:`Trên/dưới một mốc: chênh lệch so với chỉ tiêu, tăng trưởng âm dương. Điểm giữa là 0.`,methods:[],displayName:`DivergingBar`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`DivergingDatum`}],raw:`DivergingDatum[]`},description:`Giá trị âm và dương quanh mốc 0.`},formatValue:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(n: number) => string`,signature:{arguments:[{type:{name:`number`},name:`n`}],return:{name:`string`}}},description:``,defaultValue:{value:`(n) => n.toLocaleString('vi-VN')`,computed:!1}},poles:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ negative: string; positive: string }`,signature:{properties:[{key:`negative`,value:{name:`string`,required:!0}},{key:`positive`,value:{name:`string`,required:!0}}]}},description:`Nhãn hai cực, dùng cho legend và cho screen reader.`,defaultValue:{value:`{ negative: 'Dưới mốc', positive: 'Trên mốc' }`,computed:!1}}}}})))()}var a,o,s,c,l;function u(){return(u=e((()=>{i(),a={title:`Components/DivergingBar`,component:n,parameters:{layout:`padded`},tags:[`autodocs`]},o={name:`Chênh lệch so với chỉ tiêu`,args:{data:[{label:`Hà Nội`,value:240},{label:`TP.HCM`,value:580},{label:`Đà Nẵng`,value:-120},{label:`Cần Thơ`,value:-310}],poles:{negative:`Dưới chỉ tiêu`,positive:`Vượt chỉ tiêu`}}},s={name:`Tăng trưởng theo tháng`,args:{data:[{label:`T6`,value:8},{label:`T7`,value:-3},{label:`T8`,value:12},{label:`T9`,value:24}],formatValue:e=>`${e}%`,poles:{negative:`Giảm`,positive:`Tăng`}}},c={name:`Tất cả đều âm`,args:{data:[{label:`Hà Nội`,value:-40},{label:`TP.HCM`,value:-180}],poles:{negative:`Giảm`,positive:`Tăng`}}},l=[`SoVoiChiTieu`,`TangTruong`,`TatCaAm`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Chênh lệch so với chỉ tiêu',
  args: {
    data: [{
      label: 'Hà Nội',
      value: 240
    }, {
      label: 'TP.HCM',
      value: 580
    }, {
      label: 'Đà Nẵng',
      value: -120
    }, {
      label: 'Cần Thơ',
      value: -310
    }],
    poles: {
      negative: 'Dưới chỉ tiêu',
      positive: 'Vượt chỉ tiêu'
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Tăng trưởng theo tháng',
  args: {
    data: [{
      label: 'T6',
      value: 8
    }, {
      label: 'T7',
      value: -3
    }, {
      label: 'T8',
      value: 12
    }, {
      label: 'T9',
      value: 24
    }],
    formatValue: n => \`\${n}%\`,
    poles: {
      negative: 'Giảm',
      positive: 'Tăng'
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Tất cả đều âm',
  args: {
    data: [{
      label: 'Hà Nội',
      value: -40
    }, {
      label: 'TP.HCM',
      value: -180
    }],
    poles: {
      negative: 'Giảm',
      positive: 'Tăng'
    }
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{o as SoVoiChiTieu,s as TangTruong,c as TatCaAm,l as __namedExportsOrder,a as default};