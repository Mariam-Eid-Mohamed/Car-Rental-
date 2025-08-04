import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

function MasterLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="container-fluid px-0 flex-fill px-0">
        {" "}
        {/* flex-grow for page content */}
        <Outlet />
      </div>
      <Footer /> {/* naturally sticks to bottom when content is short */}
    </div>
  );
}

export default MasterLayout;
