import React, { useEffect, useRef, useState } from 'react';
import {SplitText , TextType} from '../../../components/index';
import CountUp from 'react-countup';
import './AboutUs.css';

const stats = [
  { number: 10000, suffix: '+', label: 'Happy Clients' },
  { number: 15, suffix: '+', label: 'Years Experience' },
  { number: 50, suffix: '+', label: 'Experts' }
];

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const currentRef = statsRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible to prevent resets
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { 
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px' // Trigger when element is 50px from bottom of viewport
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
    return (
        <section className="about about-us-section">
            <div className="about-container">
                <div className="section-header">
                    <h2 className="section-title">
                        <SplitText
                            text="About Us"
                            className="title-text"
                            delay={300}
                            duration={0.9}
                            ease="power3.out"
                            splitType="words"
                            from={{ opacity: 0, y: 20 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-50px"
                        />
                    </h2>
                    <div className="section-divider"></div>
                </div>
                
                <div className="about-content">
                    <div className="about-text">
                        <p className="lead-text">
                        <TextType 
                text={[" Empowering your health journey with science-backed nutrition and personalized wellness solutions."]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
                        </p>
                        <p className="description hidden">
                            At 90 Nutrition, we believe that optimal health begins with proper nutrition. Our team of certified nutritionists and health experts are dedicated to helping you achieve your wellness goals through personalized meal plans, expert guidance, and sustainable lifestyle changes.
                        </p>
                        <div className="stats-container" ref={statsRef}>
                          {stats.map((stat, index) => (
                            <div className="stat-item" key={index}>
                              <span className="stat-number">
                                {isVisible && (
                                  <CountUp
                                    end={stat.number}
                                    duration={2.5}
                                    separator=","
                                    suffix={stat.suffix}
                                  />
                                )}
                                {!isVisible && `0${stat.suffix}`}
                              </span>
                              <span className="stat-label">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                    </div>
    
                </div>
                
    
            </div>
            <div className="marquee-container  mb-4">
        <div className="marquee-text">
          <ul>
            <li>
              <span>
              </span>{" "}
              90-Nutrition
            </li>
            <li>
              <span>
              </span>{" "}
              90-Nutrition
            </li>
            <li>
              <span>
              </span>{" "}
              90-Nutrition
            </li>
            <li>
              <span>
              </span>{" "}
              90-Nutrition
            </li>
            <li>
              <span>
              </span>{" "}
              90-Nutrition
            </li>
            <li>
              <span>
              </span>{" "}
              90-Nutrition
            </li>
          </ul>
        </div>
      </div>
        </section>
    )
}
