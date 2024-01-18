import React, { useState } from "../hooks/CusModules";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "../shared/CustomButton";
import { Box } from "../hooks/CusMaterialComponents";
import { SignIn } from "./SignIn";
import CustomInput from "../shared/CusInput";
import { AddCard } from "./AddCard";
import { useWidth } from "../hooks/use-width";
import { CloseBar, MenuBar } from "../hooks/CusMaterialIcon";

export default function Navbar({ updateData, updateMenuOpen, menuOpen }) {
  const [openCard, setOpenCard] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const { width } = useWidth();

  function loginFunc() {
    setModal1(true);
    setModal2(!modal2);
  }

  return (
    <Box className="main-navbar">
      <Box className="navbar-items navbar-padding">
        <Box className="nav-div">
          <img
            src="https://image.freepik.com/free-vector/fresh-fruit-logo-design-mascot_157713-4.jpg"
            alt=""
            className="fruit-logo"
          />
          <h2 className="fresh-fruit">Fresh Fruits</h2>
        </Box>
        {width <= 768 ? null : (
          <Box id="input-width">
            <CustomInput
              type="text"
              className="navbar-input"
              placeholder="Search"
              onChange={(e) => updateData(e.target.value)}
            />
          </Box>
        )}

        <Box>
          <CustomButton onClick={() => setModal1(true)}>Login</CustomButton>
          <CustomButton
            className="navbar-btn"
            onClick={() => setOpenCard(true)}
          >
            Add Fruit
          </CustomButton>
        </Box>
      </Box>
      {console.log("window.location.href", window.location.href)}
      {width <= 768 ? (
        <Box className="d-flex jc-sa">
          {menuOpen ? (
            <CloseBar
              className="menu-icon"
              onClick={() => updateMenuOpen(!menuOpen)}
            />
          ) : (
            <MenuBar
              className="menu-icon"
              onClick={() => updateMenuOpen(!menuOpen)}
            />
          )}

          <Box id="input-width">
            <CustomInput
              type="text"
              className="navbar-input"
              placeholder="Search"
              onChange={(e) => updateData(e.target.value)}
            />
          </Box>
        </Box>
      ) : null}

      <SignIn {...{ modal1, setModal1, loginFunc, modal2 }} />
      {openCard && <AddCard {...{ openCard, setOpenCard }} />}
    </Box>
  );
}
