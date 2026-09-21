import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BiOYxRmM.js";import{n,t as r}from"./BarChart-CcyUPtEh.js";import{n as i,t as a}from"./ChartFrame-CIs7D70N.js";import{n as o,t as s}from"./StatTile-lViMbV59.js";import{n as c,t as l}from"./LineChart-B5qLVdsT.js";import{n as u,t as d}from"./DonutChart-DspyRnkx.js";var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{i(),o(),c(),n(),u(),f=t(),p=[`T1`,`T2`,`T3`,`T4`,`T5`,`T6`,`T7`,`T8`,`T9`],m=[{name:`Trực tuyến`,values:[320,380,420,410,480,520,580,640,780]},{name:`Tại quầy`,values:[220,230,240,220,250,260,280,300,330]},{name:`Đại lý`,values:[80,70,60,70,80,80,80,80,130]}],h=m.map((e,t)=>({name:e.name,color:`var(--viz-cat-${t+1})`})),g=({children:e})=>(0,f.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-8)`,maxWidth:1040},children:e}),_=({children:e,cols:t=`repeat(auto-fit, minmax(240px, 1fr))`})=>(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:t,gap:`var(--space-4)`},children:e}),v={title:`Patterns/Báo cáo`,parameters:{layout:`padded`},tags:[`autodocs`]},y={name:`Báo cáo đầy đủ`,render:()=>(0,f.jsxs)(g,{children:[(0,f.jsxs)(_,{children:[(0,f.jsx)(s,{label:`Doanh thu tháng 9`,value:`1,24 tỷ ₫`,delta:{value:`12,4%`,direction:`up`},caption:`so với tháng 8`,spark:[8,12,10,16,14,19,24]}),(0,f.jsx)(s,{label:`Đơn hàng`,value:`1.245`,delta:{value:`8,1%`,direction:`up`},caption:`so với tháng 8`,spark:[12,18,15,22,19,28,31]}),(0,f.jsx)(s,{label:`Giá trị đơn trung bình`,value:`996.000 ₫`,delta:{value:`3,9%`,direction:`down`,meaning:`bad`},caption:`so với tháng 8`}),(0,f.jsx)(s,{label:`Tỉ lệ rời bỏ`,value:`2,1%`,delta:{value:`0,6 điểm`,direction:`down`,meaning:`good`},caption:`so với tháng 8`})]}),(0,f.jsx)(a,{title:`Doanh thu theo kênh`,subtitle:`9 tháng đầu 2026 · đơn vị: triệu ₫`,legend:h,height:220,children:(0,f.jsx)(l,{labels:p,series:m,height:220})}),(0,f.jsxs)(_,{cols:`1fr 1fr`,children:[(0,f.jsx)(a,{title:`Đơn hàng theo chi nhánh`,subtitle:`Tháng 9/2026`,height:180,children:(0,f.jsx)(r,{data:[{label:`Hà Nội`,values:[1240]},{label:`TP.HCM`,values:[1890]},{label:`Đà Nẵng`,values:[640]},{label:`Cần Thơ`,values:[310]}]})}),(0,f.jsx)(a,{title:`Tỉ trọng kênh bán`,subtitle:`Tháng 9/2026`,height:180,children:(0,f.jsx)(d,{caption:`đơn hàng`,data:[{label:`Trực tuyến`,value:2410},{label:`Tại quầy`,value:1360},{label:`Đại lý`,value:530},{label:`Khác`,value:180}]})})]})]})},b={name:`Đang tải`,render:()=>(0,f.jsxs)(g,{children:[(0,f.jsx)(a,{title:`Doanh thu theo kênh`,subtitle:`9 tháng đầu 2026`,state:`loading`,height:220}),(0,f.jsxs)(_,{cols:`1fr 1fr`,children:[(0,f.jsx)(a,{title:`Đơn hàng theo chi nhánh`,state:`loading`,height:180}),(0,f.jsx)(a,{title:`Tỉ trọng kênh bán`,state:`loading`,height:180})]})]})},x={name:`Rỗng và lỗi`,render:()=>(0,f.jsx)(g,{children:(0,f.jsxs)(_,{cols:`1fr 1fr`,children:[(0,f.jsx)(a,{title:`Doanh thu theo kênh`,subtitle:`Chưa có dữ liệu kỳ này`,state:`empty`,height:180}),(0,f.jsx)(a,{title:`Đơn hàng theo chi nhánh`,state:`error`,onRetry:()=>{},height:180})]})})},S=[`DayDu`,`DangTai`,`RongVaLoi`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Báo cáo đầy đủ',
  render: () => <Grid>
      <Row>
        <StatTile label="Doanh thu tháng 9" value="1,24 tỷ ₫" delta={{
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
      </Row>

      <ChartFrame title="Doanh thu theo kênh" subtitle="9 tháng đầu 2026 · đơn vị: triệu ₫" legend={legendKenh} height={220}>
        <LineChart labels={months} series={kenh} height={220} />
      </ChartFrame>

      <Row cols="1fr 1fr">
        <ChartFrame title="Đơn hàng theo chi nhánh" subtitle="Tháng 9/2026" height={180}>
          <BarChart data={[{
          label: 'Hà Nội',
          values: [1240]
        }, {
          label: 'TP.HCM',
          values: [1890]
        }, {
          label: 'Đà Nẵng',
          values: [640]
        }, {
          label: 'Cần Thơ',
          values: [310]
        }]} />
        </ChartFrame>
        <ChartFrame title="Tỉ trọng kênh bán" subtitle="Tháng 9/2026" height={180}>
          <DonutChart caption="đơn hàng" data={[{
          label: 'Trực tuyến',
          value: 2410
        }, {
          label: 'Tại quầy',
          value: 1360
        }, {
          label: 'Đại lý',
          value: 530
        }, {
          label: 'Khác',
          value: 180
        }]} />
        </ChartFrame>
      </Row>
    </Grid>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Đang tải',
  render: () => <Grid>
      <ChartFrame title="Doanh thu theo kênh" subtitle="9 tháng đầu 2026" state="loading" height={220} />
      <Row cols="1fr 1fr">
        <ChartFrame title="Đơn hàng theo chi nhánh" state="loading" height={180} />
        <ChartFrame title="Tỉ trọng kênh bán" state="loading" height={180} />
      </Row>
    </Grid>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Rỗng và lỗi',
  render: () => <Grid>
      <Row cols="1fr 1fr">
        <ChartFrame title="Doanh thu theo kênh" subtitle="Chưa có dữ liệu kỳ này" state="empty" height={180} />
        <ChartFrame title="Đơn hàng theo chi nhánh" state="error" onRetry={() => {}} height={180} />
      </Row>
    </Grid>
}`,...x.parameters?.docs?.source}}}})))()}C();export{b as DangTai,y as DayDu,x as RongVaLoi,S as __namedExportsOrder,v as default};