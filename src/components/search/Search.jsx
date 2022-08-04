import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchApiData,
  setSearchEmpty,
} from "../../store/dashboard/movieSlice";
import { ImSearch } from "react-icons/im";

const Search = () => {
  const { searchApiData, loading } = useSelector((store) => ({
    searchApiData: store.moviesData.data,
    loading: store.moviesData.loading,
  }));
  const [searText, setSearchText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (searText) dispatch(getSearchApiData({ search: searText }));
  }, [searText]);

  useEffect(() => {
    if (!searText) dispatch(setSearchEmpty({ data: {} }));
  }, [searText]);

  return (
    <div className="container-fluid p-0 navbarandsearch">
      <div className="backgroundimg">
        <div className="cardsearch text-white container ">
          <div className="py-5">
            <h1>Welcome.</h1>
            <h4>
              Millions of movies, TV shows and people to discover. Explore now.
            </h4>
          </div>
          <div className="d-flex align-items-center me-5 justify-content-between bg-white searchbtninput rounded-pill">
            <input
              className="w-100 border-0"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Movies/Tv....."
            />
            <div className=" searchbtn px-sm-5 px-3 py-2 rounded-pill">
              <ImSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
