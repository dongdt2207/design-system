import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { Card } from './Card';
import { SelectableCard } from '../SelectableCard/SelectableCard';
import { ActionCard } from '../ActionCard/ActionCard';
import { StatTile } from '../StatTile/StatTile';
import { ChartFrame } from '../ChartFrame/ChartFrame';
import { BarChart } from '../BarChart/BarChart';
import { EmptyState } from '../EmptyState/EmptyState';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';

/** Mỗi mục trong menu: tên, dùng khi nào, và một ví dụ chạy thật. */
function Muc({ so, ten, dungKhi, boi, children }: { so: number; ten: string; dungKhi: string; boi: string; children: ReactNode }) {
  return (
    <section style={{ display: 'grid', gap: 'var(--space-3)' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontVariantNumeric: 'tabular-nums' }}>{String(so).padStart(2, '0')}</span>
          <h3 style={{ margin: 0, fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)' }}>{ten}</h3>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>{boi}</span>
        </div>
        <p style={{ margin: 'var(--space-1) 0 0', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>{dungKhi}</p>
      </div>
      <div>{children}</div>
    </section>
  );
}

const meta: Meta = { title: 'Patterns/Card', parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;

export const Menu: StoryObj = {
  name: 'Menu — mười loại card',
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-10)', maxWidth: 880 }}>
      <Muc so={1} ten="Card nội dung" dungKhi="Tiêu đề, mô tả, một hành động phụ. Mặc định khi không rơi vào chín loại dưới." boi="Card">
        <div style={{ maxWidth: 420 }}>
          <Card title="Hợp đồng số 24-118" description="Ký ngày 12/09/2026, hiệu lực 14 tuần." action={<Badge tone="success">Đang chạy</Badge>} footer={<Button variant="ghost" size="sm">Xem chi tiết</Button>}>
            <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Gói trọn gói, hai phòng ngủ, bàn giao dự kiến 24/12.</p>
          </Card>
        </div>
      </Muc>

      <Muc so={2} ten="Card số liệu" dungKhi="Một con số dẫn dắt, kèm mức thay đổi và xu hướng. Đừng vẽ biểu đồ cho một con số." boi="StatTile">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
          <StatTile label="Doanh thu tháng 9" value="1,24 tỷ ₫" delta={{ value: '12,4%', direction: 'up' }} caption="so với tháng 8" spark={[8, 12, 10, 16, 14, 19, 24]} />
          <StatTile label="Tỉ lệ rời bỏ" value="2,1%" delta={{ value: '0,6 điểm', direction: 'down', meaning: 'good' }} caption="so với tháng 8" />
        </div>
      </Muc>

      <Muc so={3} ten="Card biểu đồ" dungKhi="Biểu đồ kèm tiêu đề, legend và bốn trạng thái tải." boi="ChartFrame">
        <div style={{ maxWidth: 520 }}>
          <ChartFrame title="Đơn hàng theo chi nhánh" subtitle="Tháng 9/2026" height={140}>
            <BarChart data={[{ label: 'Hà Nội', values: [1240] }, { label: 'TP.HCM', values: [1890] }, { label: 'Đà Nẵng', values: [640] }]} />
          </ChartFrame>
        </div>
      </Muc>

      <Muc so={4} ten="Card rỗng" dungKhi="Chưa có dữ liệu. Nói rõ chưa có gì và làm gì tiếp, không để khung trống." boi="Card + EmptyState">
        <div style={{ maxWidth: 420 }}>
          <Card><EmptyState size="compact" title="Chưa có dự án nào" description="Tạo dự án đầu tiên để bắt đầu theo dõi tiến độ." action={<Button variant="secondary" size="sm">Tạo dự án</Button>} /></Card>
        </div>
      </Muc>

      <Muc so={5} ten="Card có ảnh" dungKhi="Ảnh là thứ người đọc nhận ra trước. Giữ cùng tỉ lệ khung trong một lưới." boi="Card media">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
          <Card media={{ src: '/img/phong-khach.jpg', alt: 'Phòng khách với sofa dài', ratio: '4/3' }} title="Harbour Row" description="2 phòng ngủ · 11 tuần" />
          <Card media={{ src: '/img/bep.jpg', alt: 'Khu bếp liền bàn ăn', ratio: '4/3' }} title="Linden Park" description="Cải tạo · 6 tuần" />
        </div>
      </Muc>

      <Muc so={6} ten="Card dải ngang" dungKhi="Danh sách dọc: ảnh trái, chữ phải. Quét nhanh hơn lưới khi nhiều mục." boi="Card horizontal">
        <div style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 560 }}>
          <Card orientation="horizontal" media={{ src: '/img/phong-ngu.jpg', alt: 'Phòng ngủ' }} title="Ashfield" description="Nhà phố, bàn giao tháng 7. Bảo hành mộc và điện nước 24 tháng." />
        </div>
      </Muc>

      <Muc so={7} ten="Card sản phẩm" dungKhi="Thương mại: ảnh, tên, giá, đánh giá. Ghép chứ không phải component riêng — mỗi sản phẩm một kiểu." boi="ghép Card + Badge + Button">
        <div style={{ maxWidth: 240 }}>
          <Card
            media={{ src: '/img/bep.jpg', alt: 'Tủ bếp gỗ sồi', ratio: '1/1' }}
            title="Tủ bếp gỗ sồi"
            action={<Badge tone="brand">Mới</Badge>}
            footer={<Button variant="secondary" size="sm" fullWidth>Thêm vào giỏ</Button>}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)' }}>
              <span style={{ fontSize: 'var(--text-lg)' }}>18.400.000 ₫</span>
              <s style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>21.000.000 ₫</s>
            </div>
          </Card>
        </div>
      </Muc>

      <Muc so={8} ten="Card hồ sơ" dungKhi="Người: ảnh, tên, vai trò, một hành động. Cũng là ghép, không phải component riêng." boi="ghép Card + Avatar">
        <div style={{ maxWidth: 320 }}>
          <Card>
            <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
              <Avatar name="Elin Sandoval" size="lg" status="online" />
              <div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' }}>Elin Sandoval</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Quản lý công trường · Harbour Row</div>
              </div>
              <Button variant="ghost" size="sm" style={{ marginLeft: 'auto' }}>Nhắn</Button>
            </div>
          </Card>
        </div>
      </Muc>

      <Muc so={9} ten="Card hành động" dungKhi="Một thẻ, một việc. Mô tả nói kết quả nhận được, không kể tính năng." boi="ActionCard">
        <div style={{ maxWidth: 480 }}>
          <ActionCard title="Đặt lịch khảo sát" description="Một buổi tại nhà để đo đạc và nghe nếp sinh hoạt, trước khi vẽ bất cứ thứ gì." action={<Button variant="primary">Đặt lịch</Button>} note="Miễn phí, không cần cọc" />
        </div>
      </Muc>

      <Muc so={10} ten="Card chọn được" dungKhi="Chọn một trong nhiều phương án, cả thẻ là vùng bấm. Bên dưới là input thật, không phải div gắn onClick." boi="SelectableCard">
        <div style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 420 }}>
          <SelectableCard name="menu-goi" value="design" title="Chỉ thiết kế" description="Bạn đã có thầu thi công." meta="3.400 $ / phòng" defaultChecked />
          <SelectableCard name="menu-goi" value="full" title="Trọn gói" description="Thiết kế và thi công một hợp đồng." meta="từ 52.000 $ / căn" />
        </div>
      </Muc>
    </div>
  ),
};

export const KhiNaoKhongDungCard: StoryObj = {
  name: 'Khi nào đừng dùng card',
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-6)', maxWidth: 720 }}>
      <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
        Card là lựa chọn an toàn, không phải lựa chọn đúng. Dữ liệu cần quét theo cột, so sánh giữa các dòng, hoặc sắp xếp — bảng đọc nhanh hơn hẳn. Sáu thẻ dưới đây chính là sáu dòng của một bảng, và ở dạng thẻ thì mắt phải nhảy ngang dọc để so cùng một trường.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 'var(--space-3)' }}>
        {[['Hà Nội', '1.240', '42'], ['TP.HCM', '1.890', '68'], ['Đà Nẵng', '640', '28'], ['Cần Thơ', '310', '16'], ['Hải Phòng', '520', '24'], ['Huế', '280', '12']].map(([ten, don, ns]) => (
          <Card key={ten} title={ten}>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>{don} đơn · {ns} nhân viên</div>
          </Card>
        ))}
      </div>
    </div>
  ),
};
