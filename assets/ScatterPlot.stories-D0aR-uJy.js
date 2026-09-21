import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-BiOYxRmM.js";import"./chart-BDmoHGW5.js";function r({series:e,xLabel:t,yLabel:n,formatX:r=e=>e.toLocaleString(`vi-VN`),formatY:l=e=>e.toLocaleString(`vi-VN`),height:u=260,sizeLabel:d,formatSize:f=e=>e.toLocaleString(`vi-VN`)}){let[p,m]=(0,i.useState)(null),h=e.flatMap(e=>e.points),g=h.map(e=>e.x),_=h.map(e=>e.y),v=Math.min(...g),y=Math.max(...g),b=Math.min(0,..._),x=Math.max(..._),S=e=>c.l+(e-v)/(y-v||1)*(s-c.l-c.r),C=e=>u-c.b-(e-b)/(x-b||1)*(u-c.b-c.t),w=h.map(e=>e.size).filter(e=>e!==void 0),T=w.length>0,E=T?Math.min(...w):0,D=T?Math.max(...w):1,O=e=>!T||e===void 0?5:5+Math.sqrt((e-E)/(D-E||1))*17,k=e=>T?[...e].sort((e,t)=>(t.size??0)-(e.size??0)):e;return(0,a.jsxs)(`div`,{style:{position:`relative`},onMouseLeave:()=>m(null),children:[e.length>1&&(0,a.jsx)(`ul`,{className:`eb-chart__legend`,style:{marginBottom:`var(--space-3)`},children:e.map((e,t)=>(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`span`,{className:`eb-chart__swatch`,style:{background:o(t)},"aria-hidden":`true`}),e.name]},e.name))}),(0,a.jsxs)(`svg`,{className:`eb-scatter`,viewBox:`0 0 ${s} ${u}`,role:`img`,"aria-label":`Biểu đồ phân tán: ${n} theo ${t}`,children:[[0,.5,1].map(e=>(0,a.jsx)(`line`,{className:`eb-chart__grid`,x1:c.l,x2:s-c.r,y1:C(b+(x-b)*e),y2:C(b+(x-b)*e)},e)),(0,a.jsx)(`line`,{className:`eb-scatter__axis-line`,x1:c.l,x2:c.l,y1:c.t,y2:u-c.b}),(0,a.jsx)(`text`,{className:`eb-chart__axis`,x:c.l,y:u-8,children:r(v)}),(0,a.jsx)(`text`,{className:`eb-chart__axis`,x:s-c.r,y:u-8,textAnchor:`end`,children:r(y)}),(0,a.jsx)(`text`,{className:`eb-chart__axis`,x:4,y:C(x)+4,children:l(x)}),(0,a.jsx)(`text`,{className:`eb-chart__axis`,x:4,y:C(b),children:l(b)}),e.map((e,i)=>k(e.points).map(c=>(0,a.jsx)(`circle`,{className:`eb-scatter__dot`,cx:S(c.x),cy:C(c.y),r:O(c.size),fill:o(i),onMouseEnter:()=>m({x:S(c.x)/s*100,y:C(c.y)-O(c.size),text:`${c.label} · ${t} ${r(c.x)} · ${n} ${l(c.y)}${c.size!==void 0&&d?` · ${d} ${f(c.size)}`:``}`})},`${e.name}-${c.label}`)))]}),p&&(0,a.jsx)(`div`,{className:`eb-chart__tip`,style:{left:`${p.x}%`,top:p.y},role:`presentation`,children:p.text}),T&&d&&(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-3)`,marginTop:`var(--space-3)`,fontSize:`var(--text-xs)`,color:`var(--color-text-muted)`},children:[(0,a.jsxs)(`span`,{children:[d,`:`]}),[E,(E+D)/2,D].map(e=>(0,a.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`var(--space-2)`},children:[(0,a.jsx)(`svg`,{width:O(e)*2,height:O(e)*2,"aria-hidden":`true`,children:(0,a.jsx)(`circle`,{cx:O(e),cy:O(e),r:O(e)-1,fill:`none`,stroke:`var(--color-border-strong)`})}),f(Math.round(e))]},e))]}),(0,a.jsxs)(`table`,{className:`eb-chart__table`,children:[(0,a.jsx)(`caption`,{children:`Số liệu dạng bảng`}),(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{scope:`col`,children:`Điểm`}),(0,a.jsx)(`th`,{scope:`col`,children:t}),(0,a.jsx)(`th`,{scope:`col`,children:n}),T&&(0,a.jsx)(`th`,{scope:`col`,children:d??`Kích thước`}),(0,a.jsx)(`th`,{scope:`col`,children:`Nhóm`})]})}),(0,a.jsx)(`tbody`,{children:e.flatMap(e=>e.points.map(t=>(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{scope:`row`,children:t.label}),(0,a.jsx)(`td`,{children:r(t.x)}),(0,a.jsx)(`td`,{children:l(t.y)}),T&&(0,a.jsx)(`td`,{children:t.size===void 0?`—`:f(t.size)}),(0,a.jsx)(`td`,{children:e.name})]},`${e.name}-${t.label}`)))})]})]})}var i,a,o,s,c;function l(){return(l=e((()=>{i=n(),a=t(),o=e=>`var(--viz-cat-${e%8+1})`,s=640,c={l:44,r:12,t:12,b:34},r.__docgenInfo={description:`Quan hệ giữa hai đại lượng. Điểm có \`size\` thì thành biểu đồ bong bóng (bubble) —
chiều thứ ba mã hoá bằng diện tích, kèm legend kích thước.
Trần 3 series vì ở dạng này mọi cặp màu đều có thể nằm cạnh nhau.`,methods:[],displayName:`ScatterPlot`,props:{series:{required:!0,tsType:{name:`Array`,elements:[{name:`ScatterSeries`}],raw:`ScatterSeries[]`},description:`Tối đa 3 series: dạng này so mọi cặp màu với nhau, nên trần thấp hơn cột và đường.`},xLabel:{required:!0,tsType:{name:`string`},description:``},yLabel:{required:!0,tsType:{name:`string`},description:``},formatX:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(n: number) => string`,signature:{arguments:[{type:{name:`number`},name:`n`}],return:{name:`string`}}},description:``,defaultValue:{value:`(n) => n.toLocaleString('vi-VN')`,computed:!1}},formatY:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(n: number) => string`,signature:{arguments:[{type:{name:`number`},name:`n`}],return:{name:`string`}}},description:``,defaultValue:{value:`(n) => n.toLocaleString('vi-VN')`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`260`,computed:!1}},sizeLabel:{required:!1,tsType:{name:`string`},description:"Tên đại lượng gán vào kích thước bong bóng. Bắt buộc khi điểm có `size`."},formatSize:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(n: number) => string`,signature:{arguments:[{type:{name:`number`},name:`n`}],return:{name:`string`}}},description:``,defaultValue:{value:`(n) => n.toLocaleString('vi-VN')`,computed:!1}}}}})))()}var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{l(),u={title:`Components/Charts/ScatterPlot`,component:r,parameters:{layout:`padded`},tags:[`autodocs`]},d=[{label:`Hà Nội`,x:42,y:1240},{label:`TP.HCM`,x:68,y:1890},{label:`Đà Nẵng`,x:28,y:640},{label:`Cần Thơ`,x:16,y:310},{label:`Hải Phòng`,x:24,y:520},{label:`Huế`,x:12,y:280}],f={name:`Một nhóm`,args:{xLabel:`Số nhân viên`,yLabel:`Đơn hàng`,series:[{name:`Chi nhánh`,points:d}]}},p={name:`Ba nhóm (trần của dạng này)`,args:{xLabel:`Số nhân viên`,yLabel:`Đơn hàng`,series:[{name:`Miền Bắc`,points:d.slice(0,2)},{name:`Miền Trung`,points:d.slice(2,4)},{name:`Miền Nam`,points:d.slice(4)}]}},m=[{label:`Hà Nội`,x:42,y:1240,size:980},{label:`TP.HCM`,x:68,y:1890,size:1640},{label:`Đà Nẵng`,x:28,y:640,size:420},{label:`Cần Thơ`,x:16,y:310,size:180},{label:`Hải Phòng`,x:24,y:520,size:310},{label:`Huế`,x:12,y:280,size:140}],h={name:`Bong bóng (bubble) — ba đại lượng`,args:{xLabel:`Số nhân viên`,yLabel:`Đơn hàng`,sizeLabel:`Doanh thu (triệu ₫)`,series:[{name:`Chi nhánh`,points:m}]}},g={name:`Bong bóng — ba nhóm`,args:{xLabel:`Số nhân viên`,yLabel:`Đơn hàng`,sizeLabel:`Doanh thu (triệu ₫)`,series:[{name:`Miền Bắc`,points:m.slice(0,2)},{name:`Miền Trung`,points:m.slice(2,4)},{name:`Miền Nam`,points:m.slice(4)}]}},_={name:`Bong bóng — chênh lệch lớn giữa các giá trị`,args:{xLabel:`Số nhân viên`,yLabel:`Đơn hàng`,sizeLabel:`Doanh thu (triệu ₫)`,series:[{name:`Chi nhánh`,points:[...m,{label:`Trung tâm`,x:96,y:2400,size:9800}]}]}},v=[`MotNhom`,`BaNhom`,`BongBong`,`BongBongNhieuNhom`,`BongBongChenhLech`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Một nhóm',
  args: {
    xLabel: 'Số nhân viên',
    yLabel: 'Đơn hàng',
    series: [{
      name: 'Chi nhánh',
      points: chiNhanh
    }]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Ba nhóm (trần của dạng này)',
  args: {
    xLabel: 'Số nhân viên',
    yLabel: 'Đơn hàng',
    series: [{
      name: 'Miền Bắc',
      points: chiNhanh.slice(0, 2)
    }, {
      name: 'Miền Trung',
      points: chiNhanh.slice(2, 4)
    }, {
      name: 'Miền Nam',
      points: chiNhanh.slice(4)
    }]
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Bong bóng (bubble) — ba đại lượng',
  args: {
    xLabel: 'Số nhân viên',
    yLabel: 'Đơn hàng',
    sizeLabel: 'Doanh thu (triệu ₫)',
    series: [{
      name: 'Chi nhánh',
      points: thiTruong
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Bong bóng — ba nhóm',
  args: {
    xLabel: 'Số nhân viên',
    yLabel: 'Đơn hàng',
    sizeLabel: 'Doanh thu (triệu ₫)',
    series: [{
      name: 'Miền Bắc',
      points: thiTruong.slice(0, 2)
    }, {
      name: 'Miền Trung',
      points: thiTruong.slice(2, 4)
    }, {
      name: 'Miền Nam',
      points: thiTruong.slice(4)
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Bong bóng — chênh lệch lớn giữa các giá trị',
  args: {
    xLabel: 'Số nhân viên',
    yLabel: 'Đơn hàng',
    sizeLabel: 'Doanh thu (triệu ₫)',
    series: [{
      name: 'Chi nhánh',
      points: [...thiTruong, {
        label: 'Trung tâm',
        x: 96,
        y: 2400,
        size: 9800
      }]
    }]
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{p as BaNhom,h as BongBong,_ as BongBongChenhLech,g as BongBongNhieuNhom,f as MotNhom,v as __namedExportsOrder,u as default};