import { Navbar , Header , Footer, AboutUs , ContactUs, Comments, WhyChoos, Verfiy_product, ProductHome} from "../../sections";
import  {BackgroundVideo}  from "../../../components/index";
export default function Home() {
  return (
    <>
    <Navbar />
    <BackgroundVideo />
    <Header />
    <AboutUs />
    <ProductHome />
    <WhyChoos />
    <Comments />
    <ContactUs />
    <Verfiy_product />
    <Footer />
    </>
  )
}
