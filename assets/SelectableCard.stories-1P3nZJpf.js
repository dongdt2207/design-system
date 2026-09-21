import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CCKs4X5K.js";import{n,t as r}from"./SelectableCard-DOiu0PaO.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),a={title:`Components/SelectableCard`,component:r,parameters:{layout:`padded`},tags:[`autodocs`]},o={name:`Nhóm radio — chọn một`,render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`,maxWidth:420},children:[(0,i.jsx)(r,{name:`goi`,value:`design`,title:`Chỉ thiết kế`,description:`Bạn đã có thầu thi công, chỉ cần bản vẽ.`,meta:`3.400 $ / phòng`,defaultChecked:!0}),(0,i.jsx)(r,{name:`goi`,value:`full`,title:`Trọn gói`,description:`Thiết kế và thi công trên một hợp đồng.`,meta:`từ 52.000 $ / căn`}),(0,i.jsx)(r,{name:`goi`,value:`reno`,title:`Cải tạo`,description:`Làm từng phòng, gia chủ vẫn ở lại.`,meta:`báo giá theo hạng mục`})]})},s={name:`Checkbox — chọn nhiều`,render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`,maxWidth:420},children:[(0,i.jsx)(r,{type:`checkbox`,name:`them`,value:`mocs`,title:`Đồ mộc đặt riêng`,description:`Tủ bếp, tủ áo, kệ âm tường.`,defaultChecked:!0}),(0,i.jsx)(r,{type:`checkbox`,name:`them`,value:`dien`,title:`Đi lại điện nước`}),(0,i.jsx)(r,{type:`checkbox`,name:`them`,value:`rem`,title:`Rèm và vải bọc`})]})},c={name:`Bị khoá`,render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`,maxWidth:420},children:[(0,i.jsx)(r,{name:`kho`,value:`a`,title:`Gói tiêu chuẩn`,description:`Còn nhận đơn trong tháng này.`,defaultChecked:!0}),(0,i.jsx)(r,{name:`kho`,value:`b`,title:`Gói cao cấp`,description:`Đã kín lịch tới tháng 12.`,disabled:!0})]})},l={name:`Một thẻ đơn lẻ`,args:{name:`don`,value:`x`,title:`Nhận bản tin hàng tháng`,description:`Một email mỗi tháng, huỷ bất cứ lúc nào.`,type:`checkbox`}},u=[`NhomRadio`,`NhieuLuaChon`,`Khoa`,`MotThe`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Nhóm radio — chọn một',
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-3)',
    maxWidth: 420
  }}>
      <SelectableCard name="goi" value="design" title="Chỉ thiết kế" description="Bạn đã có thầu thi công, chỉ cần bản vẽ." meta="3.400 $ / phòng" defaultChecked />
      <SelectableCard name="goi" value="full" title="Trọn gói" description="Thiết kế và thi công trên một hợp đồng." meta="từ 52.000 $ / căn" />
      <SelectableCard name="goi" value="reno" title="Cải tạo" description="Làm từng phòng, gia chủ vẫn ở lại." meta="báo giá theo hạng mục" />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Checkbox — chọn nhiều',
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-3)',
    maxWidth: 420
  }}>
      <SelectableCard type="checkbox" name="them" value="mocs" title="Đồ mộc đặt riêng" description="Tủ bếp, tủ áo, kệ âm tường." defaultChecked />
      <SelectableCard type="checkbox" name="them" value="dien" title="Đi lại điện nước" />
      <SelectableCard type="checkbox" name="them" value="rem" title="Rèm và vải bọc" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Bị khoá',
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-3)',
    maxWidth: 420
  }}>
      <SelectableCard name="kho" value="a" title="Gói tiêu chuẩn" description="Còn nhận đơn trong tháng này." defaultChecked />
      <SelectableCard name="kho" value="b" title="Gói cao cấp" description="Đã kín lịch tới tháng 12." disabled />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Một thẻ đơn lẻ',
  args: {
    name: 'don',
    value: 'x',
    title: 'Nhận bản tin hàng tháng',
    description: 'Một email mỗi tháng, huỷ bất cứ lúc nào.',
    type: 'checkbox'
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Khoa,l as MotThe,s as NhieuLuaChon,o as NhomRadio,u as __namedExportsOrder,a as default};