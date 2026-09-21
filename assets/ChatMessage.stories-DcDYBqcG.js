import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-cv3-HitV.js";import{n,t as r}from"./Button-CIf9on4F.js";import{n as i,t as a}from"./ChatMessage-DT6p8jww.js";import{n as o,t as s}from"./AgentTrace-D1GGoDPK.js";var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{i(),o(),n(),c=t(),l={title:`Components/ChatMessage`,component:a,tags:[`autodocs`],args:{role:`agent`,time:`09:12`,children:`Doanh thu tháng 8 đạt 1.250.000.000 ₫, tăng 12% so với tháng 7. Mức tăng đến từ nhóm khách hàng doanh nghiệp.`},argTypes:{role:{control:`radio`,options:[`user`,`agent`]},status:{control:`radio`,options:[`idle`,`sending`,`streaming`,`error`]},trace:{control:!1},actions:{control:!1}},decorators:[e=>(0,c.jsx)(`div`,{style:{width:640},children:(0,c.jsx)(e,{})})],parameters:{docs:{description:{component:`Một lượt trong hội thoại với trợ lý. Người dùng là bong bóng ngắn bên phải; trợ lý là khối chữ rộng bên trái, đọc như văn bản.`}}}},u={},d={args:{role:`user`,children:`Doanh thu tháng 8 thế nào?`}},f={args:{role:`user`,status:`sending`,children:`So sánh với cùng kỳ năm ngoái.`}},p={args:{status:`streaming`,children:`Đang tổng hợp số liệu từ ba nguồn`}},m={args:{status:`error`,error:`Không đọc được bảng đơn hàng. Thử lại hoặc chọn nguồn dữ liệu khác.`,children:`Mình dừng ở bước đọc dữ liệu.`,actions:(0,c.jsx)(r,{variant:`secondary`,size:`sm`,children:`Trả lời lại`})}},h={args:{actions:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{variant:`ghost`,size:`sm`,children:`Sao chép`}),(0,c.jsx)(r,{variant:`ghost`,size:`sm`,children:`Trả lời lại`})]})}},g={args:{trace:(0,c.jsx)(s,{steps:[{id:`1`,label:`Đọc bảng đơn hàng`,detail:`orders.month = 2026-08`,status:`done`,meta:`0,8s`},{id:`2`,label:`Tính tổng doanh thu`,status:`done`,meta:`0,3s`},{id:`3`,label:`So sánh với tháng trước`,status:`done`,meta:`0,4s`}]})}},_={args:{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:`Có ba nguyên nhân làm chi phí băng thông tăng trong tháng 8:`}),(0,c.jsxs)(`ul`,{children:[(0,c.jsx)(`li`,{children:`Lưu lượng từ khu vực Singapore tăng 41% sau đợt ra mắt.`}),(0,c.jsx)(`li`,{children:`Tỉ lệ cache hit giảm từ 94% xuống 81% do đổi quy tắc purge.`}),(0,c.jsx)(`li`,{children:`Hai job đồng bộ chạy lặp mỗi giờ thay vì mỗi ngày.`})]}),(0,c.jsx)(`p`,{children:`Đổi lại quy tắc purge là việc đáng làm trước:`}),(0,c.jsx)(`pre`,{children:(0,c.jsx)(`code`,{children:`cdn purge --rule "static/*" --ttl 86400`})}),(0,c.jsx)(`p`,{children:`Sau khi đổi, chi phí ước tính giảm khoảng 18% ngay trong chu kỳ tính cước kế tiếp.`})]})}},v={render:()=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(a,{role:`user`,time:`09:11`,children:`Doanh thu tháng 8 thế nào?`}),(0,c.jsx)(a,{role:`agent`,time:`09:12`,trace:(0,c.jsx)(s,{steps:[{id:`1`,label:`Đọc bảng đơn hàng`,detail:`orders.month = 2026-08`,status:`done`,meta:`0,8s`},{id:`2`,label:`Tính tổng doanh thu`,status:`done`,meta:`0,3s`}]}),actions:(0,c.jsx)(r,{variant:`ghost`,size:`sm`,children:`Sao chép`}),children:`Doanh thu tháng 8 đạt 1.250.000.000 ₫, tăng 12% so với tháng 7.`})]}),parameters:{controls:{disable:!0}}},y=[`Agent`,`User`,`Sending`,`Streaming`,`Error`,`WithActions`,`WithTrace`,`LongContent`,`Conversation`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'user',
    children: 'Doanh thu tháng 8 thế nào?'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'user',
    status: 'sending',
    children: 'So sánh với cùng kỳ năm ngoái.'
  }
}`,...f.parameters?.docs?.source},description:{story:`Tin của người dùng chưa gửi xong — không khoá giao diện, chỉ ghi chú dưới bong bóng.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'streaming',
    children: 'Đang tổng hợp số liệu từ ba nguồn'
  }
}`,...p.parameters?.docs?.source},description:{story:'Trợ lý đang trả lời: con trỏ nhấp nháy ở cuối, vùng nội dung là `aria-live="polite"`.',...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    error: 'Không đọc được bảng đơn hàng. Thử lại hoặc chọn nguồn dữ liệu khác.',
    children: 'Mình dừng ở bước đọc dữ liệu.',
    actions: <Button variant="secondary" size="sm">Trả lời lại</Button>
  }
}`,...m.parameters?.docs?.source},description:{story:`Lỗi nói cái gì sai và cách sửa, kèm hành động thử lại.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <><Button variant="ghost" size="sm">Sao chép</Button><Button variant="ghost" size="sm">Trả lời lại</Button></>
  }
}`,...h.parameters?.docs?.source},description:{story:`Hành động trên tin hiện khi hover hoặc khi focus bằng bàn phím.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    trace: <AgentTrace steps={[{
      id: '1',
      label: 'Đọc bảng đơn hàng',
      detail: 'orders.month = 2026-08',
      status: 'done',
      meta: '0,8s'
    }, {
      id: '2',
      label: 'Tính tổng doanh thu',
      status: 'done',
      meta: '0,3s'
    }, {
      id: '3',
      label: 'So sánh với tháng trước',
      status: 'done',
      meta: '0,4s'
    }]} />
  }
}`,...g.parameters?.docs?.source},description:{story:`Trợ lý chạy công cụ trước khi trả lời — nhật ký bước đặt trên nội dung, đóng mặc định.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Có ba nguyên nhân làm chi phí băng thông tăng trong tháng 8:</p>
        <ul>
          <li>Lưu lượng từ khu vực Singapore tăng 41% sau đợt ra mắt.</li>
          <li>Tỉ lệ cache hit giảm từ 94% xuống 81% do đổi quy tắc purge.</li>
          <li>Hai job đồng bộ chạy lặp mỗi giờ thay vì mỗi ngày.</li>
        </ul>
        <p>Đổi lại quy tắc purge là việc đáng làm trước:</p>
        <pre><code>{\`cdn purge --rule "static/*" --ttl 86400\`}</code></pre>
        <p>Sau khi đổi, chi phí ước tính giảm khoảng 18% ngay trong chu kỳ tính cước kế tiếp.</p>
      </>
  }
}`,..._.parameters?.docs?.source},description:{story:`Dữ liệu dài: đoạn văn, danh sách, khối mã đều nằm trong cùng một khối nội dung.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <ChatMessage role="user" time="09:11">Doanh thu tháng 8 thế nào?</ChatMessage>
      <ChatMessage role="agent" time="09:12" trace={<AgentTrace steps={[{
      id: '1',
      label: 'Đọc bảng đơn hàng',
      detail: 'orders.month = 2026-08',
      status: 'done',
      meta: '0,8s'
    }, {
      id: '2',
      label: 'Tính tổng doanh thu',
      status: 'done',
      meta: '0,3s'
    }]} />} actions={<Button variant="ghost" size="sm">Sao chép</Button>}>
        Doanh thu tháng 8 đạt 1.250.000.000 ₫, tăng 12% so với tháng 7.
      </ChatMessage>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`Một lượt hỏi đáp đầy đủ.`,...v.parameters?.docs?.description}}}})))()}b();export{u as Agent,v as Conversation,m as Error,_ as LongContent,f as Sending,p as Streaming,d as User,h as WithActions,g as WithTrace,y as __namedExportsOrder,l as default};