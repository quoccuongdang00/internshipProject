import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Products from "../pages/Products";
import Oders from "../pages/Oders";
import OderDetail from "../pages/OrderDetail";
import BillDetail from "../pages/BillDetail";
import ShipDetail from "../pages/ShippDetail";
import Edit_Product from "../pages/EditProducts";
import Edit_Store from "../pages/EditStore";
import Add_Product from "../pages/AddProduct";
import Add_Store from "../pages/AddStore";
import Stores from "../pages/Stores";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/customers" component={Customers} />
      <Route path="/products" exact component={Products} />
      <Route path="/products/add_Product" component={Add_Product} />
      <Route path="/products/edit_Product" component={Edit_Product} />
      <Route path="/orders" exact component={Oders} />
      <Route path="/orders/order_detail" exact component={OderDetail} />
      <Route path="/orders/bill_detail" exact component={BillDetail} />
      <Route path="/orders/ship_detail" exact component={ShipDetail} />
      <Route path="/stores" exact component={Stores} />
      <Route path="/stores/add_store" component={Add_Store} />
      <Route path="/stores/edit_store" component={Edit_Store} />
    </Switch>
  );
};

export default Routes;
