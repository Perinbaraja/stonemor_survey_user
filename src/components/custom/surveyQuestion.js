import React, { useState, useEffect } from "react";
import { graphql, compose, withApollo } from "react-apollo";
import gql from "graphql-tag";
import { useLocation } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { getQuestionnaire } from "../../graphql/queries";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { v4 as uuid } from "uuid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { createResponses, createSurveyEntries } from "../../graphql/mutations";

import {
  AppBar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      // object-fit is not supported by IE 11.
      objectFit: "cover",
    },
    table: {
      minWidth: 700,
    },
    progress: {
      margin: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(2),
    },
    custom: {
      margin: theme.spacing(3),
      textAlign: "center",
    },
    cont: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      justifyContent: "center",
      alignItems: "center",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    logo: {
      maxWidth: 300,
      paddingTop: 14,
    },
    loadCenter: {
      display: "flex",
      marginTop: "16rem",
      justifyContent: "center",
      alignItems: "center",
    },
    progressBar: {
      with: "20%",
    },
  })
);
const styles = {
  paperContainer: {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('https://basis.net/wp-content/uploads/2021/10/house_plant_home.jpeg')`,
    backgroundSize: "cover",
    minHeight: "100vh",
  },
};
const startTime = new Date().toISOString();

const SurveyQuestion = (props) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const classes = useStyles();
  const [group] = React.useState(uuid());
  const {
    data: { loading, error, getQuestionnaire },
  } = props.getQuestionnaire;

  const questions = getQuestionnaire?.question?.items;
  const firstQuestion =
    questions?.find((q) => q?.order === 1) ||
    questions?.sort((a, b) => b?.order - a?.order)[questions?.length - 1];
  const lastQuestion = questions?.sort((a, b) => a?.order - b?.order)[
    questions?.length - 1
  ];

  const [currentQuestion, setCurrentQuestion] = useState(firstQuestion);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const [ANSLIST, setANSLIST] = useState([]);

  const [check, setCheck] = React.useState([]);
  const [final, setFinal] = React.useState(false);
  const [isPostingResponse, setIsPostingResponse] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  console.log("startTime : ", startTime);
  const onValueChange = (event, newValue) => {
    setCurrentAnswer(newValue);
  };
  const value = currentQuestion?.order - 1;
  // console.log("valuie", value);
  const normalise = () => ((value - MIN) * 100) / (MAX - MIN);
  const MIN = 0;

  // console.log("MIN", MIN);
  const MAX = getQuestionnaire?.question?.items?.length;
  // console.log("MAX", MAX);

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    var temp = check;
    console.log("CHANGE", e.target);
    if (e.target.checked === false) {
      temp = temp.filter((a) => {
        return a !== e.target.value;
      });
    }
    e.target.checked
      ? setCheck([...check, e.target.value])
      : setCheck([...temp]);
  };

  const handleFinish = async (event) => {
    event.preventDefault();
    setIsPostingResponse(true);
    await props.onCreateSurveyEntries({
      id: group,
      startTime: startTime,
      finishTime: new Date().toISOString(),
      questionnaireId: getQuestionnaire?.id,
      surveyEntriesById: params?.get("uid"),
    });
    await Promise.all(
      [
        ...ANSLIST,
        {
          questionId: currentQuestion?.id,
          answer: currentAnswer,
        },
      ].map(async (response) => {
        await props.onCreateResponse({
          responsesQuId: response?.questionId,
          res: response?.answer,
          responsesGroupId: group,
        });
        return <CircularProgress />;
      })
    );
    setIsPostingResponse(false);
    console.log("Survey completed successfully : ");
    props.history.push("/surveyComplete");
  };

  const handleNextClick = () => {
    setANSLIST([
      ...ANSLIST,
      {
        questionId: currentQuestion?.id,
        answer: currentAnswer,
      },
    ]);

    if (currentQuestion?.listOptions?.length === 1) {
      setCurrentQuestion(
        questions.find(
          (q) => q?.id === currentQuestion?.listOptions[0]?.nextQuestion
        )
      );
    } else {
      const nextQue = currentQuestion?.listOptions?.find(
        (l) => l?.listValue === currentAnswer
      );
      if (nextQue) {
        setCurrentQuestion(
          questions.find((q) => q?.id === nextQue?.nextQuestion)
        );
      }
      if (currentQuestion?.type === "CHECKBOX") {
        setCurrentQuestion(
          questions.find(
            (q) => q?.id === currentQuestion?.listOptions[0]?.nextQuestion
          )
        );
      }
    }

    setCurrentAnswer("");
  };

  const handleNextClick2 = () => {
    setANSLIST([
      ...ANSLIST,
      {
        questionId: currentQuestion?.id,
        answer: currentAnswer,
      },
    ]);
    if (currentQuestion?.isDependent) {
      const dependentQuestion = currentQuestion?.dependent?.id;
      const ansofDepQuestion = ANSLIST?.find(
        (a) => a?.questionId === dependentQuestion
      );
      const nextQuestion = currentQuestion?.dependent?.options?.find(
        (o) => o?.dependentValue === ansofDepQuestion?.answer
      );
      setCurrentQuestion(
        questions?.find((q) => q?.id === nextQuestion?.nextQuestion)
      );
    }
    if (currentQuestion?.isSelf) {
      if (currentQuestion?.type === "TEXT") {
        const nextQuestionId = currentQuestion?.listOptions[0].nextQuestion;
        setCurrentQuestion(questions.find((q) => q?.id === nextQuestionId));
      } else {
        const nextQue = currentQuestion?.listOptions?.find(
          (l) => l?.listValue === currentAnswer
        );
        if (nextQue) {
          setCurrentQuestion(
            questions.find((q) => q?.id === nextQue?.nextQuestion)
          );
        }
      }
    }
    if (!currentQuestion?.isDependent && !currentQuestion?.isSelf) {
      const currentQuestionOrder = currentQuestion?.order;
      setCurrentQuestion(
        questions?.find((q) => q?.order === currentQuestionOrder + 1)
      );
    }
    setCurrentAnswer("");
    setCheck("");
  };

  const handlePreviousClick = () => {
    const lastAnswer = ANSLIST[ANSLIST.length - 1];

    const PreQue = lastAnswer?.questionId;
    // console.log("currentAnswer", PreQue);

    if (PreQue) {
      setCurrentQuestion(questions.find((q) => q?.id === PreQue));
      setCurrentAnswer(lastAnswer?.answer);
    }
    setANSLIST(ANSLIST.slice(0, -1));
  };

  const getQuestionView = (q) => {
    switch (q?.type) {
      case "RADIO":
      case "RADIO_TEXT":
        return (
          <FormControl>
            <FormLabel
              style={{ margin: "10px 0", color: "black" }}
              id="demo-radio-buttons-group-label"
            >
              <Typography sx={{ paddingTop: 2 }}>
                {" "}
                Q.
                {q?.qu}
              </Typography>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={currentAnswer}
              onChange={onValueChange}
            >
              {q?.listOptions?.map((option, o) => (
                <FormControlLabel
                  key={o}
                  value={option?.listValue}
                  control={<Radio />}
                  label={option?.listValue}
                />
              ))}
            </RadioGroup>
          </FormControl>
        );
      case "TEXT":
        return (
          <FormControl>
            <FormLabel
              style={{ margin: "10px 0", color: "black" }}
              id="demo-radio-buttons-group-label"
            >
              <Typography sx={{ paddingTop: 2 }}>
                {" "}
                Q.
                {q?.qu}
              </Typography>
            </FormLabel>
            <TextField
              required
              id="outlined-required"
              label="Answer Required"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
            />
          </FormControl>
        );
      case "RADIOWITHTEXT":
        return (
          <FormControl>
            <FormLabel
              style={{ margin: "10px 0", color: "black" }}
              id="demo-radio-buttons-group-label"
            >
              <Typography sx={{ paddingTop: 2 }}>
                {" "}
                Q.
                {q?.qu}
              </Typography>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={currentAnswer}
              onChange={onValueChange}
            >
              {q?.listOptions?.map((option, o) => (
                <FormControlLabel
                  key={o}
                  value={option?.listValue}
                  control={<Radio />}
                  label={option?.listValue}
                />
              ))}
              <TextField
                required
                id="outlined-required"
                label="Other Ans"
                className={classes.textField}
                control={<Radio />}
                margin="normal"
                variant="outlined"
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
        );
      case "CHECKBOX":
        return (
          <FormControl>
            <FormGroup>
              <FormLabel
                style={{ margin: "10px 0", color: "black" }}
                id="demo-radio-buttons-group-label"
              >
                <Typography sx={{ paddingTop: 2 }}>
                  {" "}
                  Q.
                  {q?.qu}
                </Typography>
              </FormLabel>

              {q?.listOptions?.map((option, o) => (
                <FormControlLabel
                  key={o}
                  value={currentAnswer}
                  control={
                    <Checkbox
                      key={o}
                      value={option?.listValue}
                      onChange={handleChange}
                    />
                  }
                  label={option?.listValue}
                />
              ))}
            </FormGroup>
          </FormControl>
        );
      case "CHECKBOXWITHTEXT":
        return (
          <FormControl
            required
            error={error}
            component="fieldset"
            className={classes.formControl}
          >
            <FormGroup>
              <FormLabel
                style={{ margin: "10px 0", color: "black" }}
                id="demo-radio-buttons-group-label"
              >
                <Typography sx={{ paddingTop: 2 }}>
                  {" "}
                  Q.
                  {q?.qu}
                </Typography>
              </FormLabel>

              {q?.listOptions?.map((option, o) => (
                <FormControlLabel
                  key={o}
                  value={currentAnswer}
                  onChange={handleChange}
                  control={<Checkbox key={o} value={option?.listValue} />}
                  label={option?.listValue}
                />
              ))}

              <FormControlLabel
                label="Others  (Please specify) "
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                control={<TextField />}
                required
              />

              {/* <TextField
                required
                id="outlined-required"
                label="Answer Required"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
              /> */}
            </FormGroup>
          </FormControl>
        );
      default:
        return <p>Q. {q?.qu}</p>;
    }
  };

  useEffect(() => {
    if (
      currentQuestion?.type === "CHECKBOX" ||
      currentQuestion?.type === "CHECKBOXWITHTEXT"
    ) {
      setCurrentAnswer(check);
    }
  }, [check]);

  useEffect(() => {
    if (questions?.length > 0) {
      setCurrentQuestion(
        questions?.find((q) => q?.order === 1) ?? questions[0]
      );
    }
  }, [getQuestionnaire]);

  useEffect(() => {
    if (currentQuestion) {
      if (currentQuestion?.order === lastQuestion?.order) {
        setFinal(true);
      } else {
        setFinal(false);
      }
    }
  }, [currentQuestion]);
  // console.log("Demo", ANSLIST, currentAnswer, check);

  // console.log("ANSLIST", params?.get("uid"));

  if (loading) {
    return (
      <div>
        <CircularProgress className={classes.progress} />
      </div>
    );
  }
  if (isPostingResponse) {
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
        <div className={classes.loadCenter}>
          <CircularProgress className={classes.progress} />
          <Typography variant="h5" component="h3">
            Posting Responses.Please wait...
          </Typography>
        </div>
      </div>
    );
  }
  if (error) {
    console.log(error);
    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Error
          </Typography>
          <Typography component="p">
            An error occured while fetching data.
          </Typography>
          <Typography component="p">{error}</Typography>
        </Paper>
      </div>
    );
  }

  return (
    <div className={classes.root} style={styles.paperContainer}>
      <AppBar position="stickey">
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <img
            src="https://dynamix-cdn.s3.amazonaws.com/stonemorcom/stonemorcom_616045937.svg"
            alt="logo"
            className={classes.logo}
          />
        </div>
      </AppBar>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Stonemor"}</DialogTitle>
        <DialogContent>
          <DialogContentText
          // id="alert-dialog-description"
          >
            Welcome to {getQuestionnaire?.name}. Click continue to attend
            survey.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            continue
          </Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth="md">
        <Typography className={classes.custom} variant="h5">
          {getQuestionnaire?.name}
        </Typography>
        <div className={classes.cont}>
          <div>{getQuestionView(currentQuestion)}</div>
          <Box>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={
                currentQuestion?.order
                  ? currentQuestion?.order === 1
                  : questions?.findIndex(
                      (q) => q?.id === currentQuestion?.id
                    ) === 0
              }
              data-amplify-analytics-on="click"
              data-amplify-analytics-name="click"
              onClick={handlePreviousClick}
            >
              <ArrowBackIcon />
              Prev
            </Button>
            {final ? (
              <Button
                variant="contained"
                color="primary"
                data-amplify-analytics-on="click"
                onClick={handleFinish}
              >
                Finish
                {/* <ArrowForwardIcon /> */}
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={!currentAnswer}
                data-amplify-analytics-on="click"
                onClick={handleNextClick2}
              >
                Next
                <ArrowForwardIcon />
              </Button>
            )}
          </Box>
        </div>
      </Container>

      {/* <div>
      <Box display="flex" alignItems="center" justifyContent="center" mt={10}>
        <Box width="20%" mr={1}>
          <LinearProgress
            variant="determinate"
            value={normalise(props.value)}
          />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            normalise(props.value)
          )}%`}</Typography>
        </Box>
      </Box>
    </div> */}
      <div
        style={{
          // do your styles depending on your needs.
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          marginRight: "3rem",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="end">
          <Box width="0%" mr={2.5}>
            <CircularProgress
              variant="determinate"
              value={normalise(props.value)}
              size="5rem"
              thickness={5}
            />
          </Box>
          <Box minWidth={40}>
            <Typography variant="h5" color="textSecondary">{`${Math.round(
              normalise(props.value)
            )}%`}</Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
};

const SurveyQuestionarrireQuestion = compose(
  graphql(gql(getQuestionnaire), {
    options: (props) => ({
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
      variables: { id: props.match.params.questionnaireID },
    }),
    props: (props) => {
      return {
        getQuestionnaire: props ? props : [],
      };
    },
  }),
  graphql(gql(createResponses), {
    props: (props) => ({
      onCreateResponse: async (response) => {
        await props.mutate({
          variables: {
            input: response,
          },
        });
      },
    }),
  }),
  graphql(gql(createSurveyEntries), {
    options: (props) => ({
      errorPolicy: "all",
    }),
    props: (props) => ({
      onCreateSurveyEntries: (ip) => {
        props.mutate({
          variables: {
            input: ip,
          },
        });
      },
    }),
  })
)(SurveyQuestion);

export default withApollo(SurveyQuestionarrireQuestion);
