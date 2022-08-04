import { configureStore, combineReducers } from "@reduxjs/toolkit";
import movieSlice from "./dashboard/movieSlice";

const rootReducer = combineReducers({
  moviesData: movieSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
