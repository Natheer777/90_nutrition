import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/LOGO.svg";
import "./Footer.css";

const Footer = () => {
  const [contact, setContact] = useState(null);

 useEffect(() => {
  const fetchInfo = async () => {
    try {
      const res = await fetch("https://trx-laboratory.com/get_info.php");
      const json = await res.json();
      console.log("API response:", json); // Debug line
      if (json?.status === "success" && Array.isArray(json.data) && json.data.length > 0) {
        setContact(json.data[0]);
      }
    } catch (e) {
      console.error("Failed to load contact info", e);
    }
  };
  fetchInfo();
}, []);

  const phoneRaw = contact?.phone || "";
  const phoneDisplay = phoneRaw ? (phoneRaw.startsWith("+") ? phoneRaw : `+${phoneRaw}`) : "";
  const telHref = phoneDisplay ? `tel:${phoneDisplay}` : undefined;
  const email = contact?.email;
  const phoneDigits = phoneRaw.replace(/\D/g, "");
  const whatsappHref = phoneDigits ? `https://wa.me/${phoneDigits}` : "https://wa.me/";

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
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
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
                  <br /> {contact?.address || "Germany , Hamburg , Oostkamp"}
                </li>
                <li>
                  <a href={telHref || "#"} className="text-decoration-none" aria-disabled={!telHref}>
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ marginRight: "8px" }}
                    />
                   {phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={email ? `mailto:${email}` : "mailto:90nutrition-uk@gmail.com"}
                    className="text-decoration-none"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginRight: "8px" }}
                    />
                    {email}
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

