import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CCKs4X5K.js";function n({label:e,value:t,max:n,limit:i,overIs:a=`bad`,formatValue:o=e=>e.toLocaleString(`vi-VN`)}){let s=Math.min(100,t/n*100),c=i!==void 0&&t>i;return(0,r.jsxs)(`div`,{className:`eb-meter${c&&a===`bad`?` eb-meter--over`:``}`,children:[(0,r.jsxs)(`div`,{className:`eb-meter__head`,children:[(0,r.jsx)(`span`,{className:`eb-meter__label`,children:e}),(0,r.jsx)(`span`,{className:`eb-meter__value`,children:o(t)})]}),(0,r.jsxs)(`div`,{className:`eb-meter__track`,role:`meter`,"aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":n,"aria-label":e,children:[(0,r.jsx)(`div`,{className:`eb-meter__fill`,style:{width:`${s}%`}}),i!==void 0&&(0,r.jsx)(`span`,{className:`eb-meter__limit`,style:{left:`${Math.min(100,i/n*100)}%`},title:`Mốc: ${o(i)}`})]}),(0,r.jsxs)(`div`,{className:`eb-meter__foot`,children:[(0,r.jsx)(`span`,{children:`0`}),i!==void 0&&(0,r.jsxs)(`span`,{children:[c?`Đã vượt mốc `:`Mốc `,o(i)]}),(0,r.jsx)(`span`,{children:o(n)})]})]})}var r;function i(){return(i=e((()=>{r=t(),n.__docgenInfo={description:`Một tỉ lệ so với một mốc. Không dùng bánh hai lát, không dùng đồng hồ kim.`,methods:[],displayName:`Meter`,props:{label:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`number`},description:``},max:{required:!0,tsType:{name:`number`},description:`Trần của thang.`},limit:{required:!1,tsType:{name:`number`},description:`Mốc cần đạt hoặc không được vượt — vẽ thành vạch dọc.`},overIs:{required:!1,tsType:{name:`union`,raw:`'bad' | 'good'`,elements:[{name:`literal`,value:`'bad'`},{name:`literal`,value:`'good'`}]},description:`Vượt limit là xấu (hạn mức) hay tốt (chỉ tiêu). Mặc định: xấu.`,defaultValue:{value:`'bad'`,computed:!1}},formatValue:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(n: number) => string`,signature:{arguments:[{type:{name:`number`},name:`n`}],return:{name:`string`}}},description:``,defaultValue:{value:`(n) => n.toLocaleString('vi-VN')`,computed:!1}}}}})))()}var a,o,s,c,l,u,d;function f(){return(f=e((()=>{i(),a={title:`Components/Charts/Meter`,component:n,parameters:{layout:`padded`},tags:[`autodocs`]},o={name:`Trong hạn mức`,args:{label:`Dung lượng đã dùng`,value:412,max:1e3,limit:800,formatValue:e=>`${e} GB`}},s={name:`Sắp chạm mốc`,args:{label:`Dung lượng đã dùng`,value:760,max:1e3,limit:800,formatValue:e=>`${e} GB`}},c={name:`Đã vượt mốc`,args:{label:`Dung lượng đã dùng`,value:910,max:1e3,limit:800,formatValue:e=>`${e} GB`}},l={name:`Vượt mốc là tốt (chỉ tiêu)`,args:{label:`Doanh số quý`,value:1240,max:1500,limit:1e3,overIs:`good`,formatValue:e=>`${e} triệu`}},u={name:`Không có mốc`,args:{label:`Tiến độ nhập liệu`,value:48,max:120,formatValue:e=>`${e} hồ sơ`}},d=[`HanMuc`,`SapCham`,`VuotMoc`,`ChiTieu`,`KhongMoc`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Trong hạn mức',
  args: {
    label: 'Dung lượng đã dùng',
    value: 412,
    max: 1000,
    limit: 800,
    formatValue: n => \`\${n} GB\`
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Sắp chạm mốc',
  args: {
    label: 'Dung lượng đã dùng',
    value: 760,
    max: 1000,
    limit: 800,
    formatValue: n => \`\${n} GB\`
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Đã vượt mốc',
  args: {
    label: 'Dung lượng đã dùng',
    value: 910,
    max: 1000,
    limit: 800,
    formatValue: n => \`\${n} GB\`
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Vượt mốc là tốt (chỉ tiêu)',
  args: {
    label: 'Doanh số quý',
    value: 1240,
    max: 1500,
    limit: 1000,
    overIs: 'good',
    formatValue: n => \`\${n} triệu\`
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Không có mốc',
  args: {
    label: 'Tiến độ nhập liệu',
    value: 48,
    max: 120,
    formatValue: n => \`\${n} hồ sơ\`
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as ChiTieu,o as HanMuc,u as KhongMoc,s as SapCham,c as VuotMoc,d as __namedExportsOrder,a as default};