import { useState } from "../hooks/CusModules";
import { CallIcon, AlarmIcon, LocationIconC } from "../hooks/CusMaterialIcon";
import CustomInput from "../shared/CusInput";
import CustomButton from "../shared/CustomButton";
import CustomTypography from "../shared/CusTypography";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    console.log("data", data);
  };

  return (
    <>
      <div className="home-div">
        <div className="contact-head">
          <LocationIconC className="contact-icon" />
          <u>
            <h5>STORE LOCATOR</h5>
          </u>
        </div>
        <div className="cantact-div">
          <div className="sub-contact">
            <CallIcon className="contact-icon" />
            <h5>LET’S HAVE A CHAT!</h5>
            <p className="contact-p">Phone: +91-87663XXXXX</p>
            <CustomTypography className="contact-email">
              Email Address: dummy@gmail.com
            </CustomTypography>
            <div>
              <CustomInput
                type="text"
                className="navbar-input mb-3 contact-input"
                placeholder="Your Name"
                name="name"
                onChange={handleChange}
              />
              <br />
              <CustomInput
                type="email"
                className="navbar-input mb-3 contact-input"
                placeholder="Your Email"
                name="email"
                onChange={handleChange}
              />
              <br />
              <CustomInput
                type="text"
                className="navbar-input mb-3 contact-input"
                placeholder="Your Phone"
                name="phone_number"
                onChange={handleChange}
              />
              <br />
            </div>
          </div>
          <div className="sub-contact">
            <AlarmIcon className="contact-icon" />
            <h5>STORE TIME</h5>
            <p className="contact-p">7 Days a week</p>
            <p>from 8 AM to 9 PM</p>
            <div>
              <textarea
                type="text"
                className="navbar-input mb-3 contact-input"
                style={{ height: "167px" }}
                placeholder="Your Message"
                name="message"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <CustomButton
            color="secondary"
            className="navbar-btn heading contact-btn"
            onClick={handleSubmit}
          >
            Send Message
          </CustomButton>
        </div>
      </div>
    </>
  );
}
