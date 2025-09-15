import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { useEffect } from "react";
import { Contact, Home, Products, Product } from "./pages/index";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

// Import Font Awesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add icons to the library
// library.add(faWhatsapp);
 
function App() {
    useEffect(() => {
    setInterval(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });

      const Elements = document.querySelectorAll(".left ,.right ,.top ,.hidden");
      Elements.forEach((el) => observer.observe(el));

      return () => {
        Elements.forEach((el) => observer.unobserve(el));
      };
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/:productName" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        {/* <WhatsAppButton /> */}
      </Router>
    </>
  );
}

export default App;
