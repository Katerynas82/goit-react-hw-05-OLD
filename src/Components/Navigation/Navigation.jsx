import { NavLink } from "react-router-dom";
import s from '../Navigation/Navigation.module.css';



const Navigation = () => {
  // const buildLinkClass = ({ isActive }) => 
  //    clsx(s.link, isActive && s.activeLink);
  
  return (
    <div className={s.wrapper}>
      <nav className={s.navHeader}>
        <NavLink  to="/"> Home</NavLink>
        <NavLink  to="/movies">Movies</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
