import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Details_Product.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import flaivorOne from '../../assets/flaivor/cookis=bnana.png'
import flaivortow from '../../assets/flaivor/mango+waterm.png'
import flaivorthee from '../../assets/flaivor/mix frute.png'
import flaivorfour from '../../assets/flaivor/pinapple.png'
import flaivorfive from '../../assets/flaivor/shani.png'
import flaivorsix from '../../assets/flaivor/watermelon.png'
import preImg1 from '../../assets/PrePlus/Asset 6@8x.png'
import preImg2 from '../../assets/PrePlus/Asset 7@8x.png'
import preImg3 from '../../assets/PrePlus/Asset 8@8x.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Details_product() {
  const { productName } = useParams();

  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.post(
          "https://90nutrition-uk.com/api/get_product_by_name.php",
          {
            name: productName,
          }
        );
        if (res.data.status === "success") {
          setProductData(res.data.data[0]);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!productData) return <p>No product data available.</p>;

  const {
    pname,
    description,
    how_to_use,
    warnings,
    weight,
    // price,
    bg_img,
    num_of_serving,
    num_of_scope,
    // flavors,
    // const_QrCode,
    images,
  } = productData;

  // Handle description display
  const descriptionText = description || '';
  const shortDescription = descriptionText.length > 100 
    ? `${descriptionText.substring(0, 100)}...` 
    : descriptionText;
  const fullDescription = descriptionText;

  const getFlavorIconAndClass = (flavor) => {
    const name = flavor.toLowerCase();

    if (name.includes("cookies") || name.includes("banana")) {
      return {
        icon: <img src={flaivorOne} alt="Cookies & Banana" className="flavor-image" />,
        className: "flavor-cookies-banana",
      };
    }

    if (name.includes("mango") && name.includes("watermelon")) {
      return {
        icon: <img src={flaivortow} alt="Mango & Watermelon" className="flavor-image" />,
        className: "flavor-mango-watermelon",
      };
    }

    if (name.includes("mix fruit")) {
      return {
        icon: <img src={flaivorthee} alt="Mix Fruit" className="flavor-image" />,
        className: "flavor-mix-fruit",
      };
    }

    if (name.includes("pineapple")) {
      return {
        icon: <img src={flaivorfour} alt="Pineapple" className="flavor-image" />,
        className: "flavor-pineapple",
      };
    }

    if (name.includes("shani")) {
      return {
        icon: <img src={flaivorfive} alt="Shani" className="flavor-image" />,
        className: "flavor-shani",
      };
    }

    if (name.includes("watermelon")) {
      return {
        icon: <img src={flaivorsix} alt="Watermelon" className="flavor-image" />,
        className: "flavor-watermelon",
      };
    }

    return {
      icon: null,
      className: "",
    };
  };

  const productImages = Array.isArray(images)
    ? images.filter((url) => url && url.trim() !== "")
    : [];

  const digitEntries = Object.entries(productData.digit || {});

  function roundNumber(value) {
    const num = Number(value);
    if (isNaN(num)) return value;
    return Math.round(num);
  }

  const units = {
    carbs: "g",     // جرام
    calories: "kcal",
    fat: "g",
    eaa: "g",
    neaa: "g",
    sugars: "g",
    protein: "g",
    eaas:"g"
  };

  // صور منتج PRE-PLUS
  const prePlusImages = [preImg1, preImg2, preImg3];

  // التحقق من اسم المنتج
  const isPrePlusProduct = pname?.toUpperCase() === "PRE-PLUS";

  return (
    <>
      <div
        className="BackgroundImage"
        style={{
          backgroundImage: `url(${productData.bg_img})`,
        }}
      ></div>
      <div className="details swiper_product mb-5 container">
        <div className="Swiper_Conent">
          <div className="container">
            <div className="row">
              <div className="Swiper left col-xl-6 col-lg-6">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {productImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`${img}?w=800&h=600&c_fit&f_auto,q_auto`}
                        alt="product"
                        loading="lazy"
                        width={800}
                        height={600}
                        style={{
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                        className="swiper-product-image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="details_product">
                  <h1 className="text-xl font-bold mb-2">
                    {pname.replace(/-/g, " ")}
                  </h1>
                  <div className="product-description">
                    <div style={{ whiteSpace: "pre-wrap" }}>
                      <span className="how_use">Description :</span>{" "}
                      {showFullDescription ? fullDescription : shortDescription}
                    </div>

                    {fullDescription.length > 100 && (
                      <button
                        onClick={() => setShowFullDescription((prev) => !prev)}
                        className="btn btn-link p-0 mt-2"
                        style={{
                          fontSize: "18px",
                          color: "#FFFFFF",
                          cursor: "pointer",
                          display: "block"
                        }}
                      >
                        {showFullDescription ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </div>

                  <p className="right">
                    <span className="how_use">How to use :</span> {how_to_use}
                  </p>
                  <p className="right">
                    <span className="warning">Warnings :</span> {warnings}
                  </p>

                  <div className="product-properties">
                    <ul>
                      <li className="left">
                        <strong>{weight}</strong>
                      </li>
                      <li className="right">
                        <strong>{num_of_serving}</strong>
                      </li>
                      <li className="left">
                        <strong>{num_of_scope}</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="product-flavors">
                    <div className="product-flavors">
                      <div className="flavor-list">
                        {productData.flavors
                          .filter((flavor) => flavor && flavor.trim() !== "")
                          .map((flavor, index) => {
                            const { icon, className } =
                              getFlavorIconAndClass(flavor);
                            return (
                              <div
                                key={index}
                                className={`flavor-item ${className}`}
                              >
                                <span className="flavor-icon">{icon}</span>
                                <span className="flavor-name">{flavor}</span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="proprties_product mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-l-6 d-flex align-items-center">
              <ul>
                {isPrePlusProduct ? (
                  // عرض صور PRE-PLUS
                  prePlusImages.map((img, index) => (
                    <li key={index}>
                      <p className={`left proprties_product_${index + 1}`}>
                        <img 
                          src={img} 
                          alt={`PRE-PLUS Feature ${index + 1}`}
                          style={{
                            maxWidth: "60%",
                            height: "auto",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          }}
                        />
                      </p>
                    </li>
                  ))
                ) : (
                  // عرض القيم الرقمية للمنتجات الأخرى
                  digitEntries.map(([key, value], index) => (
                    <li key={key}>
                      <p className={`left proprties_product_${index + 1}`}>
                        {key} : <strong>{roundNumber(value)}{units[key.toLowerCase()] || ""}</strong>
                        {pname === "CREA-PURE" && productData.notes && (
                          <span className="notes">
                            {productData.notes}
                          </span>
                        )}
                      </p>
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className="col-xl-6 col-l-6 d-flex justify-content-center align-items-center">
              {productData.vid_url ? (
                <video
                  src={productData.vid_url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    maxWidth: "30rem",
                    maxHeight: "380px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <p>No product video available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}