import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-CdUAgEio.js";import"./chart-BDmoHGW5.js";function r({series:e,xLabel:t,yLabel:n,formatX:r=e=>e.toLocaleString(`vi-VN`),formatY:l=e=>e.toLocaleString(`vi-VN`),height:u=260}){let[d,f]=(0,i.useState)(null),p=e.flatMap(e=>e.points),m=p.map(e=>e.x),h=p.map(e=>e.y),g=Math.min(...m),_=Math.max(...m),v=Math.min(0,...h),y=Math.max(...h),b=e=>c.l+(e-g)/(_-g||1)*(s-c.l-c.r),x=e=>u-c.b-(e-v)/(y-v||1)*(u-c.b-c.t);return(0,a.jsxs)(`div`,{style:{position:`relative`},onMouseLeave:()=>f(null),children:[e.length>1&&(0,a.jsx)(`ul`,{className:`eb-chart__legend`,style:{marginBottom:`var(--space-3)`},children:e.map((e,t)=>(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`span`,{className:`eb-chart__swatch`,style:{background:o(t)},"aria-hidden":`true`}),e.name]},e.name))}),(0,a.jsxs)(`svg`,{className:`eb-scatter`,viewBox:`0 0 ${s} ${u}`,role:`img`,"aria-label":`Biểu đồ phân tán: ${n} theo ${t}`,children:[[0,.5,1].map(e=>(0,a.jsx)(`line`,{className:`eb-chart__grid`,x1:c.l,x2:s-c.r,y1:x(v+(y-v)*e),y2:x(v+(y-v)*e)},e)),(0,a.jsx)(`line`,{className:`eb-scatter__axis-line`,x1:c.l,x2:c.l,y1:c.t,y2:u-c.b}),(0,a.jsx)(`text`,{className:`eb-chart__axis`,x:c.l,y:u-8,children:r(g)}),(0,a.jsx)(`text`,{className:`eb-chart__axis`,x:s-c.r,y:u-8,textAnchor:`end`,children:r(_)}),(0,a.jsx)(`text`,{className:`eb-chart__axis`,x:4,y:x(y)+4,children:l(y)}),(0,a.jsx)(`text`,{className:`eb-chart__axis`,x:4,y:x(v),children:l(v)}),e.map((e,i)=>e.points.map(c=>(0,a.jsx)(`circle`,{className:`eb-scatter__dot`,cx:b(c.x),cy:x(c.y),r:5,fill:o(i),onMouseEnter:()=>f({x:b(c.x)/s*100,y:x(c.y),text:`${c.label} · ${t} ${r(c.x)} · ${n} ${l(c.y)}`})},`${e.name}-${c.label}`)))]}),d&&(0,a.jsx)(`div`,{className:`eb-chart__tip`,style:{left:`${d.x}%`,top:d.y},role:`presentation`,children:d.text}),(0,a.jsxs)(`table`,{className:`eb-chart__table`,children:[(0,a.jsx)(`caption`,{children:`Số liệu dạng bảng`}),(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{scope:`col`,children:`Điểm`}),(0,a.jsx)(`th`,{scope:`col`,children:t}),(0,a.jsx)(`th`,{scope:`col`,children:n}),(0,a.jsx)(`th`,{scope:`col`,children:`Nhóm`})]})}),(0,a.jsx)(`tbody`,{children:e.flatMap(e=>e.points.map(t=>(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{scope:`row`,children:t.label}),(0,a.jsx)(`td`,{children:r(t.x)}),(0,a.jsx)(`td`,{children:l(t.y)}),(0,a.jsx)(`td`,{children:e.name})]},`${e.name}-${t.label}`)))})]})]})}var i,a,o,s,c;function l(){return(l=e((()=>{i=n(),a=t(),o=e=>`var(--viz-cat-${e%8+1})`,s=640,c={l:44,r:12,t:12,b:34},r.__docgenInfo={description:`Quan hệ giữa hai đại lượng. Trần 3 series vì mọi cặp màu đều có thể nằm cạnh nhau.`,methods:[],displayName:`ScatterPlot`,props:{series:{required:!0,tsType:{name:`Array`,elements:[{name:`ScatterSeries`}],raw:`ScatterSeries[]`},description:`Tối đa 3 series: dạng này so mọi cặp màu với nhau, nên trần thấp hơn cột và đường.`},xLabel:{required:!0,tsType:{name:`string`},description:``},yLabel:{required:!0,tsType:{name:`string`},description:``},formatX:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(n: number) => string`,signature:{arguments:[{type:{name:`number`},name:`n`}],return:{name:`string`}}},description:``,defaultValue:{value:`(n) => n.toLocaleString('vi-VN')`,computed:!1}},formatY:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(n: number) => string`,signature:{arguments:[{type:{name:`number`},name:`n`}],return:{name:`string`}}},description:``,defaultValue:{value:`(n) => n.toLocaleString('vi-VN')`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`260`,computed:!1}}}}})))()}var u,d,f,p,m;function h(){return(h=e((()=>{l(),u={title:`Components/ScatterPlot`,component:r,parameters:{layout:`padded`},tags:[`autodocs`]},d=[{label:`Hà Nội`,x:42,y:1240},{label:`TP.HCM`,x:68,y:1890},{label:`Đà Nẵng`,x:28,y:640},{label:`Cần Thơ`,x:16,y:310},{label:`Hải Phòng`,x:24,y:520},{label:`Huế`,x:12,y:280}],f={name:`Một nhóm`,args:{xLabel:`Số nhân viên`,yLabel:`Đơn hàng`,series:[{name:`Chi nhánh`,points:d}]}},p={name:`Ba nhóm (trần của dạng này)`,args:{xLabel:`Số nhân viên`,yLabel:`Đơn hàng`,series:[{name:`Miền Bắc`,points:d.slice(0,2)},{name:`Miền Trung`,points:d.slice(2,4)},{name:`Miền Nam`,points:d.slice(4)}]}},m=[`MotNhom`,`BaNhom`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as BaNhom,f as MotNhom,m as __namedExportsOrder,u as default};