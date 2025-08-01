import FooterLogo from "../../assets/images/footer/logo-footer.png";
import locationImg from "../../assets/images/footer/location.png";
import phoneImg from "../../assets/images/footer/call.png";
import mailImg from "../../assets/images/footer/sms.png";
import FacebookIcon from "../../assets/images/footer/facebook.png";
import InstgramIcon from "../../assets/images/footer/instagram.png";
import YoutubeIcon from "../../assets/images/footer/youtube.png";
function Footer() {
  return (
    <>
      <footer className="text-white py-4 mt-4 bg-footer  ">
        <div className="container">
          <div className="row my-5 ">
            <div className="col-6 col-lg-3  order-lg-1 ">
              <div className="d-flex flex-column ">
                <img
                  src={FooterLogo}
                  alt="the Imag of logo"
                  className="footer-logo mb-4"
                />
                <div className="d-flex  mb-3">
                  <img src={locationImg} alt="" className="footer-icon " />
                  <span>25566 Hc 1,Glenallen, Alaska, 99588, USA</span>
                </div>
                <div className="d-flex   mb-3">
                  <img src={phoneImg} alt="" className="footer-icon" />
                  <span>+603 4784 273 12</span>
                </div>
                <div className="d-flex  mb-4">
                  <img src={mailImg} alt="" className="footer-icon" />
                  <span>rentcars@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-2 order-lg-1  text-center">
              <p className="fw-semibold mb-5">Our products</p>
              <ul className="list-unstyled ">
                <li className="mb-1">Carrers</li>
                <li className="mb-1 ">Vehicels</li>
                <li className="mb-1">Packages</li>
                <li className="mb-1">Features</li>
                <li className="mb-1">Priceline</li>
              </ul>
            </div>
            <div className="col-4 col-lg-2   order-lg-1 ">
              <p className="fw-semibold mb-5"> About rent cars</p>
              <ul className="list-unstyled ">
                <li className="mb-1"> why choose us</li>
                <li className="mb-1 ">our story</li>
                <li className="mb-1">investor relations</li>
                <li className="mb-1">press center</li>
                <li className="mb-1">advertise</li>
              </ul>
            </div>

            <div className="col-4 col-lg-2  order-lg-4">
              <p className="fw-semibold mb-5">Resources</p>
              <ul className="list-unstyled ">
                <li className="mb-1"> download</li>
                <li className="mb-1 ">help center</li>
                <li className="mb-1">partner network</li>
                <li className="mb-1">cruises</li>
                <li className="mb-1">developer</li>
              </ul>
            </div>
            <div className="col-4 col-lg-3  order-lg-5 ">
              <div className="d-flex flex-column">
                <p className="fw-semibold mb-3">Follow us</p>
                <div className="icons">
                  <img
                    src={FacebookIcon}
                    alt="facebook icon"
                    className="me-1"
                  />
                  <img
                    src={InstgramIcon}
                    alt="instgram icon"
                    className="me-1"
                  />
                  <img src={YoutubeIcon} alt="youtube icon" className="me-1" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyrights my-3">
            Copyright 2025 ・ Rentcars, All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
