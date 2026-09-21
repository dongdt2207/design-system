import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-BI5Y47fd.js";import{n as r,t as i}from"./Button-Ci_FxIER.js";import{n as a,t as o}from"./PromptInput-CsDI3Wbc.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{s=n(),a(),r(),c=t(),l=()=>(0,c.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,c.jsx)(`path`,{d:`M10.5 5.5l-4 4a1.5 1.5 0 002 2l4.5-4.5a3 3 0 10-4.2-4.2L4 7.6a4.5 4.5 0 006.4 6.4l3.6-3.6`})}),u={title:`Components/PromptInput`,component:o,tags:[`autodocs`],argTypes:{toolbar:{control:!1},onSend:{action:`send`},onStop:{action:`stop`}},decorators:[e=>(0,c.jsx)(`div`,{style:{width:560},children:(0,c.jsx)(e,{})})],parameters:{docs:{description:{component:`Ô soạn câu hỏi cho trợ lý. Enter gửi, Shift + Enter xuống dòng; ô cao dần theo nội dung rồi tự cuộn.`}}}},d={},f={args:{defaultValue:`Doanh thu tháng 8 thế nào?`}},p={args:{defaultValue:`Tổng hợp doanh thu theo tuần`,toolbar:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{variant:`ghost`,size:`sm`,iconStart:(0,c.jsx)(l,{}),children:`Đính kèm`}),(0,c.jsx)(i,{variant:`ghost`,size:`sm`,children:`Nguồn dữ liệu`})]})}},m={args:{busy:!0,defaultValue:``}},h={args:{maxLength:500,defaultValue:`So sánh doanh thu tháng 8 với cùng kỳ năm ngoái.`}},g={args:{defaultValue:``,error:`Câu hỏi dài quá 500 ký tự. Rút ngắn rồi gửi lại.`}},_={args:{disabled:!0,defaultValue:`Không gửi được khi mất kết nối.`}},v={args:{defaultValue:Array.from({length:10},(e,t)=>`Dòng ${t+1}: mô tả thêm ngữ cảnh cho trợ lý.`).join(`
`)}},y={args:{voice:!0}},b={args:{voice:!0,voiceState:`recording`,voiceDuration:7}},x={args:{voice:!0,voiceState:`transcribing`}},S={args:{voice:!0,voiceState:`error`}},C={parameters:{controls:{disable:!0}},render:()=>{let[e,t]=(0,s.useState)(`idle`),[n,r]=(0,s.useState)(0),[i,a]=(0,s.useState)(``);return(0,s.useEffect)(()=>{if(e!==`recording`)return;let t=window.setInterval(()=>r(e=>e+1),1e3);return()=>window.clearInterval(t)},[e]),(0,c.jsx)(o,{voice:!0,value:i,onValueChange:a,voiceState:e,voiceDuration:n,onVoiceStart:()=>{r(0),t(`recording`)},onVoiceCancel:()=>t(`idle`),onVoiceStop:()=>{t(`transcribing`),window.setTimeout(()=>{a(e=>`${e}${e?` `:``}Doanh thu tháng 8 thế nào?`),t(`idle`)},1200)},onSend:()=>a(``)})}},w=[`Empty`,`HasText`,`WithToolbar`,`Busy`,`WithCount`,`Error`,`Disabled`,`LongText`,`Voice`,`VoiceRecording`,`VoiceTranscribing`,`VoiceError`,`VoiceDemo`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source},description:{story:`Rỗng — nút Gửi khoá cho tới khi có nội dung.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Doanh thu tháng 8 thế nào?'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Tổng hợp doanh thu theo tuần',
    toolbar: <><Button variant="ghost" size="sm" iconStart={<ClipIcon />}>Đính kèm</Button><Button variant="ghost" size="sm">Nguồn dữ liệu</Button></>
  }
}`,...p.parameters?.docs?.source},description:{story:`Nút phụ bên trái: đính kèm tệp, chọn phạm vi dữ liệu.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    busy: true,
    defaultValue: ''
  }
}`,...m.parameters?.docs?.source},description:{story:`Trợ lý đang trả lời: nút đổi thành Dừng, ô vẫn gõ được để soạn câu tiếp theo.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    maxLength: 500,
    defaultValue: 'So sánh doanh thu tháng 8 với cùng kỳ năm ngoái.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '',
    error: 'Câu hỏi dài quá 500 ký tự. Rút ngắn rồi gửi lại.'
  }
}`,...g.parameters?.docs?.source},description:{story:`Lỗi nói cái gì sai và cách sửa.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Không gửi được khi mất kết nối.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: Array.from({
      length: 10
    }, (_, i) => \`Dòng \${i + 1}: mô tả thêm ngữ cảnh cho trợ lý.\`).join('\\n')
  }
}`,...v.parameters?.docs?.source},description:{story:`Nội dung dài — ô cao tối đa 8 dòng rồi cuộn trong ô.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    voice: true
  }
}`,...y.parameters?.docs?.source},description:{story:"Bật `voice` để thêm nút ghi âm bên trái thanh công cụ.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    voice: true,
    voiceState: 'recording',
    voiceDuration: 7
  }
}`,...b.parameters?.docs?.source},description:{story:`Đang ghi: ô gõ nhường chỗ cho dải trạng thái có chấm đỏ và đồng hồ; nút đổi thành Huỷ / Xong.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    voice: true,
    voiceState: 'transcribing'
  }
}`,...x.parameters?.docs?.source},description:{story:`Đã dừng ghi, đang chuyển lời nói thành chữ.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    voice: true,
    voiceState: 'error'
  }
}`,...S.parameters?.docs?.source},description:{story:`Không ghi âm được — nói cách sửa, ô gõ vẫn dùng bình thường.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [state, setState] = useState<'idle' | 'recording' | 'transcribing' | 'error'>('idle');
    const [secs, setSecs] = useState(0);
    const [text, setText] = useState('');
    useEffect(() => {
      if (state !== 'recording') return;
      const t = window.setInterval(() => setSecs(s => s + 1), 1000);
      return () => window.clearInterval(t);
    }, [state]);
    return <PromptInput voice value={text} onValueChange={setText} voiceState={state} voiceDuration={secs} onVoiceStart={() => {
      setSecs(0);
      setState('recording');
    }} onVoiceCancel={() => setState('idle')} onVoiceStop={() => {
      setState('transcribing');
      window.setTimeout(() => {
        setText(t => \`\${t}\${t ? ' ' : ''}Doanh thu tháng 8 thế nào?\`);
        setState('idle');
      }, 1200);
    }} onSend={() => setText('')} />;
  }
}`,...C.parameters?.docs?.source},description:{story:`Bản chạy thử: bấm micro để ghi, đồng hồ chạy, bấm Xong để nhận bản chữ.`,...C.parameters?.docs?.description}}}})))()}T();export{m as Busy,_ as Disabled,d as Empty,g as Error,f as HasText,v as LongText,y as Voice,C as VoiceDemo,S as VoiceError,b as VoiceRecording,x as VoiceTranscribing,h as WithCount,p as WithToolbar,w as __namedExportsOrder,u as default};