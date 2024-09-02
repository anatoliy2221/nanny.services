import { NavLink } from "react-router-dom";
import css from './Logo.module.css';


const Logo = () => {
    return (
        <div>
            <NavLink to='/' className={css.textLogo} >Nanny.Services</NavLink>
        </div>
    )
};

export default Logo;
