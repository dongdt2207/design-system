import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-cv3-HitV.js";import{n,t as r}from"./BarChart-BhYsh3c-.js";import{n as i,t as a}from"./ChartFrame-DfVGJC5f.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),n(),o=t(),s=[{label:`Hà Nội`,values:[1240]},{label:`TP.HCM`,values:[1890]},{label:`Đà Nẵng`,values:[640]}],c={title:`Components/Charts/ChartFrame`,component:a,parameters:{layout:`padded`},tags:[`autodocs`]},l={args:{title:`Đơn hàng theo chi nhánh`,subtitle:`Tháng 9/2026 · đơn vị: đơn`,children:(0,o.jsx)(r,{data:s})}},u={name:`Có legend (2 series trở lên)`,args:{title:`Đơn hàng theo kênh`,subtitle:`Tháng 9/2026`,legend:[{name:`Trực tuyến`,color:`var(--viz-cat-1)`},{name:`Tại quầy`,color:`var(--viz-cat-2)`}],children:(0,o.jsx)(r,{series:[`Trực tuyến`,`Tại quầy`],stacked:!0,data:[{label:`Hà Nội`,values:[820,420]},{label:`TP.HCM`,values:[1190,700]}]})}},d={name:`Đang tải`,args:{title:`Đơn hàng theo chi nhánh`,state:`loading`}},f={name:`Rỗng`,args:{title:`Đơn hàng theo chi nhánh`,state:`empty`}},p={name:`Lỗi tải`,args:{title:`Đơn hàng theo chi nhánh`,state:`error`,onRetry:()=>{}}},m=[`Ready`,`CoLegend`,`DangTai`,`Rong`,`Loi`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Đơn hàng theo chi nhánh',
    subtitle: 'Tháng 9/2026 · đơn vị: đơn',
    children: <BarChart data={data} />
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Có legend (2 series trở lên)',
  args: {
    title: 'Đơn hàng theo kênh',
    subtitle: 'Tháng 9/2026',
    legend: [{
      name: 'Trực tuyến',
      color: 'var(--viz-cat-1)'
    }, {
      name: 'Tại quầy',
      color: 'var(--viz-cat-2)'
    }],
    children: <BarChart series={['Trực tuyến', 'Tại quầy']} stacked data={[{
      label: 'Hà Nội',
      values: [820, 420]
    }, {
      label: 'TP.HCM',
      values: [1190, 700]
    }]} />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Đang tải',
  args: {
    title: 'Đơn hàng theo chi nhánh',
    state: 'loading'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Rỗng',
  args: {
    title: 'Đơn hàng theo chi nhánh',
    state: 'empty'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Lỗi tải',
  args: {
    title: 'Đơn hàng theo chi nhánh',
    state: 'error',
    onRetry: () => {}
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as CoLegend,d as DangTai,p as Loi,l as Ready,f as Rong,m as __namedExportsOrder,c as default};