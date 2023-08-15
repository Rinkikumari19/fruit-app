import AddCallIcon from "@material-ui/icons/AddIcCall";
import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import LocationIcon from "@material-ui/icons/LocationOn";
import CustomButton from "../shared/CustomButton";

export default function Contact() {
    return (
        <>
            <div className="home-div">
                <div className="contact-head">
                    <LocationIcon className="contact-icon" />
                    <u><h5>STORE LOCATOR</h5></u>
                </div>
                <div className="cantact-div">
                    <div className="sub-contact">
                        <AddCallIcon className="contact-icon" />
                        <h5>LET’S HAVE A CHAT!</h5>
                        <p className="contact-p">Phone: +91-8766386596</p>
                        <p>Email Address: rinki19@navgurukul.org</p>
                        <div>
                            <input type='text' className='navbar-input mb-3 contact-input' placeholder='Your Name' /><br />
                            <input type='text' className='navbar-input mb-3 contact-input' placeholder='Your Email' /><br />
                            <input type='text' className='navbar-input mb-3 contact-input' placeholder='Your Phone' /><br />
                        </div>
                    </div>
                    <div className="sub-contact">
                        <AddAlarmIcon className="contact-icon" />
                        <h5>STORE TIME</h5>
                        <p className="contact-p">7 Days a week</p>
                        <p>from 8 AM to 9 PM</p>
                        <div>
                            <textarea type='text' className='navbar-input mb-3 contact-input' style={{ height: "167px" }} placeholder="Your Message" />
                        </div>
                    </div>
                </div>
                <div>
                    <CustomButton color="secondary" 
                    className="navbar-btn heading contact-btn"
                     >
                        Send Message
                    </CustomButton>
                </div>
            </div>
        </>
    )
}