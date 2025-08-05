import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import vectorImg from "../../assets/images/landing-page/sec-4/Vector.png";
import CarImgS4 from "../../assets/images/landing-page/sec-4/Audi 1.png";
import userIcon from "../../assets/images/card/user.png";
import airConditionIcon from "../../assets/images/card/d8wxke_2_.png";
import automaticIcon from "../../assets/images/card/Frame.png";
function CarDetails() {
  let { id } = useParams();
  const [details, setDetails] = useState(null);

  let getCarDetails = async () => {
    try {
      let response = await axios.get(`https://myfakeapi.com/api/cars/${id}`);
      // console.log(response?.data?.Car?.car_model_year);
      setDetails(response?.data?.Car);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCarDetails();
  }, []);

  return (
    <>
      <div className="container-fluid    ">
        <div className="row  d-flex h-100  ">
          <div className="col-lg-6     d-none d-lg-flex  position-relative ">
            <div className="d-flex flex-column justify-content-center">
              <div className=" d-flex flex-column justify-content-center align-items-center ">
                {/* Frame image overlay (on top) */}
                <img
                  src={vectorImg}
                  alt=""
                  className={` w-100 h-100 object-fit-cover position-absolute top-0
                   start-0`}
                />
                <div className="img-fluid w-100   ">
                  <img
                    src={CarImgS4}
                    alt="porshe-car"
                    className={`Car2Img mt-5 w-100`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12   h-100  ">
            <div className="d-flex  flex-column w-100 h-100 align-items-center justify-content-center">
              <div className="p-3  w-100">
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
              <div className="d-flex flex-column  w-100 ">
                <div className="d-flex passengers py-2 ">
                  <div className="img-fluid me-3">
                    <img src={userIcon} />
                  </div>
                  <span>4 Passangers</span>
                </div>

                <div className="d-flex conditioning py-2 ">
                  <div className="img-fluid me-3">
                    <img src={airConditionIcon} />
                  </div>
                  <span>Air conditioning</span>
                </div>
                <div className="d-flex car-model-year py-2">
                  <div className="me-3">
                    <i class="fa-solid fa-calendar-days text-secondary"></i>
                  </div>
                  <span>{details?.car_model_year}</span>
                </div>
                <div className="d-flex ">
                  <div className="img-fluid me-3 py-2">
                    <img src={automaticIcon} />
                  </div>
                  <span>Automatic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarDetails;
