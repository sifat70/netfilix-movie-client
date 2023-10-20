

const Slider = () => {
    return (
        <div className="h-[40%] ">
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/qgkMfnr/d0suqkhg-srk-625x300-06-May-23.webp)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Shah Rukh Khan</h1>
                        <p className="mb-5">high-toned action-adventure about a well-meaning terrorist and his crack team of hostage-taking girls with guns.</p>
                        <button className="btn btn-success">Watch Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;