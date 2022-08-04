import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getMovieInfo } from "../../store/dashboard/movieSlice";
//icons
import { FiHeart, FiList, FiStar, FiSave } from "react-icons/fi";
import { Loadersvg, Vote_average } from "../../assets/svg/Allsvg";

const MovieInfo = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { movieId } = location.state;

  const { movieInfoData, loading } = useSelector((store) => ({
    movieInfoData: store?.moviesData?.movieInfoData.data,
    loading: store?.moviesData?.movieInfoData?.loading,
  }));

  useEffect(() => {
    dispatch(getMovieInfo({ id: movieId }));
  }, [dispatch, movieId]);

  function time_convert(num) {
    var hours = `${Math.floor(num / 60)}h`;
    var minutes = num % 60;
    return `${hours + ":" + minutes}m`;
  }

  return (
    <>
      <div className="container-fluid p-0">
        <div className="">
          <ul className="d-flex align-items-center justify-content-center movieslinkpage mb-0 py-2">
            <li className="px-3">
              <Link to="/" className="text-reset text-decoration-none">
                Overview
              </Link>
            </li>
            <li className="px-3">
              <Link to="/" className="text-reset text-decoration-none">
                Media
              </Link>
            </li>
            <li className="px-3">
              <Link to="/" className="text-reset text-decoration-none">
                Fandom
              </Link>
            </li>
            <li className="px-3">
              <Link to="/" className="text-reset text-decoration-none">
                Share
              </Link>
            </li>
          </ul>
        </div>
        {loading ? (
          <>
            <div className="d-flex align-items-center justify-content-center Loadersvg">
              <Loadersvg />
            </div>
          </>
        ) : (
          <>
            <div className="position-relative moviesinfopage">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieInfoData.backdrop_path}`}
                alt=""
                className={"w-100 h-100 imagebackdrop_path"}
              />
              <div className="row position-absolute inner_contentbackground  px-5 mx-0 text-white align-items-center w-100 h-100">
                <div className="col-lg-4  col-12 d-flex justify-content-center mt-lg-0 mt-5">
                  <div className="overflow-hidden poster_pathimg">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movieInfoData.poster_path}`}
                      alt=""
                      className={"w-100 h-100"}
                    />
                  </div>
                </div>
                <div className="col-lg-8  col-12 moviestextmdblack text-sm-white">
                  <div className="mb-3">
                    <h1 className="mb-3 mt-3">{movieInfoData.title}</h1>
                    <div className="d-flex flex-wrap">
                      <p>Status : {movieInfoData.status}</p>
                      <p className={"mx-2"}>{movieInfoData.release_date}</p>
                      <p className={"mx-2"}>
                        ({movieInfoData.original_language})
                      </p>
                      {(movieInfoData.genres || [])?.map((items, i) => {
                        return (
                          <p className={"mx-2"} key={i}>
                            {items.name}
                          </p>
                        );
                      })}
                      <p className={"mx-2"}>
                        {time_convert(movieInfoData.runtime)}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3 flex-wrap">
                    <div className="bg-dark percircle d-flex align-items-center justify-content-center rounded-circle  position-relative flex-wrap">
                      <h6 className="mb-0 percentage text-white">{`${
                        movieInfoData.vote_average * 10
                      }%`}</h6>

                      <div className="position-absolute top-0 start-0">
                        <Vote_average
                          strokeDasharray={`${movieInfoData.vote_average * 10}`}
                        />
                      </div>
                    </div>
                    <div className="mx-3">
                      <p className="mb-0">User</p>
                      <p className="mb-0">Score</p>
                    </div>
                    <div className="d-flex mt-sm-0 mt-3">
                      <div className="bg-dark text-white mx-3 percircle d-flex align-items-center justify-content-center rounded-circle">
                        <FiList fontSize={25} />
                      </div>
                      <div className="bg-dark text-white mx-3 percircle d-flex align-items-center justify-content-center rounded-circle">
                        <FiHeart fontSize={25} />
                      </div>
                      <div className="bg-dark text-white mx-3 percircle d-flex align-items-center justify-content-center rounded-circle">
                        <FiSave fontSize={25} />
                      </div>
                      <div className="bg-dark text-white mx-3 percircle d-flex align-items-center justify-content-center rounded-circle">
                        <FiStar fontSize={25} />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 text-muted">
                    <h6>The impossibilities are endless.</h6>
                  </div>
                  <div className="mb-5">
                    <h3>Overview</h3>
                    <p>{movieInfoData.overview}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between px-5 flex-wrap">
                    <div>
                      <h6>{movieInfoData.original_title}</h6>
                      <p>{movieInfoData.original_language}</p>
                    </div>
                    <div>
                      <h6>Scott Derrickson</h6>
                      <p>{movieInfoData.imdb_id}</p>
                    </div>
                    <div>
                      <h6>Gabriel</h6>
                      <p>{movieInfoData.vote_count}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieInfo;
