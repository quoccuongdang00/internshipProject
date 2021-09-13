import React, { useState } from "react";

const AddProducts = () => {
  const [inputField, setInputField] = useState("");

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = () => {
    console.log(inputField);
    alert(inputField);
  };
  return (
    <div>
      <h2 className="page-header">Edit Agent</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <table>
                <tr>
                  <td>ID:</td>
                  <td>
                    <input
                      type="text"
                      style={style}
                      name="id"
                      onChange={inputsHandler}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>
                    <input
                      type="text"
                      style={style}
                      name="product_name"
                      onChange={inputsHandler}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>
                    <input
                      type="text"
                      style={style}
                      name="price"
                      onChange={inputsHandler}
                    />
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    <button
                      onClick={submitButton}
                      style={{
                        backgroundColor: "#0099ff",
                        border: "none",
                        borderRadius: "15px",
                        color: "white",
                        padding: "15px 32px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                        fontSize: "16px",
                      }}
                    >
                      Save
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const style = {
  borderWidth: "0.1px",
  boxShadow: "0px 0px 5px 5px #ebebe0",
  borderRadius: "10px",
  borderColor: "#ebebe0",
  width: "50%",
  height: "40px",
  marginLeft: "10%",
};
export default AddProducts;
