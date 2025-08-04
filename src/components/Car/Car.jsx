import styles from "./car.module.css";
import carImg1 from "../../assets/images/card/car1.png";
import carImg2 from "../../assets/images/card/car2.png";
import carImg3 from "../../assets/images/card/car3.png";
import userIcon from "../../assets/images/card/user.png";
import starIcon from "../../assets/images/card/star.png";
import airConditionIcon from "../../assets/images/card/d8wxke_2_.png";
import automaticIcon from "../../assets/images/card/Frame.png";
import arrowIcon from "../../assets/images/card/arrow-right.png";
import { Link } from "react-router-dom";

function Car({ carInfo, getCarDetails }) {
  // we want to make a random distribution of 3 images as api doesnot provide them so i stores all images in an array and made the imagetouse is the image of carimages of indexe(carid modulus the 3(number of images))
  const carImages = [carImg1, carImg2, carImg3];
  const ImageToUse = carImages[carInfo.id % carImages.length];
  return (
    <>
      <div className="col-lg-3">
        <div className="card p-2">
          <div className="img-fluid d-flex justify-content-center">
            <img
              src={ImageToUse}
              className={`mt-3 ${styles.carImg}`}
              alt="car image"
            />
          </div>

          <div className="card-body">
            <h3 className="card-title">{carInfo.car_model}</h3>
            <div className="card-content ">
              <div className="d-flex reviews mb-2">
                <div className="img-fluid">
                  <img src={starIcon} />
                </div>
                <span>(1345 reviews)</span>
              </div>
              <div className="d-flex  justify-content-between  mb-2">
                <div className="d-flex passengers">
                  <div className="img-fluid">
                    <img src={userIcon} />
                  </div>
                  <span>4 Passangers</span>
                </div>
                <div className="d-flex conditioning">
                  <div className="img-fluid">
                    <img src={airConditionIcon} />
                  </div>
                  <span>Air conditioning</span>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex car-model-year ">
                  <div className="">
                    <i class="fa-solid fa-calendar-days"></i>
                  </div>
                  <span>{carInfo.car_model_year}</span>
                </div>
                <div className="d-flex conditioning">
                  <div className="img-fluid me-2">
                    <img src={automaticIcon} />
                  </div>
                  <span>Automatic</span>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between  price mb-1">
                <span>Price</span>
                <span>{carInfo.price} /day</span>
              </div>
            </div>
            <Link to="#" className=" my-2">
              <button
                className="btn btn-primary w-100"
                onClick={() => getCarDetails(carInfo)}
              >
                View details
                <img src={arrowIcon} alt="" className="ms-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Car;
