import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Navigation from "../Navigation/Navigation";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<h3>Home page</h3>} />
        <Route path="/movies" element={<h3>Movie List</h3>} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
