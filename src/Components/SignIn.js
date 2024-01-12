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
import { EyeIcon, EyeSlashIcon } from "../hooks/CusMaterialIcon";
import { validation } from "../utils/validation";

export const SignIn = ({ modal1, setModal1, loginFunc, modal2 }) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [passType, setPassType] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    const tempErr = { ...errors };
    const currentErr = validation(name, value);
    tempErr[name] = currentErr;
    setErrors(tempErr);
  };

  const handleSubmit = () => {
    console.log("userDetails", userDetails, errors);
    setUserDetails({});
    setModal1(false);
  };

  return (
    <Box>
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
            <Box>
              <h6>User Name</h6>
              <CustomInput
                type={"text"}
                name="username"
                className="navbar-input mb-3"
                placeholder="Username"
                onChange={handleChange}
                // value={userDetails.username}
              />
              <ul className="input-errortext">
                {errors?.username?.map((error, i) => {
                  return <li key={i}>{error}</li>;
                })}
              </ul>
            </Box>
          ) : (
            ""
          )}
          <Box>
            <h6>Email</h6>
            <CustomInput
              type={"email"}
              // value={userDetails.email}
              onChange={handleChange}
              name="email"
              className="navbar-input mb-3"
              placeholder="Email"
            />
            <ul className="input-errortext">
              {errors?.email?.map((error, i) => {
                return <li key={i}>{error}</li>;
              })}
            </ul>
            <br></br>
          </Box>
          <Box>
            <h6>Password</h6>
            <Box className="eye-icon">
              <CustomInput
                type={passType ? "text" : "password"}
                name="password"
                // value={userDetails.password}
                onChange={handleChange}
                className="navbar-input mb-3"
                placeholder="Password"
              />

              {passType ? (
                <EyeIcon onClick={() => setPassType(!passType)} />
              ) : (
                <EyeSlashIcon onClick={() => setPassType(!passType)} />
              )}

              <ul className="input-errortext">
                {errors?.password?.map((error, i) => {
                  return <li key={i}>{error}</li>;
                })}
              </ul>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <CustomButton onClick={handleSubmit}>
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
    </Box>
  );
};
