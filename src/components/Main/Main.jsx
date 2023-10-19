
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "../Slider/Slider";


const Main = () => {
    const movies = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <h1 className="text-center">New Latest Movie</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    movies.map(movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;