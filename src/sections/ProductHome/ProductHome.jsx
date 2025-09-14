import './ProductHome.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
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
      <div className="ProductHome OUR_INJECTABLES mb-4 mt-5">
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
            <div className="products-swiper">
              <div className="swiper-wrapper">
                {data.map((product, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="product-card">
                      <a href={`/product/${product.p_id || product.id}`} className="product-link">
                        <div className="product-image-container">
                          <img
                            src={product.images && product.images[0] 
                              ? product.images[0] 
                              : `https://90nutrition-uk.com/admin/${product.image || ''}`}
                            alt={product.pname || product.name || 'Product'}
                            className="product-image"
                            loading="lazy"
                          />
                        </div>
                        <div className="product-info">
                          <h3 className="product-name text-center">{product.pname || product.name}</h3>
                          {/* {product.price && (
                            <div className="product-price">
                              {product.price} {product.currency || 'SAR'}
                            </div>
                          )} */}
                          <a href={product.const_QrCode} target="_blank" rel="noreferrer" className="view-details-btn">View Details</a>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
