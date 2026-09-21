import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./LineChart-BahjwxVf.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),r=[`T1`,`T2`,`T3`,`T4`,`T5`,`T6`,`T7`,`T8`,`T9`],i={title:`Components/LineChart`,component:n,parameters:{layout:`padded`},tags:[`autodocs`]},a={name:`Một series, có vùng tô`,args:{labels:r,area:!0,series:[{name:`Doanh thu`,values:[620,680,720,700,810,860,940,1020,1240]}]}},o={name:`Ba series`,args:{labels:r,series:[{name:`Trực tuyến`,values:[320,380,420,410,480,520,580,640,780]},{name:`Tại quầy`,values:[220,230,240,220,250,260,280,300,330]},{name:`Đại lý`,values:[80,70,60,70,80,80,80,80,130]}]}},s={name:`Trục y không bắt đầu từ 0`,args:{labels:r,zeroBased:!1,series:[{name:`Tỉ lệ hoàn tất (%)`,values:[94.2,94.6,94.1,95,95.4,95.1,95.8,96.2,96]}]}},c={name:`Dữ liệu ngắn`,args:{labels:[`T8`,`T9`],series:[{name:`Doanh thu`,values:[1020,1240]}]}},l=[`MotSeries`,`BaSeries`,`KhongTuKhong`,`MotDiem`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Một series, có vùng tô',
  args: {
    labels: months,
    area: true,
    series: [{
      name: 'Doanh thu',
      values: [620, 680, 720, 700, 810, 860, 940, 1020, 1240]
    }]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Ba series',
  args: {
    labels: months,
    series: [{
      name: 'Trực tuyến',
      values: [320, 380, 420, 410, 480, 520, 580, 640, 780]
    }, {
      name: 'Tại quầy',
      values: [220, 230, 240, 220, 250, 260, 280, 300, 330]
    }, {
      name: 'Đại lý',
      values: [80, 70, 60, 70, 80, 80, 80, 80, 130]
    }]
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Trục y không bắt đầu từ 0',
  args: {
    labels: months,
    zeroBased: false,
    series: [{
      name: 'Tỉ lệ hoàn tất (%)',
      values: [94.2, 94.6, 94.1, 95.0, 95.4, 95.1, 95.8, 96.2, 96.0]
    }]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Dữ liệu ngắn',
  args: {
    labels: ['T8', 'T9'],
    series: [{
      name: 'Doanh thu',
      values: [1020, 1240]
    }]
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{o as BaSeries,s as KhongTuKhong,c as MotDiem,a as MotSeries,l as __namedExportsOrder,i as default};