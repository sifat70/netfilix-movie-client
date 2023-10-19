

const MovieCard = ({ movie }) => {

    const { name, quantity, supplier, taste, category, details, photo } = movie
    return (
        // <figure><img className="h-96 lg:w-[500px]" src={photo} alt="Movie" /></figure>
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <div className="card-actions">
                        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                            <button className="btn ">View</button>
                            <button className="btn">Update</button>
                            <button className="btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;