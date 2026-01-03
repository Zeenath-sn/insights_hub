import LineChart from "@/components/charts/LineChart";
import { MetricsType } from "./ChartsTypes";
import BarChart from "@/components/charts/BarChart";
import { Grid, Typography } from "@mui/material";
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
      <Grid size={{ xs: 12, md: 12, lg: 6, xl: 6 }}>
        <Typography variant="h6" gutterBottom className="text-center">
          Active Users Over Time
        </Typography>
        <LineChart data={data} />
      </Grid>
      <Grid size={{ xs: 12, md: 12, lg: 6, xl: 6 }}>
        <Typography variant="h6" gutterBottom className="text-center">
          Revenue Over Time
        </Typography>
        <BarChart data={data} />
      </Grid>
    </Grid>
  );
}
