import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Header/Header";


const UpdateMovie = () => {


    const movie = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = movie;


    const handleUpdateMovie = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;


        const updateMovie = { name, quantity, supplier, taste, category, details, photo }
        console.log(updateMovie);


        // send to the server

        fetch(`http://localhost:5000/movie/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateMovie)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="bg-[#F4F3F0] p-24">
                <h2>Update a Movie : {name}</h2>
                <form onSubmit={handleUpdateMovie}>
                    {/* name and quantity  */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Movie name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="movie name" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="movie name" className="w-full input input-bordered" id="" />
                            </label>
                        </div>
                    </div>

                    {/* Supplier and Taste */}
                    <div className="md:flex mt-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="w-full input input-bordered" id="" />
                            </label>
                        </div>
                    </div>

                    {/* Category  and Details*/}
                    <div className="md:flex mt-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" defaultValue={details} placeholder="Details" className="w-full input input-bordered" id="" />
                            </label>
                        </div>
                    </div>

                    {/* photo url */}
                    <div className="mt-8 mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-block btn-accent" value="add movie" />
                </form>
            </div>
        </div>
    );
};

export default UpdateMovie;