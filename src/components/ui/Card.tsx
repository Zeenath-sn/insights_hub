import { Box, Card, CardContent, Typography } from "@mui/material";

export default function CardComponent({
  card,
}: {
  card: {
    title: string;
    description: string;
    value: string;
  };
}) {
  return (
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
  );
}
