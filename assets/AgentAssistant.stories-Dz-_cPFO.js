import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-BI5Y47fd.js";import{n as r,t as i}from"./Button-Ci_FxIER.js";import{n as a,t as o}from"./Drawer-BuNNZQes.js";import{n as s,t as c}from"./EmptyState-DKtR-OPv.js";import{n as l,t as u}from"./PromptInput-CsDI3Wbc.js";import{r as d,t as f}from"./Skeleton-ZwnAWWUg.js";import{n as p,t as m}from"./ChatMessage-DeEg-NEz.js";import{n as h,t as g}from"./AgentTrace-DFLCF1M6.js";import{n as _,t as v}from"./Badge-C8vuE4UL.js";import{n as y,t as b}from"./Menu-DC4jzL2g.js";function x({title:e,status:t,headerActions:n,conversations:r=[],activeConversation:a,onSelectConversation:s,onNewConversation:l,state:d=`ready`,children:p,suggestions:m=[],onSuggestion:h,onRetry:g,busy:_=!1,onSend:v,onStop:y,composerToolbar:b,promptProps:x}){let D=e=>(0,S.jsxs)(S.Fragment,{children:[E(r).map((t,n)=>(0,S.jsxs)(`div`,{className:`eb-agent__group`,children:[t.title&&(0,S.jsx)(`p`,{className:`eb-agent__group-title`,children:t.title}),(0,S.jsx)(`ul`,{className:`eb-agent__items`,children:t.items.map(t=>(0,S.jsx)(`li`,{children:(0,S.jsxs)(`button`,{type:`button`,className:`eb-agent__item`,"aria-current":t.id===a?`page`:void 0,onClick:()=>{s?.(t.id),e?.()},children:[(0,S.jsx)(`span`,{className:`eb-agent__item-title`,children:t.title}),t.meta&&(0,S.jsx)(`span`,{className:`eb-agent__item-meta`,children:t.meta})]})},t.id))})]},t.title??n)),r.length===0&&(0,S.jsx)(`p`,{className:`eb-agent__group-title`,children:`Chưa có hội thoại nào.`})]});return(0,S.jsxs)(`div`,{className:`eb-agent`,children:[(0,S.jsxs)(`aside`,{className:`eb-agent__side`,children:[(0,S.jsxs)(`div`,{className:`eb-agent__side-head`,children:[(0,S.jsx)(`span`,{className:`eb-agent__side-title`,children:`Hội thoại`}),(0,S.jsx)(i,{variant:`secondary`,size:`sm`,iconStart:(0,S.jsx)(C,{}),onClick:l,children:`Hội thoại mới`})]}),(0,S.jsx)(`nav`,{className:`eb-agent__nav`,"aria-label":`Hội thoại gần đây`,children:D()})]}),(0,S.jsxs)(`div`,{className:`eb-agent__main`,children:[(0,S.jsxs)(`header`,{className:`eb-agent__head`,children:[(0,S.jsxs)(`div`,{className:`eb-agent__head-start`,children:[(0,S.jsx)(`span`,{className:`eb-agent__side-open`,children:(0,S.jsx)(o,{side:`bottom`,size:`lg`,title:`Hội thoại`,trigger:(0,S.jsx)(i,{variant:`ghost`,size:`md`,iconStart:(0,S.jsx)(w,{}),"aria-label":`Mở danh sách hội thoại`}),children:e=>(0,S.jsx)(`nav`,{className:`eb-agent__nav`,"aria-label":`Hội thoại gần đây`,children:D(e)})})}),(0,S.jsx)(`h1`,{className:`eb-agent__title`,children:e}),t]}),n&&(0,S.jsx)(`div`,{className:`eb-agent__head-end`,children:n})]}),(0,S.jsx)(`div`,{className:`eb-agent__thread`,tabIndex:0,role:`log`,"aria-label":`Nội dung hội thoại`,"aria-busy":_||d===`loading`||void 0,children:d===`loading`?(0,S.jsx)(`div`,{className:`eb-agent__loading`,children:[0,1].map(e=>(0,S.jsxs)(`div`,{className:`eb-agent__loading-row`,children:[(0,S.jsx)(f,{shape:`circle`,width:28,height:28}),(0,S.jsxs)(`div`,{className:`eb-agent__loading-body`,children:[(0,S.jsx)(f,{width:`30%`}),(0,S.jsx)(f,{lines:3})]})]},e))}):d===`error`?(0,S.jsx)(c,{title:`Không tải được hội thoại`,description:`Kiểm tra kết nối rồi thử lại.`,action:(0,S.jsx)(i,{variant:`secondary`,onClick:g,children:`Thử lại`})}):d===`empty`?(0,S.jsx)(`div`,{className:`eb-agent__empty`,children:(0,S.jsx)(c,{icon:(0,S.jsx)(T,{}),title:`Chưa có câu hỏi nào`,description:`Hỏi trợ lý một việc, hoặc bắt đầu từ một gợi ý bên dưới.`,action:m.length>0?(0,S.jsx)(`ul`,{className:`eb-agent__chips`,children:m.slice(0,4).map(e=>(0,S.jsx)(`li`,{children:(0,S.jsx)(`button`,{type:`button`,className:`eb-agent__chip`,onClick:()=>h?.(e),children:e})},e))}):void 0})}):(0,S.jsx)(`div`,{className:`eb-agent__messages`,children:p})}),(0,S.jsx)(`div`,{className:`eb-agent__composer`,children:(0,S.jsx)(u,{voice:!0,busy:_,onSend:v,onStop:y,toolbar:b,disabled:d===`error`,...x})})]})]})}var S,C,w,T,E;function D(){return(D=e((()=>{r(),a(),s(),l(),d(),S=t(),C=()=>(0,S.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,"aria-hidden":`true`,children:(0,S.jsx)(`path`,{d:`M8 3.5v9M3.5 8h9`})}),w=()=>(0,S.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,"aria-hidden":`true`,children:(0,S.jsx)(`path`,{d:`M3 4.5h10M3 8h10M3 11.5h10`})}),T=()=>(0,S.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,S.jsx)(`path`,{d:`M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H9l-5 4V6z`})}),E=e=>{let t=[];for(let n of e){let e=t[t.length-1];e&&e.title===n.group?e.items.push(n):t.push({title:n.group,items:[n]})}return t},x.__docgenInfo={description:"Màn hình trợ lý agent: danh sách hội thoại, luồng tin nhắn, ô soạn. Ghép từ component có sẵn — nội dung luồng truyền vào qua `children`.",methods:[],displayName:`AgentAssistant`,props:{title:{required:!0,tsType:{name:`string`},description:`Tiêu đề hội thoại đang mở (heading-03 theo mục 3.3).`},status:{required:!1,tsType:{name:`ReactNode`},description:`Badge cạnh tiêu đề: mô hình đang dùng hoặc trạng thái kết nối.`},headerActions:{required:!1,tsType:{name:`ReactNode`},description:`Hành động phụ bên phải header: Menu "⋯", nút chia sẻ. Không đặt primary ở đây.`},conversations:{required:!1,tsType:{name:`Array`,elements:[{name:`AgentConversation`}],raw:`AgentConversation[]`},description:``,defaultValue:{value:`[]`,computed:!1}},activeConversation:{required:!1,tsType:{name:`string`},description:``},onSelectConversation:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},onNewConversation:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},state:{required:!1,tsType:{name:`union`,raw:`'ready' | 'loading' | 'empty' | 'error'`,elements:[{name:`literal`,value:`'ready'`},{name:`literal`,value:`'loading'`},{name:`literal`,value:`'empty'`},{name:`literal`,value:`'error'`}]},description:"Trạng thái vùng hội thoại: `ready` hiện `children`.",defaultValue:{value:`'ready'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:"Chuỗi `<ChatMessage />`."},suggestions:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Câu hỏi gợi ý cho trạng thái rỗng. Tối đa 4.`,defaultValue:{value:`[]`,computed:!1}},onSuggestion:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(text: string) => void`,signature:{arguments:[{type:{name:`string`},name:`text`}],return:{name:`void`}}},description:``},onRetry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:'Thử lại khi `state="error"`.'},busy:{required:!1,tsType:{name:`boolean`},description:`Trợ lý đang trả lời — ô soạn đổi nút Gửi thành Dừng.`,defaultValue:{value:`false`,computed:!1}},onSend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(text: string) => void`,signature:{arguments:[{type:{name:`string`},name:`text`}],return:{name:`void`}}},description:``},onStop:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},composerToolbar:{required:!1,tsType:{name:`ReactNode`},description:`Nút phụ trong ô soạn: chọn mô hình, đính kèm.`},promptProps:{required:!1,tsType:{name:`Partial`,elements:[{name:`PromptInputProps`}],raw:`Partial<PromptInputProps>`},description:"Truyền thêm cho ô soạn (placeholder, maxLength, error). Ghi âm bật sẵn — tắt bằng `{ voice: false }`."}}}})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{O=n(),D(),p(),h(),_(),r(),y(),k=t(),A=[{id:`rev`,title:`Doanh thu quý 3`,meta:`2 giờ trước`,group:`Hôm nay`},{id:`cdn`,title:`Chi phí băng thông tăng`,meta:`Hôm qua`,group:`7 ngày trước`},{id:`churn`,title:`Khách rời bỏ theo gói`,meta:`17/09/2026`,group:`7 ngày trước`},{id:`onboard`,title:`Tỉ lệ hoàn tất onboarding`,meta:`12/09/2026`,group:`Trước đó`}],j=()=>(0,k.jsxs)(`svg`,{viewBox:`0 0 16 16`,fill:`currentColor`,"aria-hidden":`true`,children:[(0,k.jsx)(`circle`,{cx:`3`,cy:`8`,r:`1.4`}),(0,k.jsx)(`circle`,{cx:`8`,cy:`8`,r:`1.4`}),(0,k.jsx)(`circle`,{cx:`13`,cy:`8`,r:`1.4`})]}),M=(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(v,{tone:`neutral`,children:`Ebig Agent 2`}),(0,k.jsx)(b,{placement:`bottom end`,trigger:(0,k.jsx)(i,{variant:`ghost`,size:`sm`,iconStart:(0,k.jsx)(j,{}),"aria-label":`Hành động khác`}),items:[{id:`rename`,label:`Đổi tên`},{id:`export`,label:`Xuất bản ghi`},{type:`separator`},{id:`delete`,label:`Xoá hội thoại`,danger:!0}]})]}),N=(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m,{role:`user`,time:`09:11`,children:`Doanh thu quý 3 ra sao so với quý 2?`}),(0,k.jsxs)(m,{role:`agent`,time:`09:12`,trace:(0,k.jsx)(g,{steps:[{id:`1`,label:`Đọc bảng đơn hàng`,detail:`orders.quarter = 2026Q3`,status:`done`,meta:`0,8s`},{id:`2`,label:`Tính tổng doanh thu theo tháng`,status:`done`,meta:`0,3s`},{id:`3`,label:`So sánh với quý trước`,status:`done`,meta:`0,4s`}]}),actions:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i,{variant:`ghost`,size:`sm`,children:`Sao chép`}),(0,k.jsx)(i,{variant:`ghost`,size:`sm`,children:`Trả lời lại`})]}),children:[(0,k.jsx)(`p`,{children:`Doanh thu quý 3 đạt 3.480.000.000 ₫, tăng 9% so với quý 2. Tháng 8 đóng góp nhiều nhất với 1.250.000.000 ₫.`}),(0,k.jsx)(`p`,{children:`Mức tăng đến từ nhóm khách hàng doanh nghiệp; nhóm cá nhân đi ngang trong cả ba tháng.`})]}),(0,k.jsx)(m,{role:`user`,time:`09:14`,children:`Tách riêng nhóm doanh nghiệp giúp mình.`})]}),P={title:`Patterns/Trợ lý agent`,component:x,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Màn hình trợ lý agent — ghép từ component có sẵn: Drawer, EmptyState, Skeleton, Menu, Badge, Button,
cùng ba component mới ChatMessage, AgentTrace, PromptInput.

Trạng thái đã xử lý: đang tải, rỗng (kèm gợi ý), lỗi tải, đang trả lời, lỗi một lượt, nội dung dài.
Dưới 1024px sidebar ẩn thành drawer mở từ header (mục 3.3).`}}},decorators:[e=>(0,k.jsx)(`div`,{style:{height:`100vh`,minHeight:640},children:(0,k.jsx)(e,{})})],args:{title:`Doanh thu quý 3`,conversations:A,activeConversation:`rev`,headerActions:M,status:void 0},argTypes:{headerActions:{control:!1},status:{control:!1},conversations:{control:!1},children:{control:!1},state:{control:`radio`,options:[`ready`,`loading`,`empty`,`error`]}}},F={args:{children:N}},I={args:{busy:!0,children:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m,{role:`user`,time:`09:14`,children:`Tách riêng nhóm doanh nghiệp giúp mình.`}),(0,k.jsx)(m,{role:`agent`,status:`streaming`,trace:(0,k.jsx)(g,{defaultExpanded:!0,steps:[{id:`1`,label:`Lọc khách hàng doanh nghiệp`,detail:`customers.segment = "enterprise"`,status:`done`,meta:`0,9s`},{id:`2`,label:`Tính doanh thu theo tháng`,status:`running`}]}),children:`Nhóm doanh nghiệp đóng góp 2.140.000.000 ₫ trong quý 3`})]})}},L={args:{title:`Hội thoại mới`,activeConversation:void 0,state:`empty`,suggestions:[`Doanh thu tháng này`,`Khách hàng rời bỏ tuần qua`,`Chi phí hạ tầng theo dịch vụ`,`Tỉ lệ hoàn tất onboarding`]}},R={args:{state:`loading`}},z={args:{state:`error`}},B={args:{children:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m,{role:`user`,time:`09:20`,children:`Nối thêm số liệu tỉ giá vào báo cáo.`}),(0,k.jsx)(m,{role:`agent`,time:`09:20`,status:`error`,error:`Không gọi được API tỉ giá (HTTP 503). Thử lại, hoặc nhập tỉ giá thủ công.`,actions:(0,k.jsx)(i,{variant:`secondary`,size:`sm`,children:`Trả lời lại`}),trace:(0,k.jsx)(g,{defaultExpanded:!0,steps:[{id:`1`,label:`Đọc bảng doanh thu`,status:`done`,meta:`0,5s`},{id:`2`,label:`Gọi API tỉ giá`,detail:`HTTP 503`,status:`error`,meta:`2,1s`}]}),children:`Mình dừng ở bước lấy tỉ giá.`})]})}},V={args:{children:N,promptProps:{voice:!0,voiceState:`recording`,voiceDuration:5}}},H={parameters:{controls:{disable:!0}},render:e=>{let[t,n]=(0,O.useState)([]),[r,i]=(0,O.useState)(!1),[a,o]=(0,O.useState)(``),[s,c]=(0,O.useState)(`idle`),[l,u]=(0,O.useState)(0);(0,O.useEffect)(()=>{if(s!==`recording`)return;let e=window.setInterval(()=>u(e=>e+1),1e3);return()=>window.clearInterval(e)},[s]);let d=e=>{let t=Date.now();n(n=>[...n,{id:t,role:`user`,text:e}]),o(``),i(!0),window.setTimeout(()=>{n(e=>[...e,{id:t+1,role:`agent`,text:`Đây là câu trả lời mẫu. Dữ liệu thật nối vào qua props của màn hình.`}]),i(!1)},1200)};return(0,k.jsxs)(x,{...e,busy:r,state:t.length===0?`empty`:`ready`,suggestions:[`Doanh thu tháng này`,`Khách hàng rời bỏ tuần qua`],onSuggestion:d,onSend:d,onStop:()=>i(!1),promptProps:{voice:!0,value:a,onValueChange:o,voiceState:s,voiceDuration:l,onVoiceStart:()=>{u(0),c(`recording`)},onVoiceCancel:()=>c(`idle`),onVoiceStop:()=>{c(`transcribing`),window.setTimeout(()=>{o(e=>`${e}${e?` `:``}Doanh thu tháng 8 thế nào?`),c(`idle`)},1200)}},children:[t.map(e=>(0,k.jsx)(m,{role:e.role,time:`09:30`,children:e.text},e.id)),r&&(0,k.jsx)(m,{role:`agent`,status:`streaming`,children:`Đang tổng hợp`})]})}},U=[`Ready`,`Answering`,`Empty`,`Loading`,`LoadError`,`TurnError`,`Voice`,`Playground`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    children: thread
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    busy: true,
    children: <>
        <ChatMessage role="user" time="09:14">Tách riêng nhóm doanh nghiệp giúp mình.</ChatMessage>
        <ChatMessage role="agent" status="streaming" trace={<AgentTrace defaultExpanded steps={[{
        id: '1',
        label: 'Lọc khách hàng doanh nghiệp',
        detail: 'customers.segment = "enterprise"',
        status: 'done',
        meta: '0,9s'
      }, {
        id: '2',
        label: 'Tính doanh thu theo tháng',
        status: 'running'
      }]} />}>
          Nhóm doanh nghiệp đóng góp 2.140.000.000 ₫ trong quý 3
        </ChatMessage>
      </>
  }
}`,...I.parameters?.docs?.source},description:{story:`Trợ lý đang trả lời: nhật ký bước chạy đang chạy, con trỏ ở cuối câu, nút Gửi thành Dừng.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Hội thoại mới',
    activeConversation: undefined,
    state: 'empty',
    suggestions: ['Doanh thu tháng này', 'Khách hàng rời bỏ tuần qua', 'Chi phí hạ tầng theo dịch vụ', 'Tỉ lệ hoàn tất onboarding']
  }
}`,...L.parameters?.docs?.source},description:{story:`Hội thoại mới: gợi ý câu hỏi thay cho màn hình trắng.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'loading'
  }
}`,...R.parameters?.docs?.source},description:{story:`Đang tải lịch sử hội thoại — skeleton theo hình dạng tin nhắn thật.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'error'
  }
}`,...z.parameters?.docs?.source},description:{story:`Không tải được: nói cách sửa, ô soạn khoá cho tới khi thử lại thành công.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <ChatMessage role="user" time="09:20">Nối thêm số liệu tỉ giá vào báo cáo.</ChatMessage>
        <ChatMessage role="agent" time="09:20" status="error" error="Không gọi được API tỉ giá (HTTP 503). Thử lại, hoặc nhập tỉ giá thủ công." actions={<Button variant="secondary" size="sm">Trả lời lại</Button>} trace={<AgentTrace defaultExpanded steps={[{
        id: '1',
        label: 'Đọc bảng doanh thu',
        status: 'done',
        meta: '0,5s'
      }, {
        id: '2',
        label: 'Gọi API tỉ giá',
        detail: 'HTTP 503',
        status: 'error',
        meta: '2,1s'
      }]} />}>
          Mình dừng ở bước lấy tỉ giá.
        </ChatMessage>
      </>
  }
}`,...B.parameters?.docs?.source},description:{story:`Một lượt hỏng giữa hội thoại — các lượt trước vẫn đọc được, lỗi kèm hành động.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    children: thread,
    promptProps: {
      voice: true,
      voiceState: 'recording',
      voiceDuration: 5
    }
  }
}`,...V.parameters?.docs?.source},description:{story:`Ghi âm câu hỏi: ô soạn đổi thành dải "Đang nghe" có đồng hồ, nút thành Huỷ / Xong.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const [items, setItems] = useState<{
      id: number;
      role: 'user' | 'agent';
      text: string;
    }[]>([]);
    const [busy, setBusy] = useState(false);
    const [draft, setDraft] = useState('');
    const [voiceState, setVoiceState] = useState<'idle' | 'recording' | 'transcribing' | 'error'>('idle');
    const [secs, setSecs] = useState(0);
    useEffect(() => {
      if (voiceState !== 'recording') return;
      const t = window.setInterval(() => setSecs(s => s + 1), 1000);
      return () => window.clearInterval(t);
    }, [voiceState]);
    const ask = (text: string) => {
      const id = Date.now();
      setItems(p => [...p, {
        id,
        role: 'user',
        text
      }]);
      setDraft('');
      setBusy(true);
      window.setTimeout(() => {
        setItems(p => [...p, {
          id: id + 1,
          role: 'agent',
          text: 'Đây là câu trả lời mẫu. Dữ liệu thật nối vào qua props của màn hình.'
        }]);
        setBusy(false);
      }, 1200);
    };
    return <AgentAssistant {...args} busy={busy} state={items.length === 0 ? 'empty' : 'ready'} suggestions={['Doanh thu tháng này', 'Khách hàng rời bỏ tuần qua']} onSuggestion={ask} onSend={ask} onStop={() => setBusy(false)} promptProps={{
      voice: true,
      value: draft,
      onValueChange: setDraft,
      voiceState,
      voiceDuration: secs,
      onVoiceStart: () => {
        setSecs(0);
        setVoiceState('recording');
      },
      onVoiceCancel: () => setVoiceState('idle'),
      onVoiceStop: () => {
        setVoiceState('transcribing');
        window.setTimeout(() => {
          setDraft(d => \`\${d}\${d ? ' ' : ''}Doanh thu tháng 8 thế nào?\`);
          setVoiceState('idle');
        }, 1200);
      }
    }}>
        {items.map(m => <ChatMessage key={m.id} role={m.role} time="09:30">{m.text}</ChatMessage>)}
        {busy && <ChatMessage role="agent" status="streaming">Đang tổng hợp</ChatMessage>}
      </AgentAssistant>;
  }
}`,...H.parameters?.docs?.source},description:{story:`Bản chạy thử: gửi câu hỏi để xem luồng rỗng → đang trả lời → có câu trả lời.`,...H.parameters?.docs?.description}}}})))()}W();export{I as Answering,L as Empty,z as LoadError,R as Loading,H as Playground,F as Ready,B as TurnError,V as Voice,U as __namedExportsOrder,P as default};