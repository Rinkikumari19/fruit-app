import React, { useState } from "../hooks/CusModules";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "../shared/CustomButton";
import { Box } from "../hooks/CusMaterialComponents";
import { SignIn } from "./SignIn";
import CustomInput from "../shared/CusInput";
import { AddCard } from "./AddCard";

export default function Navbar({ updateData }) {
  const [openCard, setOpenCard] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

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
        <Box id="input-width">
          <CustomInput
            type="text"
            className="navbar-input"
            placeholder="Search"
            // name="search"
            // value={search}
            onChange={(e) => updateData(e.target.value)}
          />
        </Box>
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

      <SignIn {...{ modal1, setModal1, loginFunc, modal2 }} />
      {openCard && <AddCard {...{ openCard, setOpenCard }} />}
    </Box>
  );
}
