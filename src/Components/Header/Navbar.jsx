import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import MyContext from "../Context/MyContext";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const Navbar = () => {
  const { setToken } = useContext(MyContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("authToken");
      setToken("");
      console.log("User signed out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-between mx-auto conatiner ">
        <div className="px-10 logo">
        <Link to={'/'}>  <img className="w-12 rounded-full" src={logo} alt="" /></Link>
        </div>
        <div className="flex items-center justify-between gap-10 px-10 cursor-pointer ">
          {localStorage.getItem("authToken") ? (
            <Link to="/cart">
              {" "}
              <i className="text-2xl fa-solid fa-cart-shopping"></i>
            </Link>
          ) : (
            ""
          )}

          <div className="px-2 py-1 font-bold text-blue-500 border-2 border-blue-400 rounded-md ">
            {localStorage.getItem("authToken") ? (
              <button onClick={handleLogout} className="text-sm">
                Logout{" "}
              </button>
            ) : (
              <Link to="/login" className="text-sm">
                LOG IN/SIGN UP{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
