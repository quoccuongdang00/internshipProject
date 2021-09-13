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

const { Panel } = Collapse;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function callback(key) {
  console.log(key);
}
const panes = [
  {
    menuItem: "Information",
    render: () => <Tab.Pane attached={false}>
     <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="Order and Account" key="1">
          <div>
            <h3>Order Infomation</h3>
            <hr/>
            <table style={{width:'50%'}}>
              <tr>
                <td>Order Date</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Store</td>
                <td>123</td>
              </tr>
            </table>
          </div>
          <div>
            <h3>Account Infomation</h3>
            <hr/>
            <table style={{width:'50%'}}>
              <tr>
                <td>Customer Name</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>123</td>
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
                <TableCell align="right">Price</TableCell>

                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">gross product</TableCell>
                  <TableCell align="right">% Tax  </TableCell>
                  <TableCell align="right">Tax money</TableCell>
                     <TableCell align="right">Total of all</TableCell>
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
                <TableCell align="right">....</TableCell>
                  <TableCell align="right">....</TableCell>
                  <TableCell align="right">....</TableCell>
                  <TableCell align="right">....</TableCell>
                    <TableCell align="right">....</TableCell>

              </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
          <div style={{width:'25%',position:'relative',
  right: "-60%",
  }}><div><table >
              <tr>
                <td>gross product</td>
                <td>140,000</td>
              </tr>
              <tr>
                <td>Delivery charges</td>
                <td> 25,000</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td> 0</td>
              </tr>
          </table></div>
          <hr />
          <div><table style={{fontWeight:'bold'}} >
              <tr>
                <td>Total of all	Total of all	</td>
                <td>165,000</td>
              </tr>
              <tr>
                <td>Total payment</td>
                <td> 0</td>
              </tr>
              <tr>
                <td>Total refund</td>
                <td> 0</td>
              </tr><tr>
                <td>total cost</td>
                <td> 165,000 </td>
              </tr>
          </table></div></div>
          
    </Panel>
  </Collapse>,

    </Tab.Pane>
  },
  {
    menuItem: "Shipping",
    render: () => (
      <Tab.Pane attached={false}>
        <TableContainer component={Paper}>
          <Table className={useStyles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">delivery date</TableCell>
                <TableCell align="right">order code</TableCell>
                <TableCell align="right">order date</TableCell>

                <TableCell align="right">customer</TableCell>
                <TableCell align="right">total order</TableCell>
                <TableCell align="right">handing</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  1
                </TableCell>

                <TableCell align="right">....</TableCell>
                <TableCell align="right">....</TableCell>
                <TableCell align="right">....</TableCell>
                <TableCell align="right">....</TableCell>
                <TableCell align="right">....</TableCell>

                <TableCell align="right">Processing</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Bill",
    render: () => (
      <Tab.Pane attached={false}>
        <TableContainer component={Paper}>
          <Table className={useStyles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">date of invoice</TableCell>
                <TableCell align="right">order code</TableCell>

                <TableCell align="right">customer</TableCell>
                <TableCell align="right">status</TableCell>
                <TableCell align="right">total money</TableCell>
                <TableCell align="right">handing</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  1
                </TableCell>

                <TableCell align="right">....</TableCell>
                <TableCell align="right">....</TableCell>
                <TableCell align="right">....</TableCell>
                <TableCell align="right">....</TableCell>
                <TableCell align="right">....</TableCell>

                <TableCell align="right">Processing</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Tab.Pane>
    ),
  },
];

const TabExampleSecondaryPointing = () => (
  <div>
    <div
      style={{
        marginBottom: "10px",
        textAlign: "center",
      }}
    >
      <h2>Order #</h2>
      <div>
        <Button primary>Assign</Button>
        <Button primary>Cofirm</Button>
        <Button primary>Print</Button>
        <Button primary>Shipping</Button>
        <Button primary>Complete order</Button>
        <Button primary>Cancel order</Button>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card__body">
            <Tab
              menu={{ color: "blue", secondary: true, pointing: true }}
              panes={panes}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TabExampleSecondaryPointing;
