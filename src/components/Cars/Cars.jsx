import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./cars.module.css";
import Car from "../Car/Car";

function Cars() {
  let [cars, setCars] = useState([]);
  // to handle pagination
  let [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 16;
  const totalPages = Math.ceil(cars.length / carsPerPage); //ex:1000/16=62.5 ceiled will be 63
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentcars = cars?.slice(indexOfFirstCar, indexOfLastCar);

  let getCars = async () => {
    try {
      let response = await axios.get("https://myfakeapi.com/api/cars/");
      setCars(response?.data?.cars);
    } catch (error) {
      console.log(error);
    }
  };
  let getCarDetails = (currentCar) => {
    console.log("Car details:", currentCar);
  };
  useEffect(() => {
    getCars();
  }, []);
  return (
    <>
      <div className="container">
        <div className="cars-heading">
          <div className="d-flex justify-content-center">
            <h5 className=" text-uppercase text-primary text-center bg-light rounded px-4 py-2 shadow-sm ">
              popular rental deals
            </h5>
          </div>
          <h1 className={`${styles.homeHeading} my-3 text-center`}>
            {" "}
            Most Popular Cars Rental Deals
          </h1>
        </div>
        <div className="row g-4">
          {currentcars.map((car) => (
            <Car carInfo={car} key={car.id} getCarDetails={getCarDetails} />
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li
                className={`page - item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                >
                  Previous
                </button>
              </li>
              {/* Dynamic page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1) // Create array of page numbers
                .map((pageNum) => (
                  <li
                    key={pageNum}
                    className={`page-item ${
                      currentPage === pageNum ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  </li>
                ))
                .slice(
                  Math.max(0, currentPage - 3), // start from 3 pages before current
                  currentPage + 2 // end 2 pages after current
                )}
              <li
                class={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Cars;
