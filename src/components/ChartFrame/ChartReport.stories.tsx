import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartFrame } from './ChartFrame';
import { StatTile } from '../StatTile/StatTile';
import { LineChart } from '../LineChart/LineChart';
import { BarChart } from '../BarChart/BarChart';
import { DonutChart } from '../DonutChart/DonutChart';

const months = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9'];
const kenh = [
  { name: 'Trực tuyến', values: [320, 380, 420, 410, 480, 520, 580, 640, 780] },
  { name: 'In store', values: [220, 230, 240, 220, 250, 260, 280, 300, 330] },
  { name: 'Resellers', values: [80, 70, 60, 70, 80, 80, 80, 80, 130] },
];
const legendChannels = kenh.map((s, i) => ({ name: s.name, color: `var(--viz-cat-${i + 1})` }));

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'grid', gap: 'var(--space-8)', maxWidth: 1040 }}>{children}</div>
);
const Row = ({ children, cols = 'repeat(auto-fit, minmax(240px, 1fr))' }: { children: React.ReactNode; cols?: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 'var(--space-4)' }}>{children}</div>
);

const meta: Meta = { title: 'Patterns/Report', parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;

export const DayDu: StoryObj = {
  name: 'Full report',
  render: () => (
    <Grid>
      <Row>
        <StatTile label="September revenue" value="$1.24M" delta={{ value: '12.4%', direction: 'up' }} caption="vs. August" spark={[8, 12, 10, 16, 14, 19, 24]} />
        <StatTile label="Orders" value="1,245" delta={{ value: '8.1%', direction: 'up' }} caption="vs. August" spark={[12, 18, 15, 22, 19, 28, 31]} />
        <StatTile label="Average order value" value="$996" delta={{ value: '3.9%', direction: 'down', meaning: 'bad' }} caption="vs. August" />
        <StatTile label="Churn rate" value="2.1%" delta={{ value: '0.6 pt', direction: 'down', meaning: 'good' }} caption="vs. August" />
      </Row>

      <ChartFrame title="Revenue by channel" subtitle="First 9 months of 2026 · unit: $K" legend={legendChannels} height={220}>
        <LineChart labels={months} series={kenh} height={220} />
      </ChartFrame>

      <Row cols="1fr 1fr">
        <ChartFrame title="Orders by branch" subtitle="September 2026" height={180}>
          <BarChart data={[{ label: 'Portland', values: [1240] }, { label: 'Austin', values: [1890] }, { label: 'Boulder', values: [640] }, { label: 'Tucson', values: [310] }]} />
        </ChartFrame>
        <ChartFrame title="Share by channel" subtitle="September 2026" height={180}>
          <DonutChart caption="orders" data={[{ label: 'Online', value: 2410 }, { label: 'In store', value: 1360 }, { label: 'Resellers', value: 530 }, { label: 'Other', value: 180 }]} />
        </ChartFrame>
      </Row>
    </Grid>
  ),
};

export const DangTai: StoryObj = {
  name: 'Loading',
  render: () => (
    <Grid>
      <ChartFrame title="Revenue by channel" subtitle="First 9 months of 2026" state="loading" height={220} />
      <Row cols="1fr 1fr">
        <ChartFrame title="Orders by branch" state="loading" height={180} />
        <ChartFrame title="Share by channel" state="loading" height={180} />
      </Row>
    </Grid>
  ),
};

export const RongVaLoi: StoryObj = {
  name: 'Empty and error',
  render: () => (
    <Grid>
      <Row cols="1fr 1fr">
        <ChartFrame title="Revenue by channel" subtitle="No data for this period" state="empty" height={180} />
        <ChartFrame title="Orders by branch" state="error" onRetry={() => {}} height={180} />
      </Row>
    </Grid>
  ),
};
