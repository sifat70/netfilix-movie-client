import Header from "../Header/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";


const Registration = () => {
    const { createUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        if (password.length < 6) {
            toast("password should be at least 6 characters or longer");
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast('Your password should have at least one upper case characters')
            return;
        }


        // create user

        createUser(email, password)
            .then(result => {
                toast("User created successfully")
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast(error.message)
            })

    }
    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen w-1/2 mx-auto">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Jisan Community</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-secondary">Register</button>
                            </div>
                        </form>
                        <p className="text-center pb-5">Already An Account ? <Link className="text-lime-600 font-bold" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;