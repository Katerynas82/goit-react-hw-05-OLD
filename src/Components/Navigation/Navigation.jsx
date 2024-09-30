import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <header>
        <Link to= "/" > Home</Link>
        <Link to="/movies" >Movies</Link>
      </header>
    </>
  );
};

export default Navigation;
