import React from 'react';
import '../Asserts/Styles/Footer.css';

import fb from '../Asserts/Images/facebook.png';
import insta from '../Asserts/Images/insta.png';
import twitter from '../Asserts/Images/twitter.png';
const Footer=()=>{
    return(
        <div className="footer">
<div className="sb_footer section_padding">
    <div className="sb__footer-links">
        <div className="sb__footer-links_div">
            <h4>For Bussiness</h4>
            <a href="/employer">
                <p>Employer</p>
            </a>
            <a href="/healthplan">
                <p>Health Plan</p>
            </a>
            <a href="/individual">
                <p>Individual</p>
            </a>
        </div>
        <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/resource">
                <p>Resource center</p>
            </a>
            <a href="/healthplan">
                <p>Testimonials</p>
            </a>
            <a href="/individual">
                <p>STV</p>
                </a>
    </div><div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/employer">
                <p>Swing Tech</p>
            </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
                <p>About</p>
            </a>
            <a href="/press">
                <p>Press</p>
            </a>
            <a href="/career">
                <p>Career</p>
                </a>
            <a href="/contact">
                <p>Contact</p>
                </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            
            <div className="socialmedia">
                                <a href="https://www.facebook.com"><p><img src={fb} alt=""/></p></a>
                                <a href="https://www.twitter.com/?lang-en-in"><p><img src={twitter} alt=""/></p></a>
                                <a href="https://www.instagram.com/?hl-en"><p><img src={insta} alt=""/></p></a>
                           
            </div>
          </div>
</div>
<hr></hr>
<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
    </div>
    <div className="sb__footer-below-links">
        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
        <a href="/privacy"><div><p>Privacy</p></div></a>
        <a href="/security"><div><p>Security</p></div></a>
        <a href="/cookie"><div><p>Cookie  Declaration</p></div></a>
    </div>
</div>
        </div>
        </div>
        
    )
}
export default Footer;