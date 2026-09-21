import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CdUAgEio.js";import"./chart-BDmoHGW5.js";function n({stages:e,formatValue:t=e=>e.toLocaleString(`vi-VN`),showDrop:n=!0}){let a=e[0]?.value||1;return(0,r.jsxs)(`div`,{className:`eb-funnel`,children:[e.map((o,s)=>{let c=s>0?e[s-1].value:null,l=c?c-o.value:0;return(0,r.jsxs)(`div`,{style:{display:`contents`},children:[(0,r.jsxs)(`div`,{className:`eb-funnel__row`,children:[(0,r.jsx)(`span`,{className:`eb-funnel__label`,children:o.label}),(0,r.jsx)(`div`,{className:`eb-funnel__track`,children:(0,r.jsx)(`div`,{className:`eb-funnel__fill`,style:{width:`${o.value/a*100}%`,background:i[Math.min(s,i.length-1)]}})}),(0,r.jsxs)(`span`,{className:`eb-funnel__value`,children:[t(o.value),` · `,Math.round(o.value/a*100),`%`]})]}),n&&c!==null&&l>0&&(0,r.jsxs)(`span`,{className:`eb-funnel__drop`,children:[`rơi `,t(l),` (`,Math.round(l/c*100),`%) so với bước trên`]})]},o.label)}),(0,r.jsxs)(`table`,{className:`eb-chart__table`,children:[(0,r.jsx)(`caption`,{children:`Số liệu dạng bảng`}),(0,r.jsx)(`thead`,{children:(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`col`,children:`Bước`}),(0,r.jsx)(`th`,{scope:`col`,children:`Số lượng`}),(0,r.jsx)(`th`,{scope:`col`,children:`So với bước đầu`})]})}),(0,r.jsx)(`tbody`,{children:e.map(e=>(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`row`,children:e.label}),(0,r.jsx)(`td`,{children:t(e.value)}),(0,r.jsxs)(`td`,{children:[Math.round(e.value/a*100),`%`]})]},e.label))})]})]})}var r,i;function a(){return(a=e((()=>{r=t(),i=[`var(--viz-seq-700)`,`var(--viz-seq-600)`,`var(--viz-seq-500)`,`var(--viz-seq-400)`],n.__docgenInfo={description:`Các bước trong một luồng, kèm mức rơi giữa các bước.`,methods:[],displayName:`FunnelChart`,props:{stages:{required:!0,tsType:{name:`Array`,elements:[{name:`FunnelStage`}],raw:`FunnelStage[]`},description:`Các bước theo thứ tự, giá trị giảm dần.`},formatValue:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(n: number) => string`,signature:{arguments:[{type:{name:`number`},name:`n`}],return:{name:`string`}}},description:``,defaultValue:{value:`(n) => n.toLocaleString('vi-VN')`,computed:!1}},showDrop:{required:!1,tsType:{name:`boolean`},description:`Hiện mức rơi giữa hai bước — thường mới là thứ người đọc cần.`,defaultValue:{value:`true`,computed:!1}}}}})))()}var o,s,c,l,u;function d(){return(d=e((()=>{a(),o={title:`Components/FunnelChart`,component:n,parameters:{layout:`padded`},tags:[`autodocs`]},s={name:`Bốn bước`,args:{stages:[{label:`Xem trang`,value:12400},{label:`Thêm vào giỏ`,value:3800},{label:`Bắt đầu thanh toán`,value:1900},{label:`Hoàn tất`,value:1245}]}},c={name:`Không hiện mức rơi`,args:{showDrop:!1,stages:[{label:`Xem trang`,value:12400},{label:`Thêm vào giỏ`,value:3800},{label:`Hoàn tất`,value:1245}]}},l={name:`Rơi mạnh ở một bước`,args:{stages:[{label:`Nhận email`,value:2e4},{label:`Mở email`,value:6200},{label:`Bấm vào liên kết`,value:620},{label:`Đăng ký`,value:410}]}},u=[`MacDinh`,`KhongHienRoi`,`RoiManh`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Bốn bước',
  args: {
    stages: [{
      label: 'Xem trang',
      value: 12400
    }, {
      label: 'Thêm vào giỏ',
      value: 3800
    }, {
      label: 'Bắt đầu thanh toán',
      value: 1900
    }, {
      label: 'Hoàn tất',
      value: 1245
    }]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Không hiện mức rơi',
  args: {
    showDrop: false,
    stages: [{
      label: 'Xem trang',
      value: 12400
    }, {
      label: 'Thêm vào giỏ',
      value: 3800
    }, {
      label: 'Hoàn tất',
      value: 1245
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Rơi mạnh ở một bước',
  args: {
    stages: [{
      label: 'Nhận email',
      value: 20000
    }, {
      label: 'Mở email',
      value: 6200
    }, {
      label: 'Bấm vào liên kết',
      value: 620
    }, {
      label: 'Đăng ký',
      value: 410
    }]
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as KhongHienRoi,s as MacDinh,l as RoiManh,u as __namedExportsOrder,o as default};