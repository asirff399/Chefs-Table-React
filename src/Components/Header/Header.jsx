import { IoSearch } from "react-icons/io5";
import { PiUserCircleCheckThin } from "react-icons/pi";
const Header = () => {
    return (
        <div className="flex justify-between items-center my-11">
            <div className="text-3xl font-bold">Recipe Calories</div>
            <div className="flex justify-evenly gap-5">
                <h1 className="text-slate-600">Home</h1>
                <h1 className="text-slate-600">Recipe</h1>
                <h1 className="text-slate-600">About</h1>
                <h1 className="text-slate-600">Search</h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm"><IoSearch />
                    <input type="text" placeholder="Search" className="bg-transparent outline-none pl-2 text-gray-700 placeholder-gray-400 focus:ring-0"/>
                </div>
                <div className="bg-green-400 rounded-full p-2 text-3xl font-semibold"><PiUserCircleCheckThin /></div>
            </div>

        </div>
    );
};

export default Header;