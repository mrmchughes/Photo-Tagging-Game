import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          Welcome to my Where's Waldo game.
        </Typography>
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          Your goal is to find error the following characters in the picture as
          fast as possible!
        </Typography>
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          When you've found a character, click on them and select their name.
        </Typography>
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          When you've found them all, you'll get to input your name on the
          leaderboard! Good luck!
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        <Button variant="contained" component={RouterLink} to={`game`}>
          Start!
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
