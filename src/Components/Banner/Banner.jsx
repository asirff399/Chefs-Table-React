import { FaSearch } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
const Banner = () => {
    return (
        <div className="w-[1320] h-[600px] mx-auto rounded-2xl bg-[url('images/close-up-person-cooking_23-2150980270.jpg')] bg-no-repeat bg-cover">
            <div className="w-4/6 mx-auto h-full flex flex-col justify-center items-center gap-5">
                <div className="text-center">
                    <h1 className="text-6xl text-white leading-normal font-bold">Discover an exceptional cooking class tailored for you!</h1>
                </div>
                <div className="w-5/6 text-center">
                    <p className="text-slate-200">Discover the ultimate cooking experience! Learn to craft mouthwatering dishes, master culinary secrets, and explore global flavors. Perfect for food lovers—turn your passion into perfection today!</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center bg-green-400 text-black font-bold py-2 px-6 rounded-full hover:bg-green-500 transition duration-300">
                        <FaSearch className="mr-2" /> 
                        Explore Now
                    </button>
                    <button className="flex items-center border-2 border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300">
                        <FiMessageCircle className="mr-2" />
                        Our Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;