import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {useEffect} from "react";
import {scrollToTop, setPage} from "../utils/utils.js";
import {useNavigate} from "react-router-dom";
import bg from "../assets/pexels.jpeg";

const HomePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setPage("Home");
        scrollToTop();
    }, []);

    return (
        <>
            <Navbar page="home"/>
            <section style={{backgroundImage: `url(${bg})`}} className="bg-cover bg-no-repeat bg-center md:bg-[center_top] lg:bg-[center_top_-8rem] flex justify-center">
                <div className="w-[350px] tablet:w-[640px] md:w-[768px] lg:w-[1024px] 2xl:w-[1280px] flex flex-col">
                    <div className="w-full h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
                        <h1 className="cursive text-white text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-10">Sip, Savor, and</h1>
                        <h1 className="cursive text-white text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-20">Sparkle.</h1>
                        <span className="text-white text-sm sm:text-md md:text-xl lg:text-2xl mb-10">Madame's Cafe is more than a cafe; it's an experience waiting just for you.</span>
                        <button onClick={() => navigate("/menu")} className="btn-font px-2 pb-1 bg-white text-primary-lighter font-[500] border-[2px] border-[burlywood] border-solid text-2xl rounded-[15%] hover:bg-primary hover:text-white">Buy Now</button>
                    </div>
                </div>
            </section>
            <section className="w-full h-[60vh] sm:h-screen flex justify-center items-center">
                <div className="w-[350px] tablet:w-[640px] md:w-[768px] lg:w-[1024px] 2xl:w-[1280px] bg-white flex justify-center md:justify-start  items-start">
                    <div className="w-full md:w-[70%] md:pr-14 lg:pr-28">
                        <h1 className="text-md md:text-xl lg:text-2xl text-zinc-800 mb-3 md:mb-5 lg:mb-10 font-[400] md:font-normal font-secondary">About Us ?</h1>
                        <h2 className="text-xl md:text-2xl lg:text-5xl font-[500] md:font-[300]">Everything revolves around the coffee house.</h2>
                        <p className="ms-0 me-0 font-sans mt-3 md:mt-5 lg:mt-10 font-[300] md:font-normal text-sm md:text-md tracking-wide">Welcome to Madame's Cafe, a cafe where you can enjoy delicious coffee and pastries. We've been serving the community since 2021,
                            and we're proud to be a place where people can relax, and enjoy a great cup of coffee.</p>
                        <p className="ms-0 me-0 font-sans mt-4 md:mt-5 lg:mt-10 font-[300] md:font-normal text-sm md:text-md tracking-wide">Our story began when we opened the first Madame's Cafe location in Butuan City. We are passionate about coffee and wanted to create
                            a place where people could come and enjoy a high-quality cup of coffee in a welcoming atmosphere. Over the years, Madame's Cafe has
                            grown to become a popular destination for coffee lovers and locals.</p>
                    </div>
                    <div className="hidden md:block w-[30%]">
                        <img className="" src={require('../assets/1.jpg')} alt="coffe.jpg"/>
                    </div>
                </div>
            </section>
            <section className="w-full bg-gray flex justify-center">
                <div className="w-[350px] tablet:w-[640px] md:w-[768px] lg:w-[1024px] 2xl:w-[1280px]">
                    <div className="w-full py-20 flex flex-col md:flex-row justify-between bg-gray">
                        <div className="w-full md:w-[calc(100%/4-30px)] flex flex-col">
                            <span className="font-primary text-3xl mb-5">Awesome Aroma</span>
                            <p>Our freshly brewed coffee's rich
                                scent, combined with our pastries'
                                sweet aroma, are an integral part
                                of the delightful experience we
                                offer, creating a symphony of
                                flavors and fragrances for our
                                customers to savor.</p>
                        </div>
                        <div className="w-full md:w-[calc(100%/4-30px)] flex flex-col pt-6 md:pt-0">
                            <span className="font-primary text-3xl mb-5">High Quality</span>
                            <p>Our commitment to high-quality
                                ingredients and preparation
                                methods ensures that every pastry
                                and cup of coffee served at
                                Madame's Cafe meets the highest
                                standards. Taste and quality are
                                our top priorities.</p>
                        </div>
                        <div className="w-full md:w-[calc(100%/4-30px)] flex flex-col pt-6 md:pt-0">
                            <span className="font-primary text-3xl mb-5">Pure Grades</span>
                            <p>We source our ingredients
                                meticuously to ensure that they
                                meet the purest grades of
                                excellence. From coffee beans to
                                pastry ingredients, we select only
                                the finest, offering you a taste of
                                authenticity and purity with every
                                order.</p>
                        </div>
                        <div className="w-full md:w-[calc(100%/4-30px)] flex flex-col pt-6 md:pt-0">
                            <span className="font-primary text-3xl mb-5">Proper Roasting</span>
                            <p>With proper roasting techniques,
                                we ensure that every coffee bean
                                reaches its full flavor potential,
                                delivering an exceptional coffee
                                experience to our valued
                                customers.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default HomePage;
