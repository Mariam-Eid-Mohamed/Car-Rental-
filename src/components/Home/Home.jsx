import CarLandingImg from "../../assets/images/landing-page/car 2 1.png";
import CarFrame from "../../assets/images/landing-page/Frame.png";
import arrowIcon from "../../assets/images/card/arrow-right.png";
import locationImg from "../../assets/images/landing-page/location.png";
import calendarImg from "../../assets/images/landing-page/calender.png";
import carIconImg from "../../assets/images/landing-page/car-icon.png";
// slider images
import sliderImg1 from "../../assets/images/landing-page/volvo.png";
import sliderImg2 from "../../assets/images/landing-page/nissan.png";
import sliderImg3 from "../../assets/images/landing-page/jaguar.png";
import sliderImg4 from "../../assets/images/landing-page/ac.png";
import sliderImg5 from "../../assets/images/landing-page/audi.png";
//section 4 images
import CarImgS4 from "../../assets/images/landing-page/sec-4/Audi 1.png";

import messageImg from "../../assets/images/landing-page/sec-4/message.png";
import userImg from "../../assets/images/landing-page/sec-4/user.png";
import vectorImg from "../../assets/images/landing-page/sec-4/Vector.png";

//section7
import iphone14Img from "../../assets/images/landing-page/sec-7/iPhone-14.png";
import iosImg from "../../assets/images/landing-page/ios.png";
import androidImg from "../../assets/images/landing-page/andriod.png";
//section 6
import BackgroundS6 from "../../assets/images/landing-page/sec-6/bg-sec6.png";
import FirstImgSec6 from "../../assets/images/landing-page/sec-6/girl.png";
import SecondImgSec6 from "../../assets/images/landing-page/sec-6/boy.png";

import styles from "./home.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Car from "../Car/Car";
import TestmonialSlider from "../TestmonialSlider/TestmonialSlider";
function Home() {
  let [cars, setCars] = useState([]);
  let getCars = async () => {
    try {
      let response = await axios.get("https://myfakeapi.com/api/cars/");
      setCars(response?.data?.cars);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCars();
  }, []);

  // search functionality
  let [searchTerm, setSearchTerm] = useState("");
  let [filteredCars, setFilteredCars] = useState([]);

  const searchCarsByModel = (e) => {
    e.preventDefault();
    const matches = cars.filter((car) =>
      car.car_model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(matches.slice(0, 4));
  };
  return (
    <>
      <section className="vh-lg-100 section-1">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 p-0 d-flex flex-column justify-content-center align-items-center">
              <div className="home-header ">
                <h1 className={`${styles.homeHeading} mb-0`}>Find, book and</h1>

                <h1 className={`${styles.homeHeading} `}>rent a car</h1>
                <p className={`${styles.homeHeading} text-primary `}>Easily</p>
                <p className="text-secondary">
                  Get a car wherever and whenever you <br />
                  need it with your IOS and Android device.
                </p>
              </div>
            </div>
            <div className="col-lg-6  ">
              <div className={`w-100   position-relative `}>
                {/* Frame image overlay (on top) */}
                <img
                  src={CarFrame}
                  alt=""
                  className=" w-75 h-100 position-absolute top-0 end-0"
                />
                <div className="img-fluid w-100   ">
                  <img
                    src={CarLandingImg}
                    alt="porshe-car"
                    className={`w-100 mt-5 ${styles.homeCar}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2 ">
        <div className="container ">
          {/* searchbar */}
          <div className="searchbar   d-flex justify-content-center my-5 ">
            <form
              className="d-flex align-items-center  w-75"
              role="search"
              onSubmit={searchCarsByModel}
            >
              <div className="input-group">
                <span className="input-group-text bg-white border rounded ">
                  <i className="fa-solid fa-location-dot "></i>
                </span>

                <input
                  className="form-control "
                  type="search"
                  placeholder="Search by Model"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="d-flex  flex-column align-items-center">
            <h5 className=" text-uppercase text-primary text-center bg-light rounded px-4 py-2 shadow-sm ">
              popular rental deals
            </h5>
            <h1 className={`${styles.homeHeading} my-5 text-center`}>
              {" "}
              Most Popular Cars Rental Deals
            </h1>
          </div>
          <div className="row g-4">
            {(filteredCars.length > 0 ? filteredCars : cars.slice(0, 4)).map(
              (car) => (
                <Car carInfo={car} key={car.id} />
              )
            )}
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/cars" className=" my-2">
              <button className="btn btn-secondary btn-lg my-5">
                Show All Cars
                <img src={arrowIcon} alt="" className="ms-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="container">
          <div className="d-flex  flex-column align-items-center">
            <h5 className=" text-uppercase text-primary text-center bg-light rounded px-4 py-2 shadow-sm ">
              how it work
            </h5>
            <h1 className={`${styles.homeHeading} my-5 text-center`}>
              {" "}
              Rent with following 3 working steps
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="d-flex flex-column align-items-center   ">
                <div className="img-fluid d-flex justify-content-center ">
                  <img
                    src={locationImg}
                    alt=""
                    className={`${styles.bookingImg}`}
                  />
                </div>

                <h3 className="my-3">Choose Location</h3>
                <p className="fs-6 text-secondary">
                  Choose your and find your best car
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="d-flex flex-column align-items-center   ">
                <div className="img-fluid d-flex justify-content-center ">
                  <img
                    src={calendarImg}
                    alt=""
                    className={`${styles.bookingImg}`}
                  />
                </div>

                <h3 className="my-3">Pick-up date</h3>
                <p className="fs-6 text-secondary">
                  Select your pick up date and time to book your car
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="d-flex flex-column align-items-center   ">
                <div className="img-fluid d-flex justify-content-center ">
                  <img
                    src={carIconImg}
                    alt=""
                    className={`${styles.bookingImg}`}
                  />
                </div>

                <h3 className="my-3">Book your car</h3>
                <p className="fs-6 text-secondary">
                  Book your car and we will deliver it directly to you
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.scrollContainer} my-5`}>
            <div className={`${styles.scrollContent}`}>
              <img src={sliderImg1} alt="" />
              <img src={sliderImg2} alt="" />
              <img src={sliderImg3} alt="" />
              <img src={sliderImg4} alt="" />
              <img src={sliderImg5} alt="" />
              <img src={sliderImg1} alt="" />
              <img src={sliderImg2} alt="" />
              <img src={sliderImg3} alt="" />
              <img src={sliderImg4} alt="" />
              <img src={sliderImg5} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-4 vh-100  my-3
      "
      >
        <div className="container-fluid px-0  h-100  ">
          <div className="row g-0 d-flex h-100  ">
            <div className="col-lg-6 p-0    d-none d-lg-flex  position-relative h-100 ">
              <div className="d-flex flex-column justify-content-center">
                <div className=" d-flex flex-column justify-content-center align-items-center ">
                  {/* Frame image overlay (on top) */}
                  <img
                    src={vectorImg}
                    alt=""
                    className={`${styles.vectorImg} w-100 h-100 object-fit-cover position-absolute top-0
                   start-0`}
                  />
                  <div className="img-fluid w-100   ">
                    <img
                      src={CarImgS4}
                      alt="porshe-car"
                      className={`${styles.Car2Img} mt-5 w-100`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12   h-100  ">
              <div className="d-flex  flex-column h-100  align-items-center justify-content-center">
                <div className="p-3">
                  <div className="d-flex ">
                    <h5 className=" text-uppercase text-primary bg-light rounded px-2 shadow-sm ">
                      why choose us
                    </h5>
                  </div>
                  <h2 className={` my-3 text-capitalize`}>
                    We offer the best experience with our rental <br />
                    deals
                  </h2>
                </div>
                <div className="d-flex flex-column align-items-start   ">
                  <div className="d-flex  align-items-center p-3  mb-1">
                    <div className="img-fluid d-flex justify-content-center   me-3">
                      <img src={userImg} alt="" />
                    </div>

                    <div className="d-flex flex-column">
                      <h4 className="my-1">Best price guaranteed</h4>
                      <p className="fs-6 text-secondary">
                        Find a lower price? We’ll refund you 100% of the
                        difference.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex  align-items-center mb-1 p-3 ">
                    <div className="img-fluid d-flex justify-content-center me-3">
                      <img src={userImg} alt="" />
                    </div>
                    <div className="d-flex flex-column">
                      <h4 className="">24 hour car delivery</h4>
                      <p className="fs-6 text-secondary">
                        Book your car anytime and we will deliver it directly to
                        you.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex  align-items-center   mb-1 p-3 ">
                    <div className="img-fluid d-flex justify-content-center me-3 ">
                      <img src={messageImg} alt="" />
                    </div>

                    <div className="d-flex flex-column">
                      <h4 className=""> Best price guaranteed</h4>
                      <p className="fs-6 text-secondary">
                        Find a lower price? We’ll refund you 100% of the
                        difference.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex  align-items-center  p-3 ">
                    <div className="img-fluid d-flex justify-content-center me-3">
                      <img src={userImg} alt="" />
                    </div>
                    <div className="d-flex flex-column">
                      <h4 className="">24/7 technical support</h4>
                      <p className="fs-6 text-secondary">
                        Have a question? Contact Rentcars support any time when
                        you have problem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestmonialSlider />

      <section className="section-6 ">
        <div className="container mt-5">
          <div className="row ">
            <div className="col-lg-6 ">
              <h3>
                Download Rentcars App for
                <span className="text-primary"> FREE </span>
              </h3>
              <p className="fs-5">
                For faster, easier booking and exclusive deals.
              </p>
              <img src={androidImg} alt="" className="me-2 mb-3 " />
              <img src={iosImg} className="mb-3" />
              <form className="">
                <div className="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    id="name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-6 ">
              <div className="img-fluid d-none d-lg-flex justify-content-center ">
                <img
                  src={iphone14Img}
                  alt=""
                  className={`${styles.iphoneIMg}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
