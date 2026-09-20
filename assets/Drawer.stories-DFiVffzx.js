import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DCdpGzOd.js";import{a as n,n as r,t as i}from"./Dialog-DRBxjTbX.js";import{r as a,t as o}from"./Heading-CBKpABD3.js";import{n as s,t as c}from"./Switch-BPJnvB7w.js";import{n as l,r as u,t as d}from"./Modal-Dne1FeDi.js";import{n as f,t as p}from"./Pressable-BHOCtD0W.js";import{n as m,t as h}from"./Button-TD6EjwS_.js";import{n as g,t as _}from"./Input-BZIChX5K.js";import{n as v,t as y}from"./Select-fPiWl_ji.js";function b({trigger:e,title:t,description:n,side:a=`right`,size:s=`md`,footer:c,children:u}){return(0,x.jsxs)(i,{children:[(0,x.jsx)(p,{children:(0,x.jsx)(`span`,{style:{display:`inline-flex`},children:e})}),(0,x.jsx)(l,{className:`eb-drawer__overlay eb-drawer__overlay--${a}`,isDismissable:!0,children:(0,x.jsx)(d,{className:`eb-drawer eb-drawer--${a} eb-drawer--${s}`,children:(0,x.jsx)(r,{className:`eb-drawer__dialog`,children:({close:e})=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{className:`eb-drawer__header`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(o,{slot:`title`,className:`eb-drawer__title`,children:t}),n&&(0,x.jsx)(`p`,{className:`eb-drawer__desc`,children:n})]}),(0,x.jsx)(`button`,{className:`eb-modal__close`,onClick:e,"aria-label":`Đóng`,children:(0,x.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,children:(0,x.jsx)(`path`,{d:`M4 4l8 8M12 4l-8 8`})})})]}),(0,x.jsx)(`div`,{className:`eb-drawer__body`,children:typeof u==`function`?u(e):u}),c&&(0,x.jsx)(`div`,{className:`eb-drawer__footer`,children:typeof c==`function`?c(e):c})]})})})})]})}var x;function S(){return(S=e((()=>{n(),u(),a(),f(),x=t(),b.__docgenInfo={description:`Panel trượt vào từ mép, giữ ngữ cảnh trang. Dùng cho chi tiết/chỉnh sửa một mục; không dùng cho xác nhận (AlertDialog).`,methods:[],displayName:`Drawer`,props:{trigger:{required:!0,tsType:{name:`ReactNode`},description:``},title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},side:{required:!1,tsType:{name:`union`,raw:`'right' | 'bottom'`,elements:[{name:`literal`,value:`'right'`},{name:`literal`,value:`'bottom'`}]},description:`Trượt từ phải (chi tiết, form phụ) hoặc dưới (mobile).`,defaultValue:{value:`'right'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},footer:{required:!1,tsType:{name:`union`,raw:`ReactNode | ((close: () => void) => ReactNode)`,elements:[{name:`ReactNode`},{name:`unknown`}]},description:``},children:{required:!0,tsType:{name:`union`,raw:`ReactNode | ((close: () => void) => ReactNode)`,elements:[{name:`ReactNode`},{name:`unknown`}]},description:``}}}})))()}var C,w,T,E,D;function O(){return(O=e((()=>{S(),m(),g(),v(),s(),C=t(),w={title:`Components/Drawer`,component:b,tags:[`autodocs`],argTypes:{trigger:{control:!1},children:{control:!1},footer:{control:!1},side:{control:`radio`,options:[`right`,`bottom`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},T={args:{title:`Chỉnh sửa thành viên`,description:`Trần Thu Hà · ha@ebig.co`,side:`right`,size:`md`},render:e=>(0,C.jsx)(b,{...e,trigger:(0,C.jsx)(h,{variant:`secondary`,children:`Mở drawer`}),footer:e=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h,{variant:`secondary`,onClick:e,children:`Huỷ`}),(0,C.jsx)(h,{onClick:e,children:`Lưu thay đổi`})]}),children:(0,C.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,C.jsx)(_,{label:`Tên hiển thị`,defaultValue:`Trần Thu Hà`}),(0,C.jsx)(y,{label:`Vai trò`,defaultValue:`editor`,options:[{value:`admin`,label:`Quản trị viên`},{value:`editor`,label:`Biên tập`},{value:`viewer`,label:`Chỉ xem`}]}),(0,C.jsx)(c,{label:`Nhận thông báo email`,defaultSelected:!0})]})})},E={args:{title:`Bộ lọc`,side:`bottom`},render:e=>(0,C.jsx)(b,{...e,trigger:(0,C.jsx)(h,{variant:`secondary`,children:`Mở từ dưới`}),children:`Nội dung bộ lọc trên mobile.`})},D=[`EditMember`,`Bottom`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Chỉnh sửa thành viên',
    description: 'Trần Thu Hà · ha@ebig.co',
    side: 'right',
    size: 'md'
  },
  render: a => <Drawer {...a} trigger={<Button variant="secondary">Mở drawer</Button>} footer={close => <><Button variant="secondary" onClick={close}>Huỷ</Button><Button onClick={close}>Lưu thay đổi</Button></>}>
      <div style={{
      display: 'grid',
      gap: 16
    }}><Input label="Tên hiển thị" defaultValue="Trần Thu Hà" /><Select label="Vai trò" defaultValue="editor" options={[{
        value: 'admin',
        label: 'Quản trị viên'
      }, {
        value: 'editor',
        label: 'Biên tập'
      }, {
        value: 'viewer',
        label: 'Chỉ xem'
      }]} /><Switch label="Nhận thông báo email" defaultSelected /></div>
    </Drawer>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Bộ lọc',
    side: 'bottom'
  },
  render: a => <Drawer {...a} trigger={<Button variant="secondary">Mở từ dưới</Button>}>Nội dung bộ lọc trên mobile.</Drawer>
}`,...E.parameters?.docs?.source}}}})))()}O();export{E as Bottom,T as EditMember,D as __namedExportsOrder,w as default};