import { NavLink } from "react-router-dom";
import s from '../Navigation/Navigation.module.css';
import clsx from "clsx";


const Navigation = () => {
  const buildLinkClass = ({ isActive }) => 
     clsx(s.link, isActive && s.activeLink);
  
  return (
    <div className={s.wrapper}>
      <div className={s.navHeader}>
        <NavLink className={buildLinkClass} to="/"> Home</NavLink>
        <NavLink className={buildLinkClass} to="/movies">Movies</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
