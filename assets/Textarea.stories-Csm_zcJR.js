import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-BiOYxRmM.js";var r,i,a;function o(){return(o=e((()=>{r=n(),i=t(),a=(0,r.forwardRef)(function({label:e,hint:t,error:n,rows:a=4,showCount:o,id:s,className:c,disabled:l,maxLength:u,value:d,defaultValue:f,onChange:p,...m},h){let g=(0,r.useId)(),_=s??g,v=`${_}-desc`,y=[`eb-field`,n&&`eb-field--error`,l&&`eb-field--disabled`,c].filter(Boolean).join(` `),b=String(d??f??``).length;return(0,i.jsxs)(`div`,{className:y,children:[e&&(0,i.jsx)(`label`,{className:`eb-field__label`,htmlFor:_,children:e}),(0,i.jsx)(`div`,{className:`eb-field__control eb-textarea__control`,children:(0,i.jsx)(`textarea`,{ref:h,id:_,className:`eb-field__input eb-textarea__input`,rows:a,disabled:l,maxLength:u,value:d,defaultValue:f,onChange:p,"aria-invalid":n?!0:void 0,"aria-describedby":t||n?v:void 0,...m})}),(0,i.jsxs)(`div`,{className:`eb-textarea__foot`,children:[n||t?(0,i.jsx)(`p`,{id:v,className:n?`eb-field__error`:`eb-field__hint`,children:n??t}):(0,i.jsx)(`span`,{}),o&&u&&(0,i.jsxs)(`span`,{className:`eb-textarea__count`,children:[b,`/`,u]})]})]})}),a.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{label:{required:!1,tsType:{name:`string`},description:``},hint:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},rows:{required:!1,tsType:{name:`number`},description:`Số dòng hiển thị ban đầu.`,defaultValue:{value:`4`,computed:!1}},showCount:{required:!1,tsType:{name:`boolean`},description:`Hiện đếm ký tự khi có maxLength.`}},composes:[`TextareaHTMLAttributes`]}})))()}var s,c,l,u,d,f,p;function m(){return(m=e((()=>{o(),s=t(),c={title:`Components/Textarea`,component:a,tags:[`autodocs`],args:{label:`Mô tả`,placeholder:`Mục tiêu và phạm vi của dự án…`},decorators:[e=>(0,s.jsx)(`div`,{style:{width:400},children:(0,s.jsx)(e,{})})]},l={},u={args:{maxLength:200,showCount:!0,defaultValue:`Nền tảng intranet cho công ty 50–500 người.`}},d={args:{error:`Mô tả cần ít nhất 20 ký tự.`,defaultValue:`Ngắn quá`}},f={args:{disabled:!0,defaultValue:`Không sửa được.`}},p=[`Default`,`WithCount`,`Error`,`Disabled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    maxLength: 200,
    showCount: true,
    defaultValue: 'Nền tảng intranet cho công ty 50–500 người.'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Mô tả cần ít nhất 20 ký tự.',
    defaultValue: 'Ngắn quá'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Không sửa được.'
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as Default,f as Disabled,d as Error,u as WithCount,p as __namedExportsOrder,c as default};