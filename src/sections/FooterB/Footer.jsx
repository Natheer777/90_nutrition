import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,

} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/LOGO.svg";
import "./Footer.css";

const Footer = () => {
 
 


  return (
    <footer className="footer">
      <div className="footer-top">
        <Container>
          <Row className="justify-content-evenly">
            <Col lg={4} md={6} className="footer-about">
              <div className="footer-logo">
                <img src={logo} alt="Logo" />
              </div>
              <p>
                90-Nutrition is your premier destination for premium sports nutrition and supplements,
                offering high-quality products to fuel your fitness journey and support your health goals.
              </p>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/share/1Ae4XXohz2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a
                  href="https://www.instagram.com/90nutrition_uk?igsh=MTU3ZzJ0MThvNG00bQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>


              </div>
            </Col>

            <Col lg={2} md={6} className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li><Link to="/products">Products</Link></li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>


              </ul>
            </Col>



            <Col lg={4} md={6} className="footer-contact">
              <h4>Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ marginRight: "8px" }}
                  />
                  Address
                  <br /> 8a Pop in Business centre, South Way
                  Wembley, United Kingdom, HA9 OHF
                </li>
               
                <li>
                  <a
                    href="mailto:support@90nutrition-uk.com"
                    className="text-decoration-none"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginRight: "8px" }}
                    />
                 support@90nutrition-uk.com
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md={12}>
              <div className="copyright">
                &copy; {new Date().getFullYear()} 90 Nutrition. All Rights
                Reserved.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

