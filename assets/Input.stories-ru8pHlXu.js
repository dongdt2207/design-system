import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Bn3Orubj.js";import{n,t as r}from"./Input-zHEJq65u.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=t(),a={title:`Components/Input`,component:r,tags:[`autodocs`],args:{label:`Email`,placeholder:`ban@ebig.co`,size:`md`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},iconStart:{control:!1}},decorators:[e=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(e,{})})],parameters:{docs:{description:{component:"Ô nhập một dòng. Luôn có `label` trừ khi ngữ cảnh đã đủ rõ (ô tìm kiếm)."}}}},o={},s={args:{hint:`Dùng email công ty để nhận thông báo.`}},c={args:{error:`Email không đúng định dạng.`,defaultValue:`dong@ebig`}},l={args:{disabled:!0,defaultValue:`dong@ebig.co`}},u=()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,i.jsx)(`circle`,{cx:`7`,cy:`7`,r:`4.5`}),(0,i.jsx)(`path`,{d:`M10.5 10.5 14 14`})]}),d={args:{label:void 0,placeholder:`Tìm thành viên`,iconStart:(0,i.jsx)(u,{})}},f={render:e=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,i.jsx)(r,{...e,size:`sm`,label:`Nhỏ`}),(0,i.jsx)(r,{...e,size:`md`,label:`Vừa`}),(0,i.jsx)(r,{...e,size:`lg`,label:`Lớn`})]}),parameters:{controls:{disable:!0}}},p=[`Default`,`WithHint`,`Error`,`Disabled`,`WithIcon`,`Sizes`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    hint: 'Dùng email công ty để nhận thông báo.'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Email không đúng định dạng.',
    defaultValue: 'dong@ebig'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'dong@ebig.co'
  }
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    placeholder: 'Tìm thành viên',
    iconStart: <SearchIcon />
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: a => <div style={{
    display: 'grid',
    gap: 16
  }}><Input {...a} size="sm" label="Nhỏ" /><Input {...a} size="md" label="Vừa" /><Input {...a} size="lg" label="Lớn" /></div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{o as Default,l as Disabled,c as Error,f as Sizes,s as WithHint,d as WithIcon,p as __namedExportsOrder,a as default};