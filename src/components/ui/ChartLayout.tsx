import { Grid, Typography } from "@mui/material";

export default function ChartLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Grid size={{ xs: 12, md: 12, lg: 6, xl: 6 }}>
      <Typography variant="h6" gutterBottom className="text-center">
        {title}
      </Typography>
      {children}
    </Grid>
  );
}
