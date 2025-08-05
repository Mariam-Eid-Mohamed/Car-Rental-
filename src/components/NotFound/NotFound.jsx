import { Link } from "react-router-dom";
import NotfoundImg from "../../assets/images/not-found/404-not-found.png";
function NotFound() {
  return (
    <>
      <div className="d-flex vh-100 bg-primary  position-relative">
        <img
          src={NotfoundImg}
          alt=""
          className=" w-100 h-100 object-fit-contain "
        />
      </div>
    </>
  );
}

export default NotFound;
