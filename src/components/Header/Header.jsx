import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addMovie">Add Movie</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className="w-28 h-full" src="https://i.ibb.co/C1bst0N/depositphotos-73179751-stock-illustration-vector-logo-slate-board-for.webp" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user ?
                                        <img src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" />
                                        :
                                        <img src="https://img.freepik.com/premium-vector/bad-man-liar-wear-good-fake-mask-face-evil-person-concept-graphic-design-illustration_133260-4982.jpg?w=2000" />
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {
                                user ?
                                    <button onClick={handleSignOut} className="btn">Sign Out</button>
                                    :

                                    <Link to="/login"><button className="btn w-full">Login</button></Link>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;