import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CsjW4rMq.js";import{n,r,t as i}from"./Avatar-C8jnioQO.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),a=t(),o={title:`Components/Avatar`,component:i,tags:[`autodocs`],args:{name:`Nguyễn Văn An`,size:`md`},argTypes:{size:{control:`radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},status:{control:`radio`,options:[void 0,`online`,`offline`,`busy`]}}},s={},c={args:{status:`online`}},l={render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,a.jsx)(i,{name:`Trần Thu Hà`,size:e},e))}),parameters:{controls:{disable:!0}}},u={render:()=>(0,a.jsx)(n,{people:[{name:`Nguyễn Văn An`},{name:`Trần Thu Hà`},{name:`Lê Minh`},{name:`Phạm Dũng`},{name:`Vũ Hải`},{name:`Đỗ Nga`}],max:4}),parameters:{controls:{disable:!0}}},d=[`Initials`,`WithStatus`,`Sizes`,`Group`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'online'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => <Avatar key={s} name="Trần Thu Hà" size={s} />)}</div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup people={[{
    name: 'Nguyễn Văn An'
  }, {
    name: 'Trần Thu Hà'
  }, {
    name: 'Lê Minh'
  }, {
    name: 'Phạm Dũng'
  }, {
    name: 'Vũ Hải'
  }, {
    name: 'Đỗ Nga'
  }]} max={4} />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Group,s as Initials,l as Sizes,c as WithStatus,d as __namedExportsOrder,o as default};