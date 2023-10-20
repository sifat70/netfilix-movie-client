import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";


const MovieCard = ({ movie }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = movie;

    // const handleDelete = _id => {
        // console.log(_id);
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.isConfirmed) {


        //         fetch(`https://netfilix-movie-server-6o6cgyabx-sifat70s-projects.vercel.app/movie/${_id}`, {
        //             method: "DELETE"
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 console.log(data);

        //                 if (data.deletedCount > 0) {
        //                     Swal.fire(
        //                         'Deleted!',
        //                         'Your Movie has been deleted.',
        //                         'success'
        //                     )
        //                 }
        //             })
        //     }
        // })
    // }
    return (
        // <figure><img className="h-96 lg:w-[500px]" src={photo} alt="Movie" /></figure>
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-80 w-full" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p className="flex items-center">{quantity}<FaStar className="ml-3"></FaStar></p>
                <p>{details}</p>
                <div className="card-actions justify-center">
                    
                        <button className="btn btn-outline btn-accent">View</button>
                        <Link to={`updateMovie/${_id}`}><button className="btn btn-outline btn-accent">Update</button></Link>
                        {/* <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-accent">Delete</button> */}
                    

                </div>
            </div>
        </div>
    );
};
export default MovieCard;