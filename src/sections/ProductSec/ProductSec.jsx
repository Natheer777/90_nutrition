import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductSec.css';
import ShinyText from '../../../components/ShinyText/ShinyText';
export default function ProductSec() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://90nutrition-uk.com/api/get_all_products.php");
                let productsData = [];

                if (Array.isArray(response.data)) {
                    productsData = response.data;
                } else if (response.data && Array.isArray(response.data.data)) {
                    productsData = response.data.data;
                } else if (typeof response.data === 'object' && response.data !== null) {
                    productsData = [response.data];
                }

                setProducts(productsData);
                (false);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);



    return (
        <section className="ProductSec products-section container">
            <div className="container">
                <h1 className="section-title mt-5">
                    <ShinyText
                        text="Our Products"
                        speed={3}
                        className='shiny-heading'
                    />
                </h1>
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.p_id} className="product-card">
                            <div className="product-link">
                                <div className="product-image-container">
                                    {product.images && product.images[0] && (
                                        <img
                                            src={product.images[0]}
                                            alt={product.pname || 'Product'}
                                            className="product-image"
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{(product.pname || 'Product Name').replace(/-/g, ' ')}</h3>

                                    {/* <div className="product-price">
                                        {product.price ? `$${parseFloat(product.price).toFixed(2)}` : 'Price not available'}
                                    </div> */}
                                    <a href={product.const_QrCode} target="_blank" rel="noreferrer" className="view-details-btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
