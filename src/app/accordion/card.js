import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FolderList from "./modal";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, padding:2, }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="div">
            Chat History
          </Typography>
          <CardActions>
            <Button size="small">View all</Button>
          </CardActions>
        </Box>
        <FolderList />
      </CardContent>
    </Card>
  );
}
