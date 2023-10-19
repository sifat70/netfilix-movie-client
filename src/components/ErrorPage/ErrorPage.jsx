import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="text-center mt-12 h-[50vh] w-[50vw] mx-auto">
                <img className="h-36 w-36 md:ml-32 ml-9 lg:ml-64" src="https://i.ibb.co/8svbq57/forbidden-5469452-1280.webp" alt="" />
                <p className="text-3xl mt-5">Oops!!</p>
                <p>Sorry, an unexecuted error has ocurred</p>
                <Link><button className="btn btn-warning mt-5">Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;