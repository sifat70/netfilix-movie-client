
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "../Slider/Slider";


const Main = () => {
    const movies = useLoaderData();
    return (
        <div>
            <div className="w-[80%] mx-auto">
                <Header></Header>
            </div>
            <div className="mt-8 w-[90%] mx-auto">
                <Slider></Slider>
            </div>
            <h1 className="text-center text-4xl font-bold italic mt-8">New Latest Movie</h1>
            <div className="w-[90%] mx-auto grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
                {
                    movies.map(movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
                }
            </div>


            {/* our about */}


            <div className="mt-8 w-[90%] mx-auto">
                <h1 className="text-center text-4xl font-bold italic mt-8">Our Latest Top Movie</h1>
                <div className="lg:flex mt-8">
                    <div className="flex-1 text-center mt-20">
                        <h1 className="text-3xl text-amber-600 font-bold">Pathan</h1>
                        <p className="font-bold mt-5">Pathaan was theatrically released in India on 25 January 2023, coinciding with the Republic Day weekend.The film received positive reviews from critics, who praised its screenplay, direction, action sequences, music and cast performances</p>
                    </div>
                    <div className="flex-1">
                        <img className="h-96 ml-8 rounded-md" src="https://i.ibb.co/DfZLw6X/Pathaan-5.jpg" alt="" />
                    </div>
                </div>
            </div>



            {/* Client review */}

            <div className=" w-[90%] mx-auto">
                <div className="mt-8">
                    <div>
                        <h1 className="text-center text-4xl font-bold italic mt-8">Client Testimonials</h1>
                        <p className="text-center mt-4 font-bold">A customer testimonial is a recommendation of a business, or the quality of a product or service, by a customer.</p>
                        <div className="lg:flex gap-6 mt-8">
                            <div className="flex-1">
                                <div className="card bg-gray-200 text-primary-content">
                                    <div className="card-body">
                                        <p className="text-black"> helps prospective customers connect easier, but it also helps your business build a further connection and greater loyalty with the customers who write them.</p>
                                        <div className="card-actions flex">
                                            <div className="avatar">
                                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg" />
                                                </div>
                                            </div>
                                            <div className="ml-5">
                                                <h1 className="text-black">MR. Jhon</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="card bg-gray-200 text-primary-content">
                                    <div className="card-body">
                                        <p className="text-black"> A testimonial usually comprises someone's statements which testify to the benefits received from a product, an experience or an association of some sort</p>
                                        <div className="card-actions flex">
                                            <div className="avatar">
                                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e" />
                                                </div>
                                            </div>
                                            <div className="ml-5">
                                                <h1 className="text-black">MR. Mokless</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-11">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;