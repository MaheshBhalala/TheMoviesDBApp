import React from "react";
import logofooter from "../../assets/img/1_Y9-6_bh5a00rJWWoQ28NMQ-removebg-preview.png";

const Footer = () => {
  return (
    // <div className="">
    <div className="footer row py-5 align-items-center g-0">
      <div className="col-lg-3 col-12 d-flex justify-content-center">
        <div className="logofooter">
          <img src={logofooter} alt="" className="w-100 h-100" />
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6 text-center mt-3 mt-sm-0">
        <ul className="">
          <h6 className="text-light fw-bold">THE BASICS</h6>
          <li className="">
            <a className="text-light footerunderline" href="">
              About TMDB
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              Contact Us
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              Support Forums
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              API
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              System Status
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6 text-center">
        <ul className="">
          <h6 className="text-light fw-bold">GET INVOLVED</h6>
          <li>
            <a className="text-light footerunderline" href="">
              Contribution Bible
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              Add New Movie
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              Add New TV Show
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6 text-center">
        <ul className="">
          <h6 className="text-light fw-bold">COMMUNITY</h6>
          <li>
            <a className="text-light footerunderline" href="">
              Guidelines
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              Discussions
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              Leaderboard
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              Twitter
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6 text-center">
        <ul className="">
          <h6 className="text-light fw-bold">LEGAL</h6>
          <li>
            <a className="text-light footerunderline" href="">
              API Terms of Use
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              Add New Api
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              API
            </a>
          </li>
          <li>
            <a className="text-light footerunderline" href="">
              API System Status
            </a>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
