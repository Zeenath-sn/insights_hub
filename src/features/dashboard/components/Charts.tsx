import LineChart from "@/components/ui/LineChart";
import { MetricsType } from "@/types/metrics";
import BarChart from "@/components/ui/BarChart";
import { Grid } from "@mui/material";
import ChartLayout from "@/components/ui/ChartLayout";
// import data from '../../mock/metrics.json' with { type: 'json' }

const data: Array<MetricsType> = [
  {
    date: "2025-01-01",
    activeUsers: 120,
    newUsers: 15,
    revenue: 1000,
  },
  {
    date: "2025-01-02",
    activeUsers: 140,
    newUsers: 20,
    revenue: 4100,
  },
];

export default function Charts() {
  return (
    <Grid container spacing={2}>
      <ChartLayout title="Active Users Over Time">
        <LineChart data={data} />
      </ChartLayout>
      <ChartLayout title="Revenue Over Time">
        <BarChart data={data} />
      </ChartLayout>
    </Grid>
  );
}
