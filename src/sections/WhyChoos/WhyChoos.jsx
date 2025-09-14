import React from 'react';
import './WhyChoos.css';
import ShinyText from '../../../components/ShinyText/ShinyText';    
export default function WhyChoos() {
  return (
    <section className="why why-choose">
      <div className="why-choose__container">
        <div className="section-header">
          <h2 className="section-title">
       
            <ShinyText 
            text="Why Choose 90 Nutrition?"
            speed={3}
            className='shiny-heading'
            />

          
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="why-choose__content">
          <div className="why-choose__item top">
            <div className="why-choose__icon">🏭</div>
            <h3 className="why-choose__title">UK-Based Quality</h3>
            <p className="why-choose__description">
              Manufactured under the highest standards of safety and compliance.
            </p>
          </div>

          <div className="why-choose__item top">
            <div className="why-choose__icon">🔬</div>
            <h3 className="why-choose__title">Science-Driven Formulas</h3>
            <p className="why-choose__description">
              Backed by research to support peak performance and recovery.
            </p>
          </div>

          <div className="why-choose__item top">
            <div className="why-choose__icon">🏆</div>
            <h3 className="why-choose__title">Trusted by Athletes & Everyday Heroes</h3>
            <p className="why-choose__description">
              Whether you're a professional or just starting your fitness journey, our supplements are built for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
