import './Comments.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ShinyText from '../../../components/ShinyText/ShinyText';
export default function Comments() {
  return (
    <div className="comment-section container mt-4">
      <div className="text-center">
        <h1 className="section-heading">
        <ShinyText 
            text="Our Testimonials"
            speed={3}
            className='shiny-heading'
            />
        </h1>
      </div>

      <div className="card-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'custom-bullet-active'
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="testimonial-swiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {[
            {
              id: 1,
              img: "https://randomuser.me/api/portraits/men/10.jpg",
              comment: "90-Nutrition's protein supplements have completely transformed my fitness journey. The quality is unmatched and I've seen incredible results in my muscle",
              name: "James Wilson",
            },
            {
              id: 2,
              img: "https://randomuser.me/api/portraits/women/43.jpg",
              comment: "As a professional athlete, I trust 90-Nutrition for clean, effective supplements. Their pre-workout formula gives me the perfect energy boost without any crashes.",
              name: "Emma Thompson",
            },
            {
              id: 3,
              img: "https://randomuser.me/api/portraits/men/30.jpg",
              comment: "The weight gainer from 90-Nutrition helped me achieve my bulking goals with clean, quality nutrition. The best UK supplement brand I've tried!",
              name: "David Miller",
            }
            
          ].map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="comment-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="comment-content">
                  <p className="user-comment">
                    {testimonial.comment}
                  </p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                  <div className="user-info">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="user-img"
                    />
                    <div className="user-details">
                      <h4 className="user-name">{testimonial.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
