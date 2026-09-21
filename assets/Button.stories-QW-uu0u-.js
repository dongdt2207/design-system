import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BiOYxRmM.js";import{n,t as r}from"./Button-Db71b5BE.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i=t(),a={title:`Components/Button`,component:r,tags:[`autodocs`],args:{children:`Lưu thay đổi`,variant:`primary`,size:`md`},argTypes:{variant:{control:`radio`,options:[`primary`,`ink`,`secondary`,`ghost`,`danger`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]},iconStart:{control:!1},iconEnd:{control:!1}},parameters:{docs:{description:{component:"Nút hành động. Mỗi màn hình một `primary`. Accent dùng dè sẻn — CTA lớn cân nhắc `ink`. `danger` cho hành động không hoàn tác."}}}},o={},s={args:{variant:`ink`,size:`lg`,children:`Tải về cho macOS`}},c={args:{variant:`secondary`,children:`Huỷ`}},l={args:{variant:`ghost`,children:`Xem thêm`}},u={args:{variant:`danger`,children:`Xoá tài khoản`}},d={args:{disabled:!0}},f={args:{loading:!0}},p={args:{fullWidth:!0},decorators:[e=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(e,{})})]},m=()=>(0,i.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,i.jsx)(`path`,{d:`M8 3v10M3 8h10`})}),h={args:{iconStart:(0,i.jsx)(m,{}),children:`Thêm thành viên`}},g={render:()=>(0,i.jsx)(`div`,{style:{display:`grid`,gap:16},children:[`sm`,`md`,`lg`].map(e=>(0,i.jsx)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[`primary`,`ink`,`secondary`,`ghost`,`danger`].map(t=>(0,i.jsx)(r,{variant:t,size:e,children:t},t))},e))}),parameters:{controls:{disable:!0}}},_=[`Primary`,`Ink`,`Secondary`,`Ghost`,`Danger`,`Disabled`,`Loading`,`FullWidth`,`WithIcon`,`AllVariants`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ink',
    size: 'lg',
    children: 'Tải về cho macOS'
  }
}`,...s.parameters?.docs?.source},description:{story:`Nền mực — CTA lớn kiểu "Tải về".`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Huỷ'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Xem thêm'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Xoá tài khoản'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  decorators: [S => <div style={{
    width: 320
  }}><S /></div>]
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    iconStart: <PlusIcon />,
    children: 'Thêm thành viên'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
          {(['primary', 'ink', 'secondary', 'ghost', 'danger'] as const).map(v => <Button key={v} variant={v} size={size}>{v}</Button>)}
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as AllVariants,u as Danger,d as Disabled,p as FullWidth,l as Ghost,s as Ink,f as Loading,o as Primary,c as Secondary,h as WithIcon,_ as __namedExportsOrder,a as default};