import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-semibold text-lg">
          Dashboard
        </Link>
        <div className="space-x-4">
          <Link to="/signin" className="text-white hover:underline">
            Signin
          </Link>
          <Link to="/signup" className="text-white hover:underline">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
