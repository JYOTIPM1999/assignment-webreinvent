import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// interface Token {
//   token: string;
// }

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  // const [token, setToken] = useState<Token | null>(null);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   if (storedToken) {
  //     setToken(JSON.parse(storedToken) as Token);
  //   }
  // }, []);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-semibold text-lg">
          Dashboard
        </Link>
        {token ? (
          <div>
            <button
              onClick={() => handleLogout()}
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/signin" className="text-white hover:underline">
              Signin
            </Link>
            <Link to="/signup" className="text-white hover:underline">
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
