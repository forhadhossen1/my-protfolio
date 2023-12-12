import { NavLink } from "react-router-dom";
import logo from '../assets/favF.png';

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'> Home </NavLink></li>
        <li><NavLink to='/about'> About </NavLink></li>
        <li><NavLink to='/contact'> Contact Me </NavLink></li>
    </>
    return (
        <div>
            <div className="navbar h-14 bg-gradient-to-r from-gray-700 to-white-200 shadow-2xl text-gray-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        </div>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src={logo} alt="" className="h-[50px] dark:text-pink-700"/>Forhad</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navLinks}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;