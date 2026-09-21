import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BI5Y47fd.js";import{r as n,t as r}from"./ProgressBar-BkXdyzdx.js";function i({value:e,label:t,showValue:n,size:i=`md`}){return(0,a.jsx)(r,{className:`eb-progress eb-progress--${i}`,value:e,isIndeterminate:e==null,"aria-label":t??`Tiến trình`,children:({percentage:r,valueText:i})=>(0,a.jsxs)(a.Fragment,{children:[(t||n)&&(0,a.jsxs)(`div`,{className:`eb-progress__head`,children:[t&&(0,a.jsx)(`span`,{children:t}),n&&e!=null&&(0,a.jsx)(`span`,{className:`eb-progress__val`,children:i})]}),(0,a.jsx)(`div`,{className:`eb-progress__track`,children:(0,a.jsx)(`div`,{className:`eb-progress__fill`,style:{width:e==null?void 0:`${r}%`}})})]})})}var a;function o(){return(o=e((()=>{n(),a=t(),i.__docgenInfo={description:`Tiến trình có thể đo. Dưới 300ms không cần hiện; trên 10s thêm thông báo.`,methods:[],displayName:`Progress`,props:{value:{required:!1,tsType:{name:`number`},description:`0–100; bỏ trống = không xác định.`},label:{required:!1,tsType:{name:`string`},description:``},showValue:{required:!1,tsType:{name:`boolean`},description:`Hiện % bên phải.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}}}}})))()}var s,c,l,u,d,f;function p(){return(p=e((()=>{o(),s=t(),c={title:`Components/Progress`,component:i,tags:[`autodocs`],args:{value:64,label:`Đang tải lên`,showValue:!0},decorators:[e=>(0,s.jsx)(`div`,{style:{width:320},children:(0,s.jsx)(e,{})})]},l={},u={args:{value:void 0,label:`Đang xử lý`,showValue:!1}},d={args:{size:`sm`,label:void 0,showValue:!1}},f=[`Default`,`Indeterminate`,`Small`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined,
    label: 'Đang xử lý',
    showValue: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: undefined,
    showValue: false
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as Default,u as Indeterminate,d as Small,f as __namedExportsOrder,c as default};