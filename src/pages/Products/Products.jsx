import {Footer, Header_Product, Verfiy_product, Details_Product, ProductSec} from "../../sections";
import Logo from "../../assets/LOGO.svg";
import { BackgroundVideo, DigitRain } from "../../../components";
export default function Products() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg pb-4">
          <div className="container container-fluid">
            <a className="navbar-brand hidden" href="#">
              <img src={Logo} alt="" />
            </a>        
          </div>
        </nav>
      </div>

    {/* <Header_Product /> */}
    <Details_Product />
    <DigitRain />
    <BackgroundVideo />
    <Verfiy_product />
    <Footer />
    </>
  )
}
