import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BiOYxRmM.js";import{n,t as r}from"./AgentTrace-FSRsGDAh.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=t(),a=[{id:`1`,label:`Đọc bảng đơn hàng`,detail:`orders.month = 2026-08`,status:`done`,meta:`0,8s`},{id:`2`,label:`Tính tổng doanh thu`,status:`done`,meta:`0,3s`},{id:`3`,label:`So sánh với tháng trước`,status:`done`,meta:`0,4s`}],o={title:`Components/AgentTrace`,component:r,tags:[`autodocs`],args:{steps:a},argTypes:{steps:{control:!1}},decorators:[e=>(0,i.jsx)(`div`,{style:{width:520},children:(0,i.jsx)(e,{})})],parameters:{docs:{description:{component:`Nhật ký bước chạy của agent, đặt trên câu trả lời. Đóng mặc định: người dùng mở ra khi cần kiểm chứng. Không đặt thông tin bắt buộc ở đây.`}}}},s={},c={args:{defaultExpanded:!0}},l={args:{defaultExpanded:!0,steps:[a[0],{id:`2`,label:`Tính tổng doanh thu`,status:`running`},{id:`3`,label:`So sánh với tháng trước`,status:`done`,meta:`—`}].slice(0,2)}},u={args:{defaultExpanded:!0,steps:[a[0],{id:`2`,label:`Gọi API tỉ giá`,detail:`HTTP 503`,status:`error`,meta:`2,1s`}]}},d={args:{defaultExpanded:!0,steps:[...a,{id:`4`,label:`Lọc khách hàng doanh nghiệp`,detail:`customers.segment = "enterprise" AND customers.status = "active" AND orders.total > 5000000`,status:`done`,meta:`1,2s`},{id:`5`,label:`Dựng biểu đồ cột theo tuần`,status:`done`,meta:`0,6s`}]}},f=[`Collapsed`,`Expanded`,`Running`,`HasError`,`LongRun`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    steps: [steps[0], {
      id: '2',
      label: 'Tính tổng doanh thu',
      status: 'running' as const
    }, {
      id: '3',
      label: 'So sánh với tháng trước',
      status: 'done' as const,
      meta: '—'
    }].slice(0, 2)
  }
}`,...l.parameters?.docs?.source},description:{story:`Đang chạy: tóm tắt nói bước thứ mấy, biểu tượng bước hiện tại quay.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    steps: [steps[0], {
      id: '2',
      label: 'Gọi API tỉ giá',
      detail: 'HTTP 503',
      status: 'error' as const,
      meta: '2,1s'
    }]
  }
}`,...u.parameters?.docs?.source},description:{story:"Lỗi ở một bước — trạng thái có biểu tượng riêng và `aria-label`, không chỉ phân biệt bằng màu.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    steps: [...steps, {
      id: '4',
      label: 'Lọc khách hàng doanh nghiệp',
      detail: 'customers.segment = "enterprise" AND customers.status = "active" AND orders.total > 5000000',
      status: 'done' as const,
      meta: '1,2s'
    }, {
      id: '5',
      label: 'Dựng biểu đồ cột theo tuần',
      status: 'done' as const,
      meta: '0,6s'
    }]
  }
}`,...d.parameters?.docs?.source},description:{story:`Nhiều bước, tham số dài — danh sách xuống dòng, không cuộn ngang.`,...d.parameters?.docs?.description}}}})))()}p();export{s as Collapsed,c as Expanded,u as HasError,d as LongRun,l as Running,f as __namedExportsOrder,o as default};