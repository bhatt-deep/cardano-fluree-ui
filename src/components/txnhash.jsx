import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from 'react-bootstrap/Card'
import data from '../data/data.json'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function BasicTable() {
  const classes = useStyles();

  return (
    <Card bg="dark">
    <Card.Body>
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Certificate ID</TableCell>
            <TableCell align="right">Artist Name&nbsp;</TableCell>
            <TableCell align="right">Art&nbsp;</TableCell>
            <TableCell align="right">Issued On</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((postDetail) => (
            <TableRow key={data.name}>
              <TableCell component="th" scope="row">
                <Link to="./certificate">
                {postDetail.txhHash}
                </Link>
              </TableCell>
              <TableCell align="right">{postDetail.artist}</TableCell>
              <TableCell align="right">{postDetail.name}</TableCell>
              <TableCell align="right">{postDetail.issuedon}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card.Body>
    </Card>
  );
}