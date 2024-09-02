import { NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';
import css from './Navigation.module.css';
import clsx from 'clsx';
import Button from '../button/Button';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
    return (
        <header className={css.headerContainer}>
            <div className={css.headerWrapper}>
                <div className={css.navWrapper}>
                    <Logo />
                    <div className={css.headerMenu}>
                        <NavLink to="/" className={buildLinkClass}>
                            Home
                        </NavLink>
                        <NavLink to="/nannies" className={buildLinkClass}>
                            Nannies
                        </NavLink>
                    </div>
                </div>
                <NavLink to="/" className={buildLinkClass}>
                    <Button className={css.btnLogIn}>Log in</Button>
                    <Button className={css.btnRegistration}>Registration</Button>
                </NavLink>
            </div>
        </header>
    );
};

export default Navigation;
