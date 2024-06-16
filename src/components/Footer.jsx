import React from "react";
import heroImage from "./images/Logo.png";

import "./styles/footer.css";
const Footer = () => {
  return (
    <>
      <div
        style={{
          marginTop: 60,
        }}
      >
        <footer className="footer-section">
          <div className="container mx-auto px-4">
            <div className="footer-cta pt-5 pb-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="mb-30">
                  <div className="single-cta">
                    <i className="fas fa-map-marker-alt" />
                    <div className="cta-text">
                      <h4>Find us</h4>
                      <span>
                        Tầng 1 Tòa nhà 06 Trần Phú, Q. Hải Châu, TP. Đà Nẵng
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-30">
                  <div className="single-cta">
                    <i className="fas fa-phone" />
                    <div className="cta-text">
                      <h4>Call us</h4>
                      <span>0964106456</span>
                    </div>
                  </div>
                </div>
                <div className="mb-30">
                  <div className="single-cta">
                    <i className="far fa-envelope-open" />
                    <div className="cta-text">
                      <h4>Mail us</h4>
                      <span>nguyenanh.mindxdn@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content pt-5 pb-5">
              <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                <div className="mb-50">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img
                          src={heroImage}
                          className="img-fluid"
                          style={{ height: "50px" }}
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="footer-text">
                      <p>
                        Lorem ipsum dolor sit amet, consec tetur adipisicing
                        elit, sed do eiusmod tempor incididuntut consec tetur
                        adipisicing elit,Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3" style={{ gap: 60 }}>
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="footer-text mb-25">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill
                        the form below.
                      </p>
                    </div>
                    <div className="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button>
                          <i className="fab fa-telegram-plane" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container mx-auto px-4">
              <div className="row">
                <div className="text-center w-full">
                  <div style={{ color: "white" }}>
                    <p>Copyright © 2023, All Right Reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
