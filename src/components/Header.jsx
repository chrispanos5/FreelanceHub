import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../redux/authActions";

function Header() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signout());
    navigate("/signin");
  }

  return (
    <header className="header">
      <h1 className="logo" onClick={() => navigate("/")}>
        FreelanceHub
      </h1>
      <nav>
        {isAuthenticated ? (
          <button className="nav-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <>
            <button className="nav-btn" onClick={() => navigate("/signin")}>
              Sign In
            </button>
            <button className="nav-btn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
