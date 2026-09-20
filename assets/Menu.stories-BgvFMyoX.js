import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DCdpGzOd.js";import{n,t as r}from"./Button-TD6EjwS_.js";import{n as i,t as a}from"./Menu-KIWbYdYH.js";var o,s,c,l,u;function d(){return(d=e((()=>{i(),n(),o=t(),s={title:`Components/Menu`,component:a,tags:[`autodocs`],args:{items:[{id:`edit`,label:`Chỉnh sửa`,shortcut:`E`},{id:`dup`,label:`Nhân bản`,shortcut:`⌘D`},{id:`move`,label:`Chuyển thư mục`},{type:`separator`},{id:`archive`,label:`Lưu trữ`},{id:`delete`,label:`Xoá`,danger:!0}],placement:`bottom start`},argTypes:{items:{control:!1},trigger:{control:!1},placement:{control:`radio`,options:[`bottom start`,`bottom end`,`top start`,`top end`]}}},c={render:e=>(0,o.jsx)(a,{...e,trigger:(0,o.jsx)(r,{variant:`secondary`,children:`Hành động`})})},l={render:e=>(0,o.jsx)(a,{...e,trigger:(0,o.jsx)(r,{variant:`secondary`,children:`Sắp xếp`}),items:[{type:`section`,title:`Theo thời gian`,items:[{id:`new`,label:`Mới nhất`},{id:`old`,label:`Cũ nhất`}]},{type:`section`,title:`Theo tên`,items:[{id:`az`,label:`A → Z`},{id:`za`,label:`Z → A`}]}]})},u=[`Default`,`WithSections`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: a => <Menu {...a} trigger={<Button variant="secondary">Hành động</Button>} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: a => <Menu {...a} trigger={<Button variant="secondary">Sắp xếp</Button>} items={[{
    type: 'section',
    title: 'Theo thời gian',
    items: [{
      id: 'new',
      label: 'Mới nhất'
    }, {
      id: 'old',
      label: 'Cũ nhất'
    }]
  }, {
    type: 'section',
    title: 'Theo tên',
    items: [{
      id: 'az',
      label: 'A → Z'
    }, {
      id: 'za',
      label: 'Z → A'
    }]
  }]} />
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Default,l as WithSections,u as __namedExportsOrder,s as default};