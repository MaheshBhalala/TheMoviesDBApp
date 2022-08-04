import React from "react";
import Dashboard from "../../pages/dashboard/Dashboard";
import { VscAccount } from "react-icons/vsc";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="navbar d-flex align-items-center justify-content-between position-fixed">
        <div className="logo d-flex align-items-center">
          <Link to={"/"} className="textlogo">
            T M D B
          </Link>
          {/* <img src="" alt="" /> */}
        </div>
        <div className="">
          <div className="navmenu">
            <ul className="d-flex align-items-center mb-0">
              <li>
                <Link className="headertext" to={"/"}>
                  MostView
                </Link>
              </li>
              <li>
                <Link className="headertext" to={"/"}>
                  LatestMovies
                </Link>
              </li>
              <li>
                <Link className="headertext" to={"/"}>
                  Tv
                </Link>
              </li>
              <li>
                <Link className="headertext" to={"/"}>
                  More
                </Link>
              </li>
              <li>
                <Link className="headertext" to={"/"}>
                  <VscAccount fontSize={20} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="p-1 humbermenu rounded border border-white m-0 me-4 -none">
              <FiMenu fontSize={25} color={"white"} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
