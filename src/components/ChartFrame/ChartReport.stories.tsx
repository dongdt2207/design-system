import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartFrame } from './ChartFrame';
import { StatTile } from '../StatTile/StatTile';
import { LineChart } from '../LineChart/LineChart';
import { BarChart } from '../BarChart/BarChart';
import { DonutChart } from '../DonutChart/DonutChart';

const months = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9'];
const kenh = [
  { name: 'Trực tuyến', values: [320, 380, 420, 410, 480, 520, 580, 640, 780] },
  { name: 'Tại quầy', values: [220, 230, 240, 220, 250, 260, 280, 300, 330] },
  { name: 'Đại lý', values: [80, 70, 60, 70, 80, 80, 80, 80, 130] },
];
const legendKenh = kenh.map((s, i) => ({ name: s.name, color: `var(--viz-cat-${i + 1})` }));

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'grid', gap: 'var(--space-8)', maxWidth: 1040 }}>{children}</div>
);
const Row = ({ children, cols = 'repeat(auto-fit, minmax(240px, 1fr))' }: { children: React.ReactNode; cols?: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 'var(--space-4)' }}>{children}</div>
);

const meta: Meta = { title: 'Patterns/Báo cáo', parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;

export const DayDu: StoryObj = {
  name: 'Báo cáo đầy đủ',
  render: () => (
    <Grid>
      <Row>
        <StatTile label="Doanh thu tháng 9" value="1,24 tỷ ₫" delta={{ value: '12,4%', direction: 'up' }} caption="so với tháng 8" spark={[8, 12, 10, 16, 14, 19, 24]} />
        <StatTile label="Đơn hàng" value="1.245" delta={{ value: '8,1%', direction: 'up' }} caption="so với tháng 8" spark={[12, 18, 15, 22, 19, 28, 31]} />
        <StatTile label="Giá trị đơn trung bình" value="996.000 ₫" delta={{ value: '3,9%', direction: 'down', meaning: 'bad' }} caption="so với tháng 8" />
        <StatTile label="Tỉ lệ rời bỏ" value="2,1%" delta={{ value: '0,6 điểm', direction: 'down', meaning: 'good' }} caption="so với tháng 8" />
      </Row>

      <ChartFrame title="Doanh thu theo kênh" subtitle="9 tháng đầu 2026 · đơn vị: triệu ₫" legend={legendKenh} height={220}>
        <LineChart labels={months} series={kenh} height={220} />
      </ChartFrame>

      <Row cols="1fr 1fr">
        <ChartFrame title="Đơn hàng theo chi nhánh" subtitle="Tháng 9/2026" height={180}>
          <BarChart data={[{ label: 'Hà Nội', values: [1240] }, { label: 'TP.HCM', values: [1890] }, { label: 'Đà Nẵng', values: [640] }, { label: 'Cần Thơ', values: [310] }]} />
        </ChartFrame>
        <ChartFrame title="Tỉ trọng kênh bán" subtitle="Tháng 9/2026" height={180}>
          <DonutChart caption="đơn hàng" data={[{ label: 'Trực tuyến', value: 2410 }, { label: 'Tại quầy', value: 1360 }, { label: 'Đại lý', value: 530 }, { label: 'Khác', value: 180 }]} />
        </ChartFrame>
      </Row>
    </Grid>
  ),
};

export const DangTai: StoryObj = {
  name: 'Đang tải',
  render: () => (
    <Grid>
      <ChartFrame title="Doanh thu theo kênh" subtitle="9 tháng đầu 2026" state="loading" height={220} />
      <Row cols="1fr 1fr">
        <ChartFrame title="Đơn hàng theo chi nhánh" state="loading" height={180} />
        <ChartFrame title="Tỉ trọng kênh bán" state="loading" height={180} />
      </Row>
    </Grid>
  ),
};

export const RongVaLoi: StoryObj = {
  name: 'Rỗng và lỗi',
  render: () => (
    <Grid>
      <Row cols="1fr 1fr">
        <ChartFrame title="Doanh thu theo kênh" subtitle="Chưa có dữ liệu kỳ này" state="empty" height={180} />
        <ChartFrame title="Đơn hàng theo chi nhánh" state="error" onRetry={() => {}} height={180} />
      </Row>
    </Grid>
  ),
};
