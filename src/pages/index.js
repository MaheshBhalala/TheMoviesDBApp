import React from "react";
import Navbar from "../components/header/Navbar";
import { useDispatch, useSelector } from "react-redux";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const loading = useSelector((store) => store?.moviesData?.loading);

  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
