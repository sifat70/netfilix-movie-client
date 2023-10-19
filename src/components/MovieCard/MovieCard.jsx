import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MovieCard = ({ movie }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = movie;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/movie/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Movie has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        // <figure><img className="h-96 lg:w-[500px]" src={photo} alt="Movie" /></figure>
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-80 w-full" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>{quantity}</p>
                <div className="card-actions justify-center">
                    <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                        <button className="btn btn-outline btn-accent">View</button>
                        <Link to={`updateMovie/${_id}`}><button className="btn btn-outline btn-accent">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-accent">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default MovieCard;