import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/table/Table";
import productList from "../assets/JsonData/products-list.json";

const productTableHead = ["ID", "name", "Address", "handing"];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>number</td>
    <td>Name...</td>
    <td>Address</td>

    <td>
      <Link to="/stores/edit_store">
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
      <h2 className="page-header">List of Stores</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div>
                <Link
                  to="/stores/add_store"
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
                    right: "20%",
                    top: "170px",
                  }}
                >
                  Add Store
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
