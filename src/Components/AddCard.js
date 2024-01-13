import { React, useState } from "../hooks/CusModules";
import { Box } from "../hooks/CusMaterialComponents";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "../hooks/CusReactStrap";
import CustomButton from "../shared/CustomButton";
import CustomInput from "../shared/CusInput";
import { validation } from "../utils/validation";

export const AddCard = ({ openCard, setOpenCard }) => {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    amount: "",
    quantity: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
    const tempErr = { ...errors };
    const currentErr = validation(name, value);
    tempErr[name] = currentErr;
    setErrors(tempErr);
  };

  const handleSubmit = () => {
    setOpenCard(false);
    setProductDetails({});
  };

  const handleRemove = () => {
    setOpenCard(false);
    setProductDetails({});
  };

  return (
    <Box>
      <Modal
        isOpen={openCard}
        modalTransition={{ timeout: 1000 }}
        backdropTransition={{ timeout: 2000 }}
        toggle={() => setOpenCard(!openCard)}
      >
        <ModalHeader>Add your product</ModalHeader>
        <ModalBody>
          <Box>
            <h6>Product Name</h6>
            <CustomInput
              type={"text"}
              name="productName"
              className="navbar-input mb-3"
              placeholder="Enater product name"
              onChange={handleChange}
            />
            <ul className="input-errortext">
              {errors?.productName?.map((error, i) => {
                return <li key={i}>{error}</li>;
              })}
            </ul>
          </Box>

          <Box>
            <h6>Amount</h6>
            <CustomInput
              type={"text"}
              onChange={handleChange}
              name="amount"
              className="navbar-input mb-3"
              placeholder="Enter amount"
            />
            <ul className="input-errortext">
              {errors?.amount?.map((error, i) => {
                return <li key={i}>{error}</li>;
              })}
            </ul>
          </Box>
          <Box>
            <h6>Quantity</h6>
            <Box className="eye-icon">
              <CustomInput
                type={"text"}
                name="quantity"
                onChange={handleChange}
                className="navbar-input mb-3"
                placeholder="Enter quantity"
              />
              <ul className="input-errortext">
                {errors?.quantity?.map((error, i) => {
                  return <li key={i}>{error}</li>;
                })}
              </ul>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <CustomButton onClick={handleSubmit}>Submit</CustomButton>
          <CustomButton
            color="secondary"
            className="heading"
            onClick={handleRemove}
          >
            Cancel
          </CustomButton>
        </ModalFooter>
      </Modal>
    </Box>
  );
};
