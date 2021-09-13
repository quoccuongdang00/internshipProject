import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Tab } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import orderList from "../assets/JsonData/order_list.json";
import shippingList from "../assets/JsonData/shipping_list.json";
import billList from "../assets/JsonData/bill_list.json";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const panes = [
  {
    menuItem: "Oders",
    render: () => (
      <Tab.Pane attached={false}>
        <h2 className="page-header">Orders</h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <TableContainer component={Paper}>
                  <Table className={useStyles.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">unit price</TableCell>
                        <TableCell align="right">total order</TableCell>
                        <TableCell align="right">order date</TableCell>
                        <TableCell align="right">status</TableCell>
                        <TableCell align="right">customer</TableCell>
                        <TableCell align="right">store</TableCell>
                        <TableCell align="right">handing</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {orderList.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell component="th" scope="row">
                            {order.id}
                          </TableCell>

                          <TableCell align="right">{order.price}</TableCell>
                          <TableCell align="right">
                            {order.total_order}
                          </TableCell>
                          <TableCell align="right">
                            {order.order_date}
                          </TableCell>
                          <TableCell align="right">
                            <div
                              style={{
                                background: "green",
                                color: "white",
                                border: "1px",
                                borderRadius: "20%",
                                textAlign: "center",
                              }}
                            >
                              {order.status}
                            </div>
                          </TableCell>
                          <TableCell align="right">{order.customer}</TableCell>
                          <TableCell align="right">{order.store}</TableCell>
                          <TableCell align="right">
                            <Link to="/orders/order_detail">
                              <button
                                style={{
                                  width: "20px",
                                  backgroundColor: "#0099ff",
                                  width: "40px",
                                  height: "25px",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "15px",
                                }}
                              >
                                View
                              </button>
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Shippings",
    render: () => (
      <Tab.Pane attached={false}>
        <h2 className="page-header">Shippings</h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <TableContainer component={Paper}>
                  <Table className={useStyles.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">code orders</TableCell>
                        <TableCell align="right">total order</TableCell>
                        <TableCell align="right">order date</TableCell>
                        <TableCell align="right">delivery date</TableCell>
                        <TableCell align="right">handing</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {shippingList.map((ship) => (
                        <TableRow key={ship.id}>
                          <TableCell component="th" scope="row">
                            {ship.id}
                          </TableCell>
                          <TableCell align="right">{ship.code_order}</TableCell>
                          <TableCell align="right">
                            {ship.total_order}
                          </TableCell>
                          <TableCell align="right">{ship.order_date}</TableCell>
                          <TableCell align="right">
                            {ship.delivery_date}
                          </TableCell>

                          <TableCell align="right">
                            <Link to="/orders/ship_detail">
                              <button
                                style={{
                                  width: "20px",
                                  backgroundColor: "#0099ff",
                                  width: "40px",
                                  height: "25px",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "15px",
                                }}
                              >
                                View
                              </button>
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Bills",
    render: () => (
      <Tab.Pane attached={false}>
        <h2 className="page-header">Bills</h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <TableContainer component={Paper}>
                  <Table className={useStyles.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">code orders</TableCell>
                        <TableCell align="right">total order</TableCell>
                        <TableCell align="right">date of invoice</TableCell>
                        <TableCell align="right">handing</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {billList.map((bill) => (
                        <TableRow key={bill.id}>
                          <TableCell component="th" scope="row">
                            {bill.id}
                          </TableCell>

                          <TableCell align="right">
                            {bill.code_orders}
                          </TableCell>
                          <TableCell align="right">
                            {bill.total_order}
                          </TableCell>
                          <TableCell align="right">
                            {bill.date_of_invoice}
                          </TableCell>

                          <TableCell align="right">
                            <Link to="/orders/bill_detail">
                              <button
                                style={{
                                  width: "20px",
                                  backgroundColor: "#0099ff",
                                  width: "40px",
                                  height: "25px",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "15px",
                                }}
                              >
                                View
                              </button>
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
];

const TabExampleSecondary = () => (
  <Tab menu={{ color: "blue", inverted: true }} panes={panes} />
);

export default TabExampleSecondary;
