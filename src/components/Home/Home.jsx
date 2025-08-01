import CarLandingImg from "../../assets/images/landing-page/car 2 1.png";
import CarFrame from "../../assets/images/landing-page/Frame.png";
import styles from "./home.module.css";
function Home() {
  return (
    <>
      <section className="vh-100 secion-1">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="home-header ">
              <h1 className={`${styles.homeHeading} mb-0`}> Find, book and</h1>

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
                  className={`w-100 mt-5 }`}
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
