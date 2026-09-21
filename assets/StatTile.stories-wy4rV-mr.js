import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-cv3-HitV.js";import{n,t as r}from"./StatTile-qWMXX_Of.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=t(),a={title:`Components/Charts/StatTile`,component:r,parameters:{layout:`padded`},tags:[`autodocs`]},o={name:`Tăng — tốt`,args:{label:`Doanh thu tháng 9`,value:`1,24 tỷ ₫`,delta:{value:`12,4%`,direction:`up`},caption:`so với tháng 8`}},s={name:`Giảm — nhưng tốt`,args:{label:`Tỉ lệ rời bỏ`,value:`2,1%`,delta:{value:`0,6 điểm`,direction:`down`,meaning:`good`},caption:`so với tháng 8`}},c={name:`Tăng — nhưng xấu`,args:{label:`Thời gian phản hồi`,value:`840 ms`,delta:{value:`18%`,direction:`up`,meaning:`bad`},caption:`so với tuần trước`}},l={name:`Đi ngang`,args:{label:`Số người dùng hoạt động`,value:`8.420`,delta:{value:`0,2%`,direction:`flat`},caption:`so với tuần trước`}},u={name:`Kèm sparkline`,args:{label:`Đơn hàng`,value:`1.245`,delta:{value:`8,1%`,direction:`up`},caption:`7 ngày qua`,spark:[12,18,15,22,19,28,31]}},d={name:`Không có delta`,args:{label:`Tồn kho`,value:`312 sản phẩm`}},f={name:`Hàng KPI`,render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:`var(--space-4)`},children:[(0,i.jsx)(r,{label:`Doanh thu`,value:`1,24 tỷ ₫`,delta:{value:`12,4%`,direction:`up`},caption:`so với tháng 8`,spark:[8,12,10,16,14,19,24]}),(0,i.jsx)(r,{label:`Đơn hàng`,value:`1.245`,delta:{value:`8,1%`,direction:`up`},caption:`so với tháng 8`,spark:[12,18,15,22,19,28,31]}),(0,i.jsx)(r,{label:`Giá trị đơn trung bình`,value:`996.000 ₫`,delta:{value:`3,9%`,direction:`down`,meaning:`bad`},caption:`so với tháng 8`}),(0,i.jsx)(r,{label:`Tỉ lệ rời bỏ`,value:`2,1%`,delta:{value:`0,6 điểm`,direction:`down`,meaning:`good`},caption:`so với tháng 8`})]})},p=[`Tang`,`GiamTot`,`TangXau`,`DiNgang`,`KemSparkline`,`KhongDelta`,`Luoi`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Tăng — tốt',
  args: {
    label: 'Doanh thu tháng 9',
    value: '1,24 tỷ ₫',
    delta: {
      value: '12,4%',
      direction: 'up'
    },
    caption: 'so với tháng 8'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Giảm — nhưng tốt',
  args: {
    label: 'Tỉ lệ rời bỏ',
    value: '2,1%',
    delta: {
      value: '0,6 điểm',
      direction: 'down',
      meaning: 'good'
    },
    caption: 'so với tháng 8'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Tăng — nhưng xấu',
  args: {
    label: 'Thời gian phản hồi',
    value: '840 ms',
    delta: {
      value: '18%',
      direction: 'up',
      meaning: 'bad'
    },
    caption: 'so với tuần trước'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Đi ngang',
  args: {
    label: 'Số người dùng hoạt động',
    value: '8.420',
    delta: {
      value: '0,2%',
      direction: 'flat'
    },
    caption: 'so với tuần trước'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Kèm sparkline',
  args: {
    label: 'Đơn hàng',
    value: '1.245',
    delta: {
      value: '8,1%',
      direction: 'up'
    },
    caption: '7 ngày qua',
    spark: [12, 18, 15, 22, 19, 28, 31]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Không có delta',
  args: {
    label: 'Tồn kho',
    value: '312 sản phẩm'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Hàng KPI',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'var(--space-4)'
  }}>
      <StatTile label="Doanh thu" value="1,24 tỷ ₫" delta={{
      value: '12,4%',
      direction: 'up'
    }} caption="so với tháng 8" spark={[8, 12, 10, 16, 14, 19, 24]} />
      <StatTile label="Đơn hàng" value="1.245" delta={{
      value: '8,1%',
      direction: 'up'
    }} caption="so với tháng 8" spark={[12, 18, 15, 22, 19, 28, 31]} />
      <StatTile label="Giá trị đơn trung bình" value="996.000 ₫" delta={{
      value: '3,9%',
      direction: 'down',
      meaning: 'bad'
    }} caption="so với tháng 8" />
      <StatTile label="Tỉ lệ rời bỏ" value="2,1%" delta={{
      value: '0,6 điểm',
      direction: 'down',
      meaning: 'good'
    }} caption="so với tháng 8" />
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as DiNgang,s as GiamTot,u as KemSparkline,d as KhongDelta,f as Luoi,o as Tang,c as TangXau,p as __namedExportsOrder,a as default};