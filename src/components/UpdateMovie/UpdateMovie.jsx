import { useLoaderData } from "react-router-dom";


const UpdateMovie = () => {


    const movie = useLoaderData();
    const { name, quantity, supplier, taste, category, details, photo } = movie;
    return (
        <div>
            
        </div>
    );
};

export default UpdateMovie;