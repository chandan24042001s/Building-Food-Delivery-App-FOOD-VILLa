import apple from "./../../assets/download-button-apple.webp";
import playstore from "./../../assets/download-button-playstore.webp";

const Footer = () => {
  return (
    <div id="footer">
      <div id="top">
        <div id="top-left">
          <h3>Foodiez</h3>
        </div>
        <div id="top-right">
          <div id="icon1">
            <i className="ri-home-fill"></i>India
          </div>
          <div id="icon2">
            <i className="ri-global-line"></i>English
          </div>
        </div>
      </div>
      <div id="bottom">
        <div id="first-section">
          <h3>ABOUT FOODIEZ</h3>
          <h4>Who We Are</h4>
          <h4>Blog</h4>
          <h4>Work With Us</h4>
          <h4>Investor Relations</h4>
          <h4>Report Fraud</h4>
          <h4>Press Kit</h4>
          <h4>Contact Us</h4>
        </div>
        <div id="second-section">
          <h3>FOODIEVERSE</h3>
          <h4>Foodiez</h4>
          <h4>Foodit</h4>
          <h4>Feeding India</h4>
          <h4>Hyperpure</h4>
          <h4>Foodieland</h4>
        </div>
        <div id="third-section">
          <div id="third-section-top">
            <h3>FOR RESTAURANTS</h3>
            <h4>Partner With Us</h4>
            <h4>Apps For You</h4>
          </div>
          <div id="third-section-bottom">
            <h3>FOR ENTERPRISES</h3>
            <h4>Foodiez For Enterprise</h4>
          </div>
        </div>
        <div id="fourth-section">
          <h3>LEARN MORE</h3>
          <h4>Privacy</h4>
          <h4>Security</h4>
          <h4>Terms</h4>
          <h4>Sitemap</h4>
        </div>
        <div id="fifth-section">
          <h3>SOCIAL LINKS</h3>
          <div id="fifth-section-top">
            <i className="ri-linkedin-box-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-youtube-line"></i>
            <i className="ri-facebook-circle-fill"></i>
          </div>
          <img src={apple} alt="" />
          <img src={playstore} alt="" />
        </div>
      </div>

      <div id="line"></div>
      <div id="terms">
        <h4>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Foodiez™ Ltd. All
          rights reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;