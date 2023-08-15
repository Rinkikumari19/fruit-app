import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CustomButton from "../shared/CustomButton";

export default function Navbar() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  function loginFunc() {
    setModal1(true);
    setModal2(!modal2);
  }
  return (
    <div className="main-navbar">
      <div className="navbar-items navbar-padding">
        <div>
          <h2 className="fresh-fruit">Fresh Fruits</h2>
        </div>
        <div id="input-width">
          <input type="text" className="navbar-input" placeholder="search" />
        </div>
        <div>
          <CustomButton onClick={() => setModal1(true)}>Login</CustomButton>
          <CustomButton className="navbar-btn">Add Fruit</CustomButton>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modal1}
          modalTransition={{ timeout: 1000 }}
          backdropTransition={{ timeout: 2000 }}
          toggle={() => setModal1(!modal1)}
        >
          <ModalHeader>
            {modal2 ? "Create" : "Login"} Your Account
            <CustomButton className="heading ml10" onClick={loginFunc}>
              {modal2 ? "Login" : "Sign-up"}
            </CustomButton>
          </ModalHeader>
          <ModalBody>
            {modal2 ? (
              <div>
                <h6>User Name</h6>
                <input
                  type={"text"}
                  className="navbar-input mb-3"
                  placeholder="Username"
                />
              </div>
            ) : (
              ""
            )}
            <div>
              <h6>Email/Mobile</h6>
              <input
                type={"text"}
                className="navbar-input mb-3"
                placeholder="Email/Mobile"
              />
              <br></br>
            </div>
            <div>
              <h6>Password</h6>
              <input
                type={"text"}
                className="navbar-input mb-3"
                placeholder="Password"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
            // className="heading"
            >
              {modal2 ? "Sign-up" : "Login"}
            </CustomButton>
            <CustomButton
              color="secondary"
              className="heading"
              onClick={() => setModal1(false)}
            >
              Cancel
            </CustomButton>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
