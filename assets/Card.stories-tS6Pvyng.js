import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CCKs4X5K.js";import{n,t as r}from"./Button-CBTKY0YS.js";import{n as i,t as a}from"./Badge-DvnpDL9g.js";import{n as o,t as s}from"./Card-DjxWhcso.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o(),n(),i(),c=t(),l={title:`Components/Card`,component:s,tags:[`autodocs`],args:{title:`Cuộc họp tuần`,description:`Thứ Hai, 9:00 — Phòng họp lớn`,children:`Rà soát tiến độ các dự án đang chạy và phân công việc cho tuần mới.`,elevation:`flat`},argTypes:{elevation:{control:`radio`,options:[`flat`,`raised`]},action:{control:!1},footer:{control:!1}},decorators:[e=>(0,c.jsx)(`div`,{style:{width:400},children:(0,c.jsx)(e,{})})],parameters:{docs:{description:{component:`Khối nội dung liên quan. Card không lồng trong card.`}}}},u={},d={args:{elevation:`raised`}},f={args:{action:(0,c.jsx)(a,{tone:`warning`,dot:!0,children:`Chờ duyệt`}),footer:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{variant:`secondary`,size:`sm`,children:`Từ chối`}),(0,c.jsx)(r,{size:`sm`,children:`Duyệt`})]})}},p={args:{title:void 0,description:void 0}},m={name:`Có ảnh dẫn đầu`,args:{media:{src:`/img/phong-khach.jpg`,alt:`Phòng khách với sofa dài và kệ âm tường`,ratio:`16/9`},title:`Căn hộ Harbour Row`,description:`Hai phòng ngủ, bàn giao tháng 9.`},render:e=>(0,c.jsx)(`div`,{style:{maxWidth:320},children:(0,c.jsx)(s,{...e})})},h={name:`Ngang — dùng trong danh sách`,args:{orientation:`horizontal`,media:{src:`/img/bep.jpg`,alt:`Khu bếp liền bàn ăn`},title:`Bếp mở Linden Park`,description:`Cải tạo trong 6 tuần, gia chủ ở lại suốt thời gian thi công.`},render:e=>(0,c.jsx)(`div`,{style:{maxWidth:560},children:(0,c.jsx)(s,{...e})})},g={name:`Lưới card có ảnh`,render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:`var(--space-4)`},children:[{src:`/img/phong-khach.jpg`,alt:`Phòng khách`,title:`Harbour Row`,desc:`2 phòng ngủ · 11 tuần`},{src:`/img/bep.jpg`,alt:`Khu bếp`,title:`Linden Park`,desc:`Cải tạo · 6 tuần`},{src:`/img/phong-ngu.jpg`,alt:`Phòng ngủ`,title:`Ashfield`,desc:`Nhà phố · 14 tuần`}].map(e=>(0,c.jsx)(s,{media:{src:e.src,alt:e.alt,ratio:`4/3`},title:e.title,description:e.desc},e.title))})},_=[`Default`,`Raised`,`WithActionAndFooter`,`BodyOnly`,`CoAnh`,`Ngang`,`LuoiAnh`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    elevation: 'raised'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    action: <Badge tone="warning" dot>Chờ duyệt</Badge>,
    footer: <><Button variant="secondary" size="sm">Từ chối</Button><Button size="sm">Duyệt</Button></>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Có ảnh dẫn đầu',
  args: {
    media: {
      src: '/img/phong-khach.jpg',
      alt: 'Phòng khách với sofa dài và kệ âm tường',
      ratio: '16/9'
    },
    title: 'Căn hộ Harbour Row',
    description: 'Hai phòng ngủ, bàn giao tháng 9.'
  },
  render: args => <div style={{
    maxWidth: 320
  }}><Card {...args} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Ngang — dùng trong danh sách',
  args: {
    orientation: 'horizontal',
    media: {
      src: '/img/bep.jpg',
      alt: 'Khu bếp liền bàn ăn'
    },
    title: 'Bếp mở Linden Park',
    description: 'Cải tạo trong 6 tuần, gia chủ ở lại suốt thời gian thi công.'
  },
  render: args => <div style={{
    maxWidth: 560
  }}><Card {...args} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Lưới card có ảnh',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: 'var(--space-4)'
  }}>
      {[{
      src: '/img/phong-khach.jpg',
      alt: 'Phòng khách',
      title: 'Harbour Row',
      desc: '2 phòng ngủ · 11 tuần'
    }, {
      src: '/img/bep.jpg',
      alt: 'Khu bếp',
      title: 'Linden Park',
      desc: 'Cải tạo · 6 tuần'
    }, {
      src: '/img/phong-ngu.jpg',
      alt: 'Phòng ngủ',
      title: 'Ashfield',
      desc: 'Nhà phố · 14 tuần'
    }].map(c => <Card key={c.title} media={{
      src: c.src,
      alt: c.alt,
      ratio: '4/3'
    }} title={c.title} description={c.desc} />)}
    </div>
}`,...g.parameters?.docs?.source}}}})))()}v();export{p as BodyOnly,m as CoAnh,u as Default,g as LuoiAnh,h as Ngang,d as Raised,f as WithActionAndFooter,_ as __namedExportsOrder,l as default};