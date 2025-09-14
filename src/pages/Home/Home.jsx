import { Navbar , Header , Footer, AboutUs , ContactUs, Comments, WhyChoos, Verfiy_product, ProductHome, NewArrivals, FooterB} from "../../sections";
import  {BackgroundVideo}  from "../../../components/index";
export default function Home() {
  return (
    <>
    <Navbar />
    <BackgroundVideo />
    {/* <Header /> */}
    <AboutUs />
    <ProductHome />
    <NewArrivals />
    <WhyChoos />
    <Comments />
    <ContactUs />
    <Verfiy_product />
    <FooterB />
    {/* <Footer /> */}
    </>
  )
}
