import React from "react";
import { withApollo } from "react-apollo";

import {
  createStyles,
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";

import { IconButton, Paper, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(2),
    },
  })
);
const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

const SurveyComplete = (props) => {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Thankyou for Your Participation</Typography>
        <Typography variant="h3">Your Survey is Completed</Typography>
      </ThemeProvider>
    </div>
  );
};

export default withApollo(SurveyComplete);
