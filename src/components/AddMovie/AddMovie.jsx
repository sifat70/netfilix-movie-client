import Swal from "sweetalert2";
import Header from "../Header/Header";

const AddMovie = () => {


    const handleAddMovie = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;


        const newMovie = { name, quantity, supplier, taste, category, details, photo }
        console.log(newMovie);


        // send to the server

        fetch('http://localhost:5000/movie', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
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
                <h2>Add a Movie</h2>
                <form onSubmit={handleAddMovie}>
                    {/* name and quantity  */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Movie name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="movie name" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="movie name" className="w-full input input-bordered" id="" />
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
                                <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="taste" placeholder="Taste" className="w-full input input-bordered" id="" />
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
                                <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Details" className="w-full input input-bordered" id="" />
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
                                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-block btn-accent" value="add movie" />
                </form>
            </div>
        </div>
    );
};

export default AddMovie;