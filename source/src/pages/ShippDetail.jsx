
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import { Tab } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import 'antd/dist/antd.css'; 
import { Collapse } from 'antd';
function callback(key) {
  console.log(key);
}const { Panel } = Collapse;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const ShipDetail = () => {
  return (
    <div>
      <h2 className="page-header">#Ship</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body"><Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="Order and Account" key="1">
          <div>
            <h3>Order Infomation</h3>
            <hr/>
            <table style={{width:'50%'}}>
              <tr>
                <td>Order Code</td>
                <td> #1</td>
                    </tr>
                    <tr>
                <td>Order date</td>
                <td>2021-06-01 18:38:13</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>Complete delivery</td>
              </tr>
              
            </table>
          </div>
          <div>
            <h3>Account Infomation</h3>
            <hr/>
            <table style={{width:'50%'}}>
              <tr>
                <td>Customer Name</td>
                <td>Huynh Huy</td>
              </tr>
              <tr>
                <td>Email</td>
                <td></td>
              </tr>
              
            </table>
      </div>
    </Panel>
    <Panel header="Address" key="2">
     <div>
            <h3>Payment Address</h3>
            <hr/>
            <p>abc....xyz</p>
          </div>
          <br/>
          <div>
            <h3>Shipping Address</h3>
            <hr/>
             <p>abc....xyz</p>
      </div>
    </Panel>
    <Panel header="Payment and Shipping" key="3">
      <div>
            <h3>Payment Infomation</h3>
            <hr/>
            <table style={{width:'75%'}}>
              <tr>
                <td>How to pay</td>
                <td></td>
              </tr>
              <tr>
                <td>Unit</td>
                <td> VND</td>
              </tr>
              <tr>
                <td>Payment Status</td>
                <td> Unpaid</td>
              </tr>
              <tr>
                <td>Trading code</td>
                <td> 6f046afc59a4fc4486ffd7dd6c0ee6215bd62dddcf7c33e15513b46eeb5839a2</td>
              </tr>
            </table>
          </div>
        </Panel>
        <Panel header="Ordered Products" key="3">
     
        <TableContainer component={Paper}>
          <Table className={useStyles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">SKU</TableCell>
                <TableCell align="right">Product's name</TableCell>
                <TableCell align="right">Volumn</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  ....
                </TableCell>

                <TableCell align="right">....</TableCell>
                <TableCell align="right">....</TableCell>
                <TableCell align="right">....</TableCell>
               

              </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
          
    </Panel>
  </Collapse>,
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipDetail;
