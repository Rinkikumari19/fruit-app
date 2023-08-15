import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import AddCallIcon from "@material-ui/icons/AddIcCall";
import EmailIcon from "@material-ui/icons/Email";
import LocationIcon from "@material-ui/icons/LocationOn";
import CustomButton from "../shared/CustomButton";

export default function Footer() {
    return (
        <>
            <div className="footer-div">
                <div className="footer-items">
                    <div>
                        <h2 className="fresh-fruit-footer" style={{ color: "#1957a8" }}>Fresh Fruits</h2>
                        <h4>
                            <AddCallIcon />
                            +91 8766386596
                        </h4>
                        <h4>
                            <EmailIcon />
                            rinki19@navgurukul.org
                        </h4>
                        <h4>
                            <LocationIcon />
                            11/439 Kalyanpuri, Delhi-91
                        </h4>
                    </div>
                    <div>
                        <h4>ABOUT</h4>
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Corporate Information</p>
                    </div>
                    <div>
                        <h4>HELP</h4>
                        <p>Payments</p>
                        <p>Shipping</p>
                        <p>Cancellation and Returns</p>
                        <p>FAQ</p>
                        <p>Report Infringement</p>
                    </div>
                    <div>
                        <h4>POLICY</h4>
                        <p>Return Policy</p>
                        <p>Terms of Use</p>
                        <p>Security</p>
                        <p>Privacy</p>
                        <p>Sitemap</p>
                    </div>
                    <div>
                        <h4>SOCIAL</h4>
                        <p>
                            <FacebookIcon />
                            Facebook
                        </p>
                        <p>
                            <TwitterIcon />
                            Twitter
                        </p>
                        <p>
                            <YouTubeIcon />
                            YouTube
                        </p>
                        <p>
                            <LinkedInIcon />
                            Linkedin
                        </p>
                        <p>
                            <InstagramIcon />
                            Instagram
                        </p>
                    </div>
                </div>
                <div id='input-width' className="subs-btn">
                    <input type='text' className="navbar-input" placeholder='Email' />
                    <CustomButton className="heading" style={{ position: "relative", right: "23px" }}>Subscribe</CustomButton>
                </div>
            </div>
            <div className="heading" style={{ padding: "15px" }}>
                <h5>@Copyright 2022 Built By Rinki Kumari</h5>
            </div>
        </>
    );
}
