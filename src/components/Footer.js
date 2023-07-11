import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div>
          <h1>PackYourBags</h1>
          <p>Your Journey Our Responsibility</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-snapchat-square" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issuses</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">TroubleShooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms and Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
