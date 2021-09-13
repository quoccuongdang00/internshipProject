
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
const BillDetail = () => {
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
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetail;
