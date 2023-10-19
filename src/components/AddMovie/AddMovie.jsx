
const AddMovie = () => {
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2>Add a Movie</h2>
            <form>
                <div className="flex">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Movie name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="movie name" className="input input-bordered" name="" id="" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="movie name" className="input input-bordered" name="" id="" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddMovie;