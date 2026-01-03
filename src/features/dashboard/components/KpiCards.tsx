import CardComponent from "@/components/ui/Card";
import { Grid } from "@mui/material";

const cards = [
  {
    id: 1,
    title: "Total Revenue",
    description: "Sum of transactions",
    value: "$120,000",
  },
  {
    id: 2,
    title: "Active Users",
    description: "Users active in date range",
    value: "1,200",
  },
  {
    id: 3,
    title: "Conversion Rate",
    description: "Active / Total users  ",
    value: "12%",
  },
  {
    id: 4,
    title: "Churn Rate",
    description: "Inactive users",
    value: "5%",
  },
];

export default function KpiCard() {
  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid key={card.id} size={{ xs: 12, md: 6, lg: 3, xl: 3 }}>
          <CardComponent card={card} />
        </Grid>
      ))}
    </Grid>
  );
}
