import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  moviesapidata,
} from "../../store/dashboard/movieSlice";
import Search from "../../components/search/Search";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import Footer from "../../components/footer/Footer";
import { Loadersvg, Vote_average } from "../../assets/svg/Allsvg";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { userdata, loading } = useSelector((store) => ({
    userdata: store?.moviesData?.data,
    loading: store?.moviesData?.loading,
  }));

  const { PopularMovies } = useSelector((store) => ({
    PopularMovies: store?.moviesData?.PopularMovies?.data,
  }));

  const searchMoviesData = useSelector(
    (store) => store?.moviesData?.searchApiData.data
  );

  const { TopRelatedMovies, TopRelatedloading } = useSelector((store) => ({
    TopRelatedMovies: store?.moviesData?.TopRatedMoviesData?.data,
    TopRelatedloading: store?.TopRatedMoviesData?.loading,
  }));

  const { UpcomingMovies, UpcomingMoviesloading } = useSelector((store) => ({
    UpcomingMovies: store?.moviesData?.UpcomingMoviesData?.data,
    UpcomingMoviesloading: store?.UpcomingMoviesData?.loading,
  }));

  useEffect(() => {
    dispatch(moviesapidata());
    dispatch(getPopularMovies());
    dispatch(getTopRatedMovies());
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center Loadersvg w-100">
          <Loadersvg />
        </div>
      ) : (
        <>
          <Search />
          <div className="container">
            <div className="row align-iems-center justify-content-center mb-5">
              <div className="position-relative row">
                {(searchMoviesData || [])?.map((item, searchindex) => {
                  return (
                    <div
                      className="col-xl-2 col-md-3 col-sm-4 col-6"
                      key={searchindex}
                    >
                      <Link
                        to={`/movies-details/${item.id}`}
                        state={{ movieId: item.id }}
                        className={"text-reset text-decoration-none"}
                      >
                        <div className="moviescard mx-1 mt-4 p-3 rounded">
                          <div className="d-flex align-items-center justify-content-center rounded mx-auto">
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                              alt=""
                              className="w-100 h-100 rounded"
                            />
                          </div>
                          <div className="bg-dark percircle dashpercircle d-flex align-items-center justify-content-center rounded-circle position-relative">
                            <h6 className="mb-0 percentage text-white">{`${
                              item.vote_average * 10
                            }%`}</h6>

                            <div className="position-absolute top-0 start-0">
                              <Vote_average
                                strokeDasharray={`${
                                  item.vote_average * 10
                                }, 100`}
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-reset text-decoration-none fw-bold">
                              {item.title}
                            </p>
                            <p className="mb-0">{item.release_date}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="">
                <div className="d-flex align-items-center mt-4 flex-wrap">
                  <div className="">
                    <h5 className="px-4 UpcomingMovies">Popular Movies</h5>
                  </div>
                  <div className="border pt-1 PopularMovies rounded-pill">
                    <h5 className="px-4">Streaming</h5>
                  </div>
                </div>
                <div className="position-relative">
                  <Swiper
                    slidesPerView={6}
                    // centeredSlides={true}
                    spaceBetween={10}
                    breakpoints={{
                      // when window width is >= 640px
                      240: {
                        // width: 640,
                        slidesPerView: 1,
                      },
                      440: {
                        // width: 640,
                        slidesPerView: 2,
                      },
                      // when window width is >= 768px
                      768: {
                        // width: 768,
                        slidesPerView: 4,
                      },
                      1068: {
                        // width: 768,
                        slidesPerView: 5,
                      },
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper pb-3"
                  >
                    {(PopularMovies || [])?.map((items, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <div className="c">
                            <Link
                              to={`/movies-details/${items.id}`}
                              state={{ movieId: items.id }}
                              className={"text-reset text-decoration-none"}
                            >
                              <div className="moviescard mt-2 p-3 rounded">
                                <div className="d-flex align-items-center justify-content-center rounded mx-auto">
                                  <img
                                    src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                                    alt=""
                                    className="w-100 h-100 rounded"
                                  />
                                </div>
                                <div className="bg-dark percircle dashpercircle d-flex align-items-center justify-content-center rounded-circle position-relative">
                                  <h6 className="mb-0 percentage text-white">{`${
                                    items.vote_average * 10
                                  }%`}</h6>

                                  <div className="position-absolute top-0 start-0">
                                    <Vote_average
                                      strokeDasharray={`${
                                        items.vote_average * 10
                                      }, 100`}
                                    />
                                  </div>
                                </div>
                                <div className="text-center">
                                  <p className="text-reset text-decoration-none fw-bold">
                                    {items.title}
                                  </p>
                                  <p className="mb-0">{items.release_date}</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
              <div className="">
                <div className="d-flex align-items-center mt-4 flex-wrap">
                  <div className="">
                    <h5 className="px-4 UpcomingMovies">Top_Rated Movies</h5>
                  </div>
                  <div className="border pt-1 PopularMovies rounded-pill">
                    <h5 className="px-4">This Week</h5>
                  </div>
                </div>
                <div className="position-relative">
                  <Swiper
                    slidesPerView={6}
                    // centeredSlides={true}
                    spaceBetween={10}
                    breakpoints={{
                      // when window width is >= 640px
                      240: {
                        // width: 640,
                        slidesPerView: 1,
                      },
                      440: {
                        // width: 640,
                        slidesPerView: 2,
                      },
                      // when window width is >= 768px
                      768: {
                        // width: 768,
                        slidesPerView: 4,
                      },
                      1068: {
                        // width: 768,
                        slidesPerView: 5,
                      },
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper pb-3"
                  >
                    {(TopRelatedMovies || [])?.map((items, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="c">
                            <Link
                              to={`/movies-details/${items.id}`}
                              state={{ movieId: items.id }}
                              className={"text-reset text-decoration-none"}
                            >
                              <div className="moviescard mt-2 p-3 rounded">
                                <div className="d-flex align-items-center justify-content-center rounded mx-auto">
                                  <img
                                    src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                                    alt=""
                                    className="w-100 h-100 rounded"
                                  />
                                </div>
                                <div className="bg-dark percircle dashpercircle d-flex align-items-center justify-content-center rounded-circle position-relative">
                                  <h6 className="mb-0 percentage text-white">{`${
                                    items.vote_average * 10
                                  }%`}</h6>

                                  <div className="position-absolute top-0 start-0">
                                    <Vote_average
                                      strokeDasharray={`${
                                        items.vote_average * 10
                                      }, 100`}
                                    />
                                  </div>
                                </div>
                                <div className="text-center">
                                  <p className="text-reset text-decoration-none fw-bold">
                                    {items.title}
                                  </p>
                                  <p className="mb-0">{items.release_date}</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
              <div className="">
                <div className="d-flex align-items-center mt-4 flex-wrap">
                  <div className="">
                    <h5 className="px-4 UpcomingMovies">Upcoming Movies</h5>
                  </div>
                  <div className="border pt-1 PopularMovies rounded-pill">
                    <h5 className="px-4">In Theaters</h5>
                  </div>
                </div>
                <div className="position-relative">
                  <Swiper
                    slidesPerView={6}
                    // centeredSlides={true}
                    spaceBetween={10}
                    breakpoints={{
                      // when window width is >= 640px
                      240: {
                        // width: 640,
                        slidesPerView: 1,
                      },
                      440: {
                        // width: 640,
                        slidesPerView: 2,
                      },
                      // when window width is >= 768px
                      768: {
                        // width: 768,
                        slidesPerView: 4,
                      },
                      1068: {
                        // width: 768,
                        slidesPerView: 5,
                      },
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper pb-3"
                  >
                    {(UpcomingMovies || [])?.map((items, imovies) => {
                      return (
                        <SwiperSlide key={imovies}>
                          <div className="c">
                            <Link
                              to={`/movies-details/${items.id}`}
                              state={{ movieId: items.id }}
                              className={"text-reset text-decoration-none"}
                            >
                              <div className="moviescard mt-2 p-3 rounded">
                                <div className="d-flex align-items-center justify-content-center rounded mx-auto">
                                  <img
                                    src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                                    alt=""
                                    className="w-100 h-100 rounded"
                                  />
                                </div>
                                <div className="bg-dark percircle dashpercircle d-flex align-items-center justify-content-center rounded-circle position-relative">
                                  <h6 className="mb-0 percentage text-white">{`${
                                    items.vote_average * 10
                                  }%`}</h6>

                                  <div className="position-absolute top-0 start-0">
                                    <Vote_average
                                      strokeDasharray={`${
                                        items.vote_average * 10
                                      }, 100`}
                                    />
                                  </div>
                                </div>
                                <div className="text-center">
                                  <p className="text-reset text-decoration-none fw-bold">
                                    {items.title}
                                  </p>
                                  <p className="mb-0">{items.release_date}</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
              <div className="">
                <div className="d-flex align-items-center mt-4 flex-wrap">
                  <div className="">
                    <h5 className="px-4 UpcomingMovies">Other Movies</h5>
                  </div>
                  <div className="border pt-1 PopularMovies rounded-pill">
                    <h5 className="px-4">Free To Watch</h5>
                  </div>
                </div>
                <div className="position-relative row">
                  {(userdata || [])?.map((items, iuserdata) => {
                    return (
                      <div
                        className="col-xl-2 col-md-3 col-sm-4 col-6 "
                        key={iuserdata}
                      >
                        <Link
                          to={`/movies-details/${items.id}`}
                          state={{ movieId: items.id }}
                          className={"text-reset text-decoration-none"}
                        >
                          <div className="moviescard mx-1 mt-2 p-3 rounded">
                            <div className="d-flex align-items-center justify-content-center rounded mx-auto">
                              <img
                                src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                                alt=""
                                className="w-100 h-100 rounded"
                              />
                            </div>
                            <div className="bg-dark percircle dashpercircle d-flex align-items-center justify-content-center rounded-circle position-relative">
                              <h6 className="mb-0 percentage text-white">{`${
                                items.vote_average * 10
                              }%`}</h6>

                              <div className="position-absolute top-0 start-0">
                                <Vote_average
                                  strokeDasharray={`${
                                    items.vote_average * 10
                                  }, 100`}
                                />
                              </div>
                            </div>
                            <div className="text-center">
                              <p className="text-reset text-decoration-none fw-bold">
                                {items.title}
                              </p>
                              <p className="mb-0">{items.release_date}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Dashboard;
