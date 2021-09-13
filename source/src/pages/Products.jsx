import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/table/Table";
import productList from "../assets/JsonData/products-list.json";

const productTableHead = [
  "ID",
  "name",
  "status",
  "price",
  "volumn",
  "total order",
  "handing",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.status}</td>
    <td>{item.price}</td>
    <td>{item.volumn}</td>
    <td>{item.total_order}</td>

    <td>
      <Link to="/products/edit_Product">
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
          Edit
        </button>
      </Link>
      &nbsp;
      <button
        style={{
          marginLeft: "10px",
          width: "20px",
          backgroundColor: "#e1e1d0",
          width: "50px",
          height: "25px",
          color: "black",
          border: "none",
          borderRadius: "15px",
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);
const Products = () => {
  return (
    <div>
      <h2 className="page-header">Products</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div>
                <Link
                  to="/products/addProduct"
                  style={{
                    backgroundColor: "#0099ff",
                    border: "none",
                    borderRadius: "15px",
                    color: "white",
                    padding: "5px 15px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px",
                    position: "absolute",
                    right: "10%",
                    top: "170px",
                  }}
                >
                  Add Product
                </Link>
              </div>

              <Table
                limit="10"
                headData={productTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={productList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
