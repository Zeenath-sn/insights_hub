import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

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
          <Card
            sx={{
              "&:hover": { backgroundColor: "#F1F3E0" },
              borderRadius: "12px",
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Box>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="h6" component="div">
                  {card.value}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
