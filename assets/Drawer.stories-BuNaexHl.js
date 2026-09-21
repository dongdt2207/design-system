import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Bn3Orubj.js";import{n,t as r}from"./Switch-Dej_CDCa.js";import{n as i,t as a}from"./Button-BRDAKwT0.js";import{n as o,t as s}from"./Drawer-DCfIEadK.js";import{n as c,t as l}from"./Input-zHEJq65u.js";import{n as u,t as d}from"./Select-BoRSsv0C.js";var f,p,m,h,g;function _(){return(_=e((()=>{o(),i(),c(),u(),n(),f=t(),p={title:`Components/Drawer`,component:s,tags:[`autodocs`],argTypes:{trigger:{control:!1},children:{control:!1},footer:{control:!1},side:{control:`radio`,options:[`right`,`bottom`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},m={args:{title:`Chỉnh sửa thành viên`,description:`Trần Thu Hà · ha@ebig.co`,side:`right`,size:`md`},render:e=>(0,f.jsx)(s,{...e,trigger:(0,f.jsx)(a,{variant:`secondary`,children:`Mở drawer`}),footer:e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{variant:`secondary`,onClick:e,children:`Huỷ`}),(0,f.jsx)(a,{onClick:e,children:`Lưu thay đổi`})]}),children:(0,f.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,f.jsx)(l,{label:`Tên hiển thị`,defaultValue:`Trần Thu Hà`}),(0,f.jsx)(d,{label:`Vai trò`,defaultValue:`editor`,options:[{value:`admin`,label:`Quản trị viên`},{value:`editor`,label:`Biên tập`},{value:`viewer`,label:`Chỉ xem`}]}),(0,f.jsx)(r,{label:`Nhận thông báo email`,defaultSelected:!0})]})})},h={args:{title:`Bộ lọc`,side:`bottom`},render:e=>(0,f.jsx)(s,{...e,trigger:(0,f.jsx)(a,{variant:`secondary`,children:`Mở từ dưới`}),children:`Nội dung bộ lọc trên mobile.`})},g=[`EditMember`,`Bottom`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Bộ lọc',
    side: 'bottom'
  },
  render: a => <Drawer {...a} trigger={<Button variant="secondary">Mở từ dưới</Button>}>Nội dung bộ lọc trên mobile.</Drawer>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Bottom,m as EditMember,g as __namedExportsOrder,p as default};