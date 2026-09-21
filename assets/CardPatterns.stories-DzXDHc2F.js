import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CCKs4X5K.js";import{n,t as r}from"./ActionCard-BsI6BA8E.js";import{n as i,t as a}from"./Button-CBTKY0YS.js";import{n as o,t as s}from"./EmptyState-DfDL9i7w.js";import{r as c,t as l}from"./Avatar-dOJYHWgH.js";import{n as u,t as d}from"./Badge-DvnpDL9g.js";import{n as f,t as p}from"./BarChart-D0r-3jqx.js";import{n as m,t as h}from"./Card-DjxWhcso.js";import{n as g,t as _}from"./SelectableCard-DOiu0PaO.js";import{n as v,t as y}from"./StatTile-BntzVNbM.js";import{n as b,t as x}from"./ChartFrame-DFeaZ5pF.js";function S({so:e,ten:t,dungKhi:n,boi:r,children:i}){return(0,C.jsxs)(`section`,{style:{display:`grid`,gap:`var(--space-3)`},children:[(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:`var(--space-3)`},children:[(0,C.jsx)(`span`,{style:{fontSize:`var(--text-xs)`,color:`var(--color-text-muted)`,fontVariantNumeric:`tabular-nums`},children:String(e).padStart(2,`0`)}),(0,C.jsx)(`h3`,{style:{margin:0,fontSize:`var(--text-md)`,fontWeight:`var(--weight-semibold)`},children:t}),(0,C.jsx)(`span`,{style:{fontSize:`var(--text-xs)`,color:`var(--color-text-muted)`,marginLeft:`auto`},children:r})]}),(0,C.jsx)(`p`,{style:{margin:`var(--space-1) 0 0`,fontSize:`var(--text-sm)`,color:`var(--color-text-secondary)`},children:n})]}),(0,C.jsx)(`div`,{children:i})]})}var C,w,T,E,D;function O(){return(O=e((()=>{m(),g(),n(),v(),b(),f(),o(),c(),u(),i(),C=t(),w={title:`Patterns/Card`,parameters:{layout:`padded`},tags:[`autodocs`]},T={name:`Menu — mười loại card`,render:()=>(0,C.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-10)`,maxWidth:880},children:[(0,C.jsx)(S,{so:1,ten:`Card nội dung`,dungKhi:`Tiêu đề, mô tả, một hành động phụ. Mặc định khi không rơi vào chín loại dưới.`,boi:`Card`,children:(0,C.jsx)(`div`,{style:{maxWidth:420},children:(0,C.jsx)(h,{title:`Hợp đồng số 24-118`,description:`Ký ngày 12/09/2026, hiệu lực 14 tuần.`,action:(0,C.jsx)(d,{tone:`success`,children:`Đang chạy`}),footer:(0,C.jsx)(a,{variant:`ghost`,size:`sm`,children:`Xem chi tiết`}),children:(0,C.jsx)(`p`,{style:{margin:0,fontSize:`var(--text-sm)`,color:`var(--color-text-secondary)`},children:`Gói trọn gói, hai phòng ngủ, bàn giao dự kiến 24/12.`})})})}),(0,C.jsx)(S,{so:2,ten:`Card số liệu`,dungKhi:`Một con số dẫn dắt, kèm mức thay đổi và xu hướng. Đừng vẽ biểu đồ cho một con số.`,boi:`StatTile`,children:(0,C.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:`var(--space-4)`},children:[(0,C.jsx)(y,{label:`Doanh thu tháng 9`,value:`1,24 tỷ ₫`,delta:{value:`12,4%`,direction:`up`},caption:`so với tháng 8`,spark:[8,12,10,16,14,19,24]}),(0,C.jsx)(y,{label:`Tỉ lệ rời bỏ`,value:`2,1%`,delta:{value:`0,6 điểm`,direction:`down`,meaning:`good`},caption:`so với tháng 8`})]})}),(0,C.jsx)(S,{so:3,ten:`Card biểu đồ`,dungKhi:`Biểu đồ kèm tiêu đề, legend và bốn trạng thái tải.`,boi:`ChartFrame`,children:(0,C.jsx)(`div`,{style:{maxWidth:520},children:(0,C.jsx)(x,{title:`Đơn hàng theo chi nhánh`,subtitle:`Tháng 9/2026`,height:140,children:(0,C.jsx)(p,{data:[{label:`Hà Nội`,values:[1240]},{label:`TP.HCM`,values:[1890]},{label:`Đà Nẵng`,values:[640]}]})})})}),(0,C.jsx)(S,{so:4,ten:`Card rỗng`,dungKhi:`Chưa có dữ liệu. Nói rõ chưa có gì và làm gì tiếp, không để khung trống.`,boi:`Card + EmptyState`,children:(0,C.jsx)(`div`,{style:{maxWidth:420},children:(0,C.jsx)(h,{children:(0,C.jsx)(s,{size:`compact`,title:`Chưa có dự án nào`,description:`Tạo dự án đầu tiên để bắt đầu theo dõi tiến độ.`,action:(0,C.jsx)(a,{variant:`secondary`,size:`sm`,children:`Tạo dự án`})})})})}),(0,C.jsx)(S,{so:5,ten:`Card có ảnh`,dungKhi:`Ảnh là thứ người đọc nhận ra trước. Giữ cùng tỉ lệ khung trong một lưới.`,boi:`Card media`,children:(0,C.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:`var(--space-4)`},children:[(0,C.jsx)(h,{media:{src:`/img/phong-khach.jpg`,alt:`Phòng khách với sofa dài`,ratio:`4/3`},title:`Harbour Row`,description:`2 phòng ngủ · 11 tuần`}),(0,C.jsx)(h,{media:{src:`/img/bep.jpg`,alt:`Khu bếp liền bàn ăn`,ratio:`4/3`},title:`Linden Park`,description:`Cải tạo · 6 tuần`})]})}),(0,C.jsx)(S,{so:6,ten:`Card dải ngang`,dungKhi:`Danh sách dọc: ảnh trái, chữ phải. Quét nhanh hơn lưới khi nhiều mục.`,boi:`Card horizontal`,children:(0,C.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-3)`,maxWidth:560},children:(0,C.jsx)(h,{orientation:`horizontal`,media:{src:`/img/phong-ngu.jpg`,alt:`Phòng ngủ`},title:`Ashfield`,description:`Nhà phố, bàn giao tháng 7. Bảo hành mộc và điện nước 24 tháng.`})})}),(0,C.jsx)(S,{so:7,ten:`Card sản phẩm`,dungKhi:`Thương mại: ảnh, tên, giá, đánh giá. Ghép chứ không phải component riêng — mỗi sản phẩm một kiểu.`,boi:`ghép Card + Badge + Button`,children:(0,C.jsx)(`div`,{style:{maxWidth:240},children:(0,C.jsx)(h,{media:{src:`/img/bep.jpg`,alt:`Tủ bếp gỗ sồi`,ratio:`1/1`},title:`Tủ bếp gỗ sồi`,action:(0,C.jsx)(d,{tone:`brand`,children:`Mới`}),footer:(0,C.jsx)(a,{variant:`secondary`,size:`sm`,fullWidth:!0,children:`Thêm vào giỏ`}),children:(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:`var(--space-2)`},children:[(0,C.jsx)(`span`,{style:{fontSize:`var(--text-lg)`},children:`18.400.000 ₫`}),(0,C.jsx)(`s`,{style:{fontSize:`var(--text-xs)`,color:`var(--color-text-muted)`},children:`21.000.000 ₫`})]})})})}),(0,C.jsx)(S,{so:8,ten:`Card hồ sơ`,dungKhi:`Người: ảnh, tên, vai trò, một hành động. Cũng là ghép, không phải component riêng.`,boi:`ghép Card + Avatar`,children:(0,C.jsx)(`div`,{style:{maxWidth:320},children:(0,C.jsx)(h,{children:(0,C.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,alignItems:`center`},children:[(0,C.jsx)(l,{name:`Elin Sandoval`,size:`lg`,status:`online`}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{style:{fontSize:`var(--text-sm)`,fontWeight:`var(--weight-medium)`},children:`Elin Sandoval`}),(0,C.jsx)(`div`,{style:{fontSize:`var(--text-xs)`,color:`var(--color-text-muted)`},children:`Quản lý công trường · Harbour Row`})]}),(0,C.jsx)(a,{variant:`ghost`,size:`sm`,style:{marginLeft:`auto`},children:`Nhắn`})]})})})}),(0,C.jsx)(S,{so:9,ten:`Card hành động`,dungKhi:`Một thẻ, một việc. Mô tả nói kết quả nhận được, không kể tính năng.`,boi:`ActionCard`,children:(0,C.jsx)(`div`,{style:{maxWidth:480},children:(0,C.jsx)(r,{title:`Đặt lịch khảo sát`,description:`Một buổi tại nhà để đo đạc và nghe nếp sinh hoạt, trước khi vẽ bất cứ thứ gì.`,action:(0,C.jsx)(a,{variant:`primary`,children:`Đặt lịch`}),note:`Miễn phí, không cần cọc`})})}),(0,C.jsx)(S,{so:10,ten:`Card chọn được`,dungKhi:`Chọn một trong nhiều phương án, cả thẻ là vùng bấm. Bên dưới là input thật, không phải div gắn onClick.`,boi:`SelectableCard`,children:(0,C.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`,maxWidth:420},children:[(0,C.jsx)(_,{name:`menu-goi`,value:`design`,title:`Chỉ thiết kế`,description:`Bạn đã có thầu thi công.`,meta:`3.400 $ / phòng`,defaultChecked:!0}),(0,C.jsx)(_,{name:`menu-goi`,value:`full`,title:`Trọn gói`,description:`Thiết kế và thi công một hợp đồng.`,meta:`từ 52.000 $ / căn`})]})})]})},E={name:`Khi nào đừng dùng card`,render:()=>(0,C.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-6)`,maxWidth:720},children:[(0,C.jsx)(`p`,{style:{margin:0,fontSize:`var(--text-sm)`,color:`var(--color-text-secondary)`},children:`Card là lựa chọn an toàn, không phải lựa chọn đúng. Dữ liệu cần quét theo cột, so sánh giữa các dòng, hoặc sắp xếp — bảng đọc nhanh hơn hẳn. Sáu thẻ dưới đây chính là sáu dòng của một bảng, và ở dạng thẻ thì mắt phải nhảy ngang dọc để so cùng một trường.`}),(0,C.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:`var(--space-3)`},children:[[`Hà Nội`,`1.240`,`42`],[`TP.HCM`,`1.890`,`68`],[`Đà Nẵng`,`640`,`28`],[`Cần Thơ`,`310`,`16`],[`Hải Phòng`,`520`,`24`],[`Huế`,`280`,`12`]].map(([e,t,n])=>(0,C.jsx)(h,{title:e,children:(0,C.jsxs)(`div`,{style:{fontSize:`var(--text-sm)`,color:`var(--color-text-secondary)`},children:[t,` đơn · `,n,` nhân viên`]})},e))})]})},D=[`Menu`,`KhiNaoKhongDungCard`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Menu — mười loại card',
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-10)',
    maxWidth: 880
  }}>
      <Muc so={1} ten="Card nội dung" dungKhi="Tiêu đề, mô tả, một hành động phụ. Mặc định khi không rơi vào chín loại dưới." boi="Card">
        <div style={{
        maxWidth: 420
      }}>
          <Card title="Hợp đồng số 24-118" description="Ký ngày 12/09/2026, hiệu lực 14 tuần." action={<Badge tone="success">Đang chạy</Badge>} footer={<Button variant="ghost" size="sm">Xem chi tiết</Button>}>
            <p style={{
            margin: 0,
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-secondary)'
          }}>Gói trọn gói, hai phòng ngủ, bàn giao dự kiến 24/12.</p>
          </Card>
        </div>
      </Muc>

      <Muc so={2} ten="Card số liệu" dungKhi="Một con số dẫn dắt, kèm mức thay đổi và xu hướng. Đừng vẽ biểu đồ cho một con số." boi="StatTile">
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--space-4)'
      }}>
          <StatTile label="Doanh thu tháng 9" value="1,24 tỷ ₫" delta={{
          value: '12,4%',
          direction: 'up'
        }} caption="so với tháng 8" spark={[8, 12, 10, 16, 14, 19, 24]} />
          <StatTile label="Tỉ lệ rời bỏ" value="2,1%" delta={{
          value: '0,6 điểm',
          direction: 'down',
          meaning: 'good'
        }} caption="so với tháng 8" />
        </div>
      </Muc>

      <Muc so={3} ten="Card biểu đồ" dungKhi="Biểu đồ kèm tiêu đề, legend và bốn trạng thái tải." boi="ChartFrame">
        <div style={{
        maxWidth: 520
      }}>
          <ChartFrame title="Đơn hàng theo chi nhánh" subtitle="Tháng 9/2026" height={140}>
            <BarChart data={[{
            label: 'Hà Nội',
            values: [1240]
          }, {
            label: 'TP.HCM',
            values: [1890]
          }, {
            label: 'Đà Nẵng',
            values: [640]
          }]} />
          </ChartFrame>
        </div>
      </Muc>

      <Muc so={4} ten="Card rỗng" dungKhi="Chưa có dữ liệu. Nói rõ chưa có gì và làm gì tiếp, không để khung trống." boi="Card + EmptyState">
        <div style={{
        maxWidth: 420
      }}>
          <Card><EmptyState size="compact" title="Chưa có dự án nào" description="Tạo dự án đầu tiên để bắt đầu theo dõi tiến độ." action={<Button variant="secondary" size="sm">Tạo dự án</Button>} /></Card>
        </div>
      </Muc>

      <Muc so={5} ten="Card có ảnh" dungKhi="Ảnh là thứ người đọc nhận ra trước. Giữ cùng tỉ lệ khung trong một lưới." boi="Card media">
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 'var(--space-4)'
      }}>
          <Card media={{
          src: '/img/phong-khach.jpg',
          alt: 'Phòng khách với sofa dài',
          ratio: '4/3'
        }} title="Harbour Row" description="2 phòng ngủ · 11 tuần" />
          <Card media={{
          src: '/img/bep.jpg',
          alt: 'Khu bếp liền bàn ăn',
          ratio: '4/3'
        }} title="Linden Park" description="Cải tạo · 6 tuần" />
        </div>
      </Muc>

      <Muc so={6} ten="Card dải ngang" dungKhi="Danh sách dọc: ảnh trái, chữ phải. Quét nhanh hơn lưới khi nhiều mục." boi="Card horizontal">
        <div style={{
        display: 'grid',
        gap: 'var(--space-3)',
        maxWidth: 560
      }}>
          <Card orientation="horizontal" media={{
          src: '/img/phong-ngu.jpg',
          alt: 'Phòng ngủ'
        }} title="Ashfield" description="Nhà phố, bàn giao tháng 7. Bảo hành mộc và điện nước 24 tháng." />
        </div>
      </Muc>

      <Muc so={7} ten="Card sản phẩm" dungKhi="Thương mại: ảnh, tên, giá, đánh giá. Ghép chứ không phải component riêng — mỗi sản phẩm một kiểu." boi="ghép Card + Badge + Button">
        <div style={{
        maxWidth: 240
      }}>
          <Card media={{
          src: '/img/bep.jpg',
          alt: 'Tủ bếp gỗ sồi',
          ratio: '1/1'
        }} title="Tủ bếp gỗ sồi" action={<Badge tone="brand">Mới</Badge>} footer={<Button variant="secondary" size="sm" fullWidth>Thêm vào giỏ</Button>}>
            <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 'var(--space-2)'
          }}>
              <span style={{
              fontSize: 'var(--text-lg)'
            }}>18.400.000 ₫</span>
              <s style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--color-text-muted)'
            }}>21.000.000 ₫</s>
            </div>
          </Card>
        </div>
      </Muc>

      <Muc so={8} ten="Card hồ sơ" dungKhi="Người: ảnh, tên, vai trò, một hành động. Cũng là ghép, không phải component riêng." boi="ghép Card + Avatar">
        <div style={{
        maxWidth: 320
      }}>
          <Card>
            <div style={{
            display: 'flex',
            gap: 'var(--space-4)',
            alignItems: 'center'
          }}>
              <Avatar name="Elin Sandoval" size="lg" status="online" />
              <div>
                <div style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--weight-medium)'
              }}>Elin Sandoval</div>
                <div style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-muted)'
              }}>Quản lý công trường · Harbour Row</div>
              </div>
              <Button variant="ghost" size="sm" style={{
              marginLeft: 'auto'
            }}>Nhắn</Button>
            </div>
          </Card>
        </div>
      </Muc>

      <Muc so={9} ten="Card hành động" dungKhi="Một thẻ, một việc. Mô tả nói kết quả nhận được, không kể tính năng." boi="ActionCard">
        <div style={{
        maxWidth: 480
      }}>
          <ActionCard title="Đặt lịch khảo sát" description="Một buổi tại nhà để đo đạc và nghe nếp sinh hoạt, trước khi vẽ bất cứ thứ gì." action={<Button variant="primary">Đặt lịch</Button>} note="Miễn phí, không cần cọc" />
        </div>
      </Muc>

      <Muc so={10} ten="Card chọn được" dungKhi="Chọn một trong nhiều phương án, cả thẻ là vùng bấm. Bên dưới là input thật, không phải div gắn onClick." boi="SelectableCard">
        <div style={{
        display: 'grid',
        gap: 'var(--space-3)',
        maxWidth: 420
      }}>
          <SelectableCard name="menu-goi" value="design" title="Chỉ thiết kế" description="Bạn đã có thầu thi công." meta="3.400 $ / phòng" defaultChecked />
          <SelectableCard name="menu-goi" value="full" title="Trọn gói" description="Thiết kế và thi công một hợp đồng." meta="từ 52.000 $ / căn" />
        </div>
      </Muc>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Khi nào đừng dùng card',
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-6)',
    maxWidth: 720
  }}>
      <p style={{
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-secondary)'
    }}>
        Card là lựa chọn an toàn, không phải lựa chọn đúng. Dữ liệu cần quét theo cột, so sánh giữa các dòng, hoặc sắp xếp — bảng đọc nhanh hơn hẳn. Sáu thẻ dưới đây chính là sáu dòng của một bảng, và ở dạng thẻ thì mắt phải nhảy ngang dọc để so cùng một trường.
      </p>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: 'var(--space-3)'
    }}>
        {[['Hà Nội', '1.240', '42'], ['TP.HCM', '1.890', '68'], ['Đà Nẵng', '640', '28'], ['Cần Thơ', '310', '16'], ['Hải Phòng', '520', '24'], ['Huế', '280', '12']].map(([ten, don, ns]) => <Card key={ten} title={ten}>
            <div style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)'
        }}>{don} đơn · {ns} nhân viên</div>
          </Card>)}
      </div>
    </div>
}`,...E.parameters?.docs?.source}}}})))()}O();export{E as KhiNaoKhongDungCard,T as Menu,D as __namedExportsOrder,w as default};