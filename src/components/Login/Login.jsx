import Header from "../Header/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";



const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                toast('login successfully')
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast('something went wrong')
            })
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen w-1/2 mx-auto">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login Jisan Community</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
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
                                <button className="btn btn-outline btn-secondary">Login</button>
                            </div>

                        </form>

                        <p className="text-center pb-5">Do not Have An Account ? <Link className="text-lime-600 font-bold" to="/registration">Register</Link></p>
                        <div className="mt-2 mb-3 w-[80%] mx-auto">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-ghost w-full"><FaGoogle></FaGoogle>Login With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;