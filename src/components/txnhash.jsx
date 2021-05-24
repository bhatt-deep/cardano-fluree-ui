import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function BasicTable(props) {
  const apiUrl = `http://localhost:3001/hash`;
  const hash = props.location.state.hash;
  const [responseData, setResponseData] = useState('');
  console.log(hash)
  useEffect(() => {
    axios.post(apiUrl, {
        "pubKey" : "024bbf6389c3d879d19d4337b46d2aedac15c21a2c028e2b303ca02c26246f86b5",
        "hash":hash
    }).then((response) => {
      const tokenData = response.data.result;
      setResponseData(tokenData)

    }).catch((error) => {
      console.log(error)
    })
  }, [])
const classes = useStyles();
console.log(responseData)

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
              <TableRow >
                <TableCell component="th" scope="row">
                  <Link to={{pathname : "./certificate", state:responseData}}  >
                    {responseData.txhHash}
                  </Link>

                </TableCell>
                <TableCell align="right">{responseData.artist}</TableCell>
                <TableCell align="right">{responseData.name}</TableCell>
                <TableCell align="right">{responseData.date}</TableCell>

              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card.Body>
  </Card>
);
}