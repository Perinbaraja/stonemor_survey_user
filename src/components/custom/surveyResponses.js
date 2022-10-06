import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import AdminMenu from "../admin/index";
import { graphql, compose, withApollo } from "react-apollo";
import gql from "graphql-tag";
import { getResponses, listResponsess } from "../../graphql/queries";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    marginLeft: 120,
    marginTop: 20,
    padding: theme.spacing(0, 3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  image: {
    width: 64,
  },
  button: {
    margin: theme.spacing(1),
    marginTop: 20,
  },
  // container: {
  //   maxHeight: 2000,
  // },
}));
const surveyResponsesPart = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  // const {
  //   data: { loading, error, getResponses },
  // } = props.getResponses;
  const {
    data: { listResponsess },
  } = props.listResponsess;
  console.log("listResponsess", props);
  return (
    <div className={classes.root}>
      <AdminMenu />
      <main className={classes.content}>
        {/* <Typography variant="h4">Manage Surveys</Typography> */}
        <p />
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Answer</TableCell>
                {/* <TableCell>Manage</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {listResponsess?.items.map((res, r) => (
                <TableRow key={r}>
                  <TableCell>{res?.qu?.qu}</TableCell>
                  <TableCell>{res?.res}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </main>
    </div>
  );
};

const surveyResponses = compose(
  graphql(gql(getResponses), {
    options: (props) => ({
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
      variables: { id: props.match.params.responseID },
    }),
    props: (props) => {
      return {
        getResponses: props ? props : [],
      };
    },
  }),
  graphql(gql(listResponsess), {
    options: (props) => ({
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
      variables: { id: props.match.params.responseID },
    }),
    props: (props) => {
      return {
        listResponsess: props ? props : [],
      };
    },
  })
)(surveyResponsesPart);

export default surveyResponses;
