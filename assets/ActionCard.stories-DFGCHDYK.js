import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CCKs4X5K.js";import{n,t as r}from"./ActionCard-BsI6BA8E.js";import{n as i,t as a}from"./Button-CBTKY0YS.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o=t(),s={title:`Components/ActionCard`,component:r,parameters:{layout:`padded`},tags:[`autodocs`]},c={name:`Mặc định`,args:{title:`Đặt lịch khảo sát`,description:`Một buổi tại nhà để đo đạc và nghe nếp sinh hoạt, trước khi vẽ bất cứ thứ gì.`,action:(0,o.jsx)(a,{variant:`primary`,children:`Đặt lịch`}),note:`Miễn phí, không cần cọc`},render:e=>(0,o.jsx)(`div`,{style:{maxWidth:480},children:(0,o.jsx)(r,{...e})})},l={name:`Nền nhạt — đặt trong trang dày đặc`,args:{variant:`subtle`,title:`Nhập dữ liệu từ bảng tính`,description:`Tải lên tệp .xlsx, hệ thống khớp cột rồi hỏi lại trước khi ghi.`,action:(0,o.jsx)(a,{variant:`secondary`,children:`Chọn tệp`})},render:e=>(0,o.jsx)(`div`,{style:{maxWidth:480},children:(0,o.jsx)(r,{...e})})},u={name:`Không có mô tả`,args:{title:`Tạo báo cáo mới`,action:(0,o.jsx)(a,{variant:`primary`,children:`Tạo báo cáo`})},render:e=>(0,o.jsx)(`div`,{style:{maxWidth:480},children:(0,o.jsx)(r,{...e})})},d={name:`Hai thẻ cạnh nhau`,render:()=>(0,o.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`var(--space-4)`},children:[(0,o.jsx)(r,{title:`Mời đồng nghiệp`,description:`Gửi lời mời qua email, họ tự đặt mật khẩu.`,action:(0,o.jsx)(a,{variant:`secondary`,children:`Mời`})}),(0,o.jsx)(r,{title:`Kết nối kho dữ liệu`,description:`Đọc trực tiếp từ kho, không phải tải tệp thủ công.`,action:(0,o.jsx)(a,{variant:`secondary`,children:`Kết nối`})})]})},f=[`MacDinh`,`Nhat`,`KhongMoTa`,`Hang`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Mặc định',
  args: {
    title: 'Đặt lịch khảo sát',
    description: 'Một buổi tại nhà để đo đạc và nghe nếp sinh hoạt, trước khi vẽ bất cứ thứ gì.',
    action: <Button variant="primary">Đặt lịch</Button>,
    note: 'Miễn phí, không cần cọc'
  },
  render: args => <div style={{
    maxWidth: 480
  }}><ActionCard {...args} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Nền nhạt — đặt trong trang dày đặc',
  args: {
    variant: 'subtle',
    title: 'Nhập dữ liệu từ bảng tính',
    description: 'Tải lên tệp .xlsx, hệ thống khớp cột rồi hỏi lại trước khi ghi.',
    action: <Button variant="secondary">Chọn tệp</Button>
  },
  render: args => <div style={{
    maxWidth: 480
  }}><ActionCard {...args} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Không có mô tả',
  args: {
    title: 'Tạo báo cáo mới',
    action: <Button variant="primary">Tạo báo cáo</Button>
  },
  render: args => <div style={{
    maxWidth: 480
  }}><ActionCard {...args} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Hai thẻ cạnh nhau',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--space-4)'
  }}>
      <ActionCard title="Mời đồng nghiệp" description="Gửi lời mời qua email, họ tự đặt mật khẩu." action={<Button variant="secondary">Mời</Button>} />
      <ActionCard title="Kết nối kho dữ liệu" description="Đọc trực tiếp từ kho, không phải tải tệp thủ công." action={<Button variant="secondary">Kết nối</Button>} />
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Hang,u as KhongMoTa,c as MacDinh,l as Nhat,f as __namedExportsOrder,s as default};