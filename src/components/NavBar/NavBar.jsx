import Logo from "../../assets/images/nav/logo.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <div className="img-fluid">
              <img src={Logo} alt="" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5 me-1"
                  aria-current="page"
                  href="#"
                >
                  Become a Renter
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active  fs-5 me-1"
                  aria-current="page"
                  href="#"
                >
                  Rental deals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active  fs-5 me-1" href="#">
                  How it works
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5 me-1"
                  aria-current="page"
                  href="#"
                >
                  Why choose us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  fs-5" href="#"></Link>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-light btn-lg m-2 " type="button">
                Sign in
              </button>

              <button className="btn btn-primary btn-lg  m-2" type="button">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
