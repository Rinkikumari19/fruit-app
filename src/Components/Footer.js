import { React } from "../hooks/CusModules";
import CustomInput from "../shared/CusInput";
import CustomButton from "../shared/CustomButton";
import { socialMediaLinks, detailHeader, footerHeader } from "../utils/common";
import { useWidth } from "../hooks/use-width";

export default function Footer() {
  const { width } = useWidth();

  return (
    <>
      <div className="footer-div">
        <div className="footer-items">
          <div>
            <h2 className="fresh-fruit-footer" style={{ color: "#1957a8" }}>
              Fresh Fruits
            </h2>
            {detailHeader.map((socialMedia, index) => (
              <h4 key={index}>
                {socialMedia.icon}
                {socialMedia.name}
              </h4>
            ))}
          </div>

          {footerHeader.map((ele, i) => (
            <div key={i} className="footer-content">
              <h4>{ele.section}</h4>
              {ele.content.map((ele, index) => (
                <p key={index}>{ele}</p>
              ))}
            </div>
          ))}
          <div className="footer-content">
            <h4>SOCIAL</h4>
            {socialMediaLinks.map((socialMedia, index) => (
              <p key={index}>
                {socialMedia.icon}
                {width<= 768 ? null : socialMedia.name}
              </p>
            ))}
          </div>
        </div>
        <div id="input-width" className="subs-btn">
          <CustomInput
            type="text"
            className="navbar-input"
            placeholder="Email"
          />
          <CustomButton
            className="heading"
            style={{
              position: "relative",
              right: "7px",
              textTransform: "capitalize",
            }}
          >
            Subscribe
          </CustomButton>
        </div>
      </div>
      <div className="heading" style={{ padding: "15px" }}>
        <h5>@Copyright 2022 Built By Rinki Kumari</h5>
      </div>
    </>
  );
}
