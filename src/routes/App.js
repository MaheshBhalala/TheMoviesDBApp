import { Route, Routes } from "react-router-dom";
import "../assets/css/App.css";
import Layout from "../pages";
import Dashboard from "../pages/dashboard/Dashboard";
import MovieInfo from "../pages/movies/MovieInfo";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movies-details">
            <Route path=":id" element={<MovieInfo />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
