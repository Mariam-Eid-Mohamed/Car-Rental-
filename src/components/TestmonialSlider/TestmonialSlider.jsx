import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import styles from "./testonialslider.module.css";
//section 6
import BackgroundS6 from "../../assets/images/landing-page/sec-6/bg-sec6.png";
import FirstImgSec6 from "../../assets/images/landing-page/sec-6/girl.png";
import SecondImgSec6 from "../../assets/images/landing-page/sec-6/boy.png";

const testimonials = [
  {
    name: "Charlie Johnson",
    rating: 5.5,
    image: SecondImgSec6,
    text: "I feel very secure when using caretall's services.",
    updated: "Last updated 3 mins ago",
  },
  {
    name: "Sarah Smith",
    rating: 5.5,
    image: FirstImgSec6,
    text: "Excellent service and very friendly staff.",
    updated: "Last updated 5 mins ago",
  },
  {
    name: "Charlie Johnson",
    rating: 5.5,
    image: SecondImgSec6,
    text: "I feel very secure when using caretall's services.",
    updated: "Last updated 3 mins ago",
  },
  {
    name: "Sarah Smith",
    rating: 5.5,
    image: FirstImgSec6,
    text: "Excellent service and very friendly staff.",
    updated: "Last updated 5 mins ago",
  },
];

export default function TestmonialSlider() {
  return (
    <section className="section-5 py-5 bg-light">
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h5 className="text-uppercase text-primary text-center bg-light rounded px-4 py-2 shadow-sm">
            testimonials
          </h5>
          <h1 className={`${styles.homeHeading} my-5 text-center`}>
            what people say about us?
          </h1>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="row ">
                <div className="col-lg-6 w-100">
                  <div className="card shadow-sm  w-100">
                    <div className="d-flex align-items-center gap-2 ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`${styles.testmonialSliderImg} rounded w-50 img-fluid`}
                      />

                      <div className="d-flex flex-column">
                        <h4 className="mb-0">
                          {item.rating}
                          <small className="text-muted">stars</small>
                        </h4>
                        <div className="text-warning mb-2">
                          {"★".repeat(Math.floor(item.rating))}
                        </div>
                        <p className="mt-3">{item.text}</p>
                        <p className="fw-semibold mb-0">{item.name}</p>
                        <p className="text-muted small">{item.updated}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
