import CarLandingImg from "../../assets/images/landing-page/car 2 1.png";
import CarFrame from "../../assets/images/landing-page/Frame.png";
import styles from "./home.module.css";
function Home() {
  return (
    <>
      <section className="vh-lg-100">
        <div className="container-fluid">
          {" "}
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <div className="home-header ">
                <h1 className={`${styles.homeHeading} mb-0`}>
                  {" "}
                  Find, book and
                </h1>

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
                    className={`w-100 mt-5 `}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2 ">
        <div className="container-fluid">
          {/* searchbar */}
          <div className="searchbar   d-flex justify-content-center my-5 ">
            <form className="d-flex align-items-center  w-75" role="search">
              <div className="input-group">
                <span className="input-group-text bg-white border rounded ">
                  <i className="fa-solid fa-location-dot "></i>
                </span>

                <input
                  className="form-control "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-center">
            <h5 className=" text-uppercase text-primary text-center bg-light rounded px-4 py-2 shadow-sm w-auto">
              popular rental deals
            </h5>
          </div>
          <h1 className={`${styles.homeHeading} my-3 text-center`}>
            {" "}
            Most Popular Cars Rental Deals
          </h1>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
