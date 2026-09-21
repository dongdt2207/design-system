import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CCKs4X5K.js";import{n,t as r}from"./Sparkline-DykRd72P.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=t(),a=[12,18,15,22,19,28,31],o={title:`Components/Charts/Sparkline`,component:r,tags:[`autodocs`]},s={name:`Đường`,args:{data:a,label:`Đơn hàng 7 ngày qua`}},c={name:`Đường có vùng tô`,args:{data:a,label:`Đơn hàng 7 ngày qua`,area:!0}},l={name:`Cột`,args:{data:a,label:`Đơn hàng 7 ngày qua`,variant:`bar`}},u={name:`Tông trung tính`,args:{data:a,label:`Đơn hàng 7 ngày qua`,tone:`neutral`}},d={name:`Xu hướng giảm`,args:{data:[31,28,19,22,15,18,12],label:`Tồn kho 7 ngày qua`}},f={name:`Trong ô bảng`,render:()=>(0,i.jsxs)(`table`,{style:{borderCollapse:`collapse`,fontSize:`var(--text-sm)`},children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{style:{textAlign:`left`,padding:8},children:`Sản phẩm`}),(0,i.jsx)(`th`,{style:{textAlign:`left`,padding:8},children:`7 ngày`}),(0,i.jsx)(`th`,{style:{textAlign:`right`,padding:8},children:`Tổng`})]})}),(0,i.jsx)(`tbody`,{children:[[`Gói Cơ bản`,a,145],[`Gói Team`,[8,9,14,12,20,24,26],113]].map(([e,t,n])=>(0,i.jsxs)(`tr`,{style:{borderTop:`1px solid var(--color-border-soft)`},children:[(0,i.jsx)(`td`,{style:{padding:8},children:e}),(0,i.jsx)(`td`,{style:{padding:8},children:(0,i.jsx)(r,{data:t,label:`Xu hướng ${e}`})}),(0,i.jsx)(`td`,{style:{padding:8,textAlign:`right`},children:n})]},e))})]})},p=[`Duong`,`CoVung`,`Cot`,`Xam`,`DiXuong`,`TrongBang`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Đường',
  args: {
    data: week,
    label: 'Đơn hàng 7 ngày qua'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Đường có vùng tô',
  args: {
    data: week,
    label: 'Đơn hàng 7 ngày qua',
    area: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Cột',
  args: {
    data: week,
    label: 'Đơn hàng 7 ngày qua',
    variant: 'bar'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Tông trung tính',
  args: {
    data: week,
    label: 'Đơn hàng 7 ngày qua',
    tone: 'neutral'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Xu hướng giảm',
  args: {
    data: [31, 28, 19, 22, 15, 18, 12],
    label: 'Tồn kho 7 ngày qua'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Trong ô bảng',
  render: () => <table style={{
    borderCollapse: 'collapse',
    fontSize: 'var(--text-sm)'
  }}>
      <thead><tr><th style={{
          textAlign: 'left',
          padding: 8
        }}>Sản phẩm</th><th style={{
          textAlign: 'left',
          padding: 8
        }}>7 ngày</th><th style={{
          textAlign: 'right',
          padding: 8
        }}>Tổng</th></tr></thead>
      <tbody>
        {[['Gói Cơ bản', week, 145], ['Gói Team', [8, 9, 14, 12, 20, 24, 26], 113]].map(([name, d, total]) => <tr key={name as string} style={{
        borderTop: '1px solid var(--color-border-soft)'
      }}>
            <td style={{
          padding: 8
        }}>{name as string}</td>
            <td style={{
          padding: 8
        }}><Sparkline data={d as number[]} label={\`Xu hướng \${name}\`} /></td>
            <td style={{
          padding: 8,
          textAlign: 'right'
        }}>{total as number}</td>
          </tr>)}
      </tbody>
    </table>
}`,...f.parameters?.docs?.source}}}})))()}m();export{c as CoVung,l as Cot,d as DiXuong,s as Duong,f as TrongBang,u as Xam,p as __namedExportsOrder,o as default};