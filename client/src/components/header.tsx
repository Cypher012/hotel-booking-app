import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Hotel Booking</div>
        <nav className="flex space-x-5 items-center">
          <ul className="flex space-x-4">
            <li>
              <Link to={"/"} className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to={"/login"}
            className="hover:bg-blue-300 hover:text-slate-50 transition duration-300 text-blue-600 font-semibold bg-slate-200 py-2 px-4 rounded-md"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
