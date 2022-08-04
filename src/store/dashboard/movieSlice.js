import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  data: "",
  movieInfoData: {
    loading: false,
    error: false,
    data: {},
  },
  searchApiData: {
    loading: false,
    error: false,
    data: [],
  },
  TopRatedMoviesData: {
    loading: false,
    error: false,
    data: "",
  },
  UpcomingMoviesData: {
    loading: false,
    error: false,
    data: "",
  },
  PopularMovies: {
    loading: false,
    error: false,
    data: "",
  },
};

const config = {
  headers: {
    Authorization: `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODZmZWMxM2M1NmY4YjcyNmNiM2M3NTE2YmMxY2Y1YyIsInN1YiI6IjYxNDViNzExNWUxMjAwMDA4ZGFhYWVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DFj6rHrHEoCoYvmiSDu7lFJR-Zagu2i5X_RGViZt28s`,
  },
};

export const moviesapidata = createAsyncThunk("moviesCard", async () => {
  const respons = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODZmZWMxM2M1NmY4YjcyNmNiM2M3NTE2YmMxY2Y1YyIsInN1YiI6IjYxNDViNzExNWUxMjAwMDA4ZGFhYWVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DFj6rHrHEoCoYvmiSDu7lFJR-Zagu2i5X_RGViZt28s",
      },
    }
  );

  return respons;
});

export const getMovieInfo = createAsyncThunk("movie-info", async ({ id }) => {
  const respons = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODZmZWMxM2M1NmY4YjcyNmNiM2M3NTE2YmMxY2Y1YyIsInN1YiI6IjYxNDViNzExNWUxMjAwMDA4ZGFhYWVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DFj6rHrHEoCoYvmiSDu7lFJR-Zagu2i5X_RGViZt28s",
    },
  });
  return respons;
});

export const getTopRatedMovies = createAsyncThunk(
  "getTopRatedMovies",
  async () => {
    const respons = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODZmZWMxM2M1NmY4YjcyNmNiM2M3NTE2YmMxY2Y1YyIsInN1YiI6IjYxNDViNzExNWUxMjAwMDA4ZGFhYWVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DFj6rHrHEoCoYvmiSDu7lFJR-Zagu2i5X_RGViZt28s",
        },
      }
    );
    return respons;
  }
);
export const getPopularMovies = createAsyncThunk(
  "getPopularMovies",
  async () => {
    const respons = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODZmZWMxM2M1NmY4YjcyNmNiM2M3NTE2YmMxY2Y1YyIsInN1YiI6IjYxNDViNzExNWUxMjAwMDA4ZGFhYWVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DFj6rHrHEoCoYvmiSDu7lFJR-Zagu2i5X_RGViZt28s",
        },
      }
    );
    return respons;
  }
);
export const getUpcomingMovies = createAsyncThunk(
  "getUpcomingMovies",
  async () => {
    const respons = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODZmZWMxM2M1NmY4YjcyNmNiM2M3NTE2YmMxY2Y1YyIsInN1YiI6IjYxNDViNzExNWUxMjAwMDA4ZGFhYWVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DFj6rHrHEoCoYvmiSDu7lFJR-Zagu2i5X_RGViZt28s",
        },
      }
    );
    return respons;
  }
);

export const getSearchApiData = createAsyncThunk(
  "getSearchApiData",
  async ({ search }) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${search}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODZmZWMxM2M1NmY4YjcyNmNiM2M3NTE2YmMxY2Y1YyIsInN1YiI6IjYxNDViNzExNWUxMjAwMDA4ZGFhYWVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DFj6rHrHEoCoYvmiSDu7lFJR-Zagu2i5X_RGViZt28s",
        },
      }
    );
    return res;
  }
);

export const movieSlice = createSlice({
  name: "movieData",
  initialState,
  extraReducers: {
    // moviesapidata
    [moviesapidata.pending]: (state) => {
      state.loading = true;
    },
    [moviesapidata.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data.results;
    },
    [moviesapidata.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // getMovieInfo?
    [getMovieInfo.pending]: (state) => {
      state.movieInfoData.loading = true;
    },
    [getMovieInfo.fulfilled]: (state, action) => {
      state.movieInfoData.loading = false;
      state.movieInfoData.data = action.payload.data;
    },
    [getMovieInfo.rejected]: (state) => {
      state.movieInfoData.loading = false;
      state.movieInfoData.error = true;
    },

    // getTopRatedMovies
    [getTopRatedMovies.pending]: (state) => {
      state.TopRatedMoviesData.loading = true;
    },
    [getTopRatedMovies.fulfilled]: (state, action) => {
      state.TopRatedMoviesData.loading = false;
      state.TopRatedMoviesData.data = action.payload.data.results;
    },
    [getTopRatedMovies.rejected]: (state) => {
      state.TopRatedMoviesData.loading = false;
      state.TopRatedMoviesData.error = true;
    },

    // getPopularMovies
    [getPopularMovies.pending]: (state) => {
      state.PopularMovies.loading = true;
    },
    [getPopularMovies.fulfilled]: (state, action) => {
      state.PopularMovies.loading = false;
      state.PopularMovies.data = action.payload.data.results;
    },
    [getPopularMovies.rejected]: (state) => {
      state.PopularMovies.loading = false;
      state.PopularMovies.error = true;
    },

    // getUpcomingMovies
    [getUpcomingMovies.pending]: (state) => {
      state.UpcomingMoviesData.loading = true;
    },
    [getUpcomingMovies.fulfilled]: (state, action) => {
      state.UpcomingMoviesData.loading = false;
      state.UpcomingMoviesData.data = action.payload.data.results;
    },
    [getUpcomingMovies.rejected]: (state) => {
      state.UpcomingMoviesData.loading = false;
      state.UpcomingMoviesData.error = true;
    },

    // getSearchApiData
    [getSearchApiData.pending]: (state) => {
      state.searchApiData.loading = true;
    },
    [getSearchApiData.fulfilled]: (state, action) => {
      console.log("action", action.payload);
      state.searchApiData.loading = false;
      state.searchApiData.data = action.payload.data.results;
    },
    [getSearchApiData.rejected]: (state) => {
      state.searchApiData.loading = false;
      state.searchApiData.error = true;
    },
  },
  reducers: {
    setSearchEmpty(state) {
      state.searchApiData.data = initialState.searchApiData.data;
    },
  },
});

export const { setSearchEmpty } = movieSlice.actions;

export default movieSlice.reducer;
