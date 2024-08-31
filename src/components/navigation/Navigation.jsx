import { NavLink } from "react-router-dom";
import { Logo } from "../logo/Logo";
import css from './Navigation.module.css';

export const Navigation = () => {
    return (
        <header className={css.headerContainer}>
            <Logo />
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/nannies' >Nannies</NavLink>
            <NavLink to='/favorites' >Favorites</NavLink>

        </header>
    )
}
