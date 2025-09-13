import './ProductHome.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ShinyText from '../../../components/ShinyText/ShinyText';

export default function ProductHome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://90nutrition-uk.com/api/get_all_products.php");
        let products = [];
        
        if (Array.isArray(response.data)) {
          products = response.data;
        } else if (response.data && Array.isArray(response.data.data)) {
          products = response.data.data;
        } else if (typeof response.data === 'object' && response.data !== null) {
          products = [response.data];
        }
        
        setData(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setData([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="OUR_INJECTABLES">
        <div className="borderOur">
          <h5>CHECK OUT!</h5>
          <ul>
            <li>
              <ShinyText
                text="OUR Products"
                speed={3}
                className='shiny-heading'
              />
            </li>
          </ul>
        </div>
        <div className="ProductsInjec container">
          <div className="All_Product">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={false}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                480: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                }
              }}
              className="products-swiper"
              watchSlidesProgress={true}
              watchOverflow={true}
            >
              {data && data.length > 0 ? data.map((item) => (
                <SwiperSlide key={item.p_id}>
                  <div className="All_Product_items">
                    <div className="product-card p-4 shadow-sm">
                      <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="product-images-swiper"
                      >
                        {(Array.isArray(item.images) ? item.images : []).map((img, idx) => (
                          img && (
                            <SwiperSlide key={`${item.p_id}-img-${idx}`}>
                              <div className="product-image-container">
                                <img
                                  loading="lazy"
                                  src={img}
                                  alt={`${item.pname} ${idx + 1}`}
                                  className="product-image"
                                />
                              </div>
                            </SwiperSlide>
                          )
                        ))}
                      </Swiper>
                      <h2 className="mt-3">{item.pname || 'Product Name'}</h2>
                      <div className="product-details">
                        <p><strong>Price:</strong> {item.price ? `£${item.price}` : 'Price not available'}</p>
                        {item.protein && <p><strong>Protein:</strong> {item.protein}g</p>}
                        {item.flavors && item.flavors[0] && (
                          <p><strong>Flavors:</strong> {item.flavors.filter(Boolean).join(', ')}</p>
                        )}
                      </div>
                      <a
                        className="Link_Product"
                        href={item.const_QrCode || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              )) : null}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
