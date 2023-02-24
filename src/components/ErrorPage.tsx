import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const ErrorPage = () => {
  return (
    <div>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        There's nothing here!
      </Typography>
    </div>
  );
};

export default ErrorPage;
