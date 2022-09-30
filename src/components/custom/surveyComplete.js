import React from "react";
import { withApollo } from "react-apollo";

import {
  createStyles,
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";

import {
  IconButton,
  Paper,
  Typography,
  Box,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const styles = {
  paperContainer: {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('https://wallpaperaccess.com/full/1454447.jpg')`,
    backgroundSize: "cover",
    minHeight: "100vh",
  },
};

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(2),
    },
    logo: {
      maxWidth: 300,
      paddingTop: 14,
    },
    text: {
      marginTop: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: 100,
      height: 100,
      marginLeft: "40%",
    },
    textcolor: {
      color: "#fafafa",
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
    <div style={styles.paperContainer}>
      <AppBar position="sticky">
        <Toolbar>
          <img
            src="https://dynamix-cdn.s3.amazonaws.com/stonemorcom/stonemorcom_616045937.svg"
            alt="logo"
            className={classes.logo}
          />
        </Toolbar>
      </AppBar>
      <div className={classes.text}>
        <Box sx={{ width: "300", height: "300" }} alignItems="center">
          <img
            src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png"
            className={classes.img}
            alt="success"
          />

          <ThemeProvider theme={theme}>
            <Typography variant="h3" className={classes.textcolor}>
              Thankyou for Your Participation
            </Typography>
            <Typography variant="h3" className={classes.textcolor}>
              {" "}
              Your Survey is Completed
            </Typography>
          </ThemeProvider>
        </Box>
      </div>
    </div>
  );
};

export default withApollo(SurveyComplete);
