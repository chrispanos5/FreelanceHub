import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Sidebar.css";
import { signout } from "../redux/authActions";
import { Outlet } from "react-router-dom";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignOut() {
    dispatch(signout());
  }

  return (
    <>
      <div className="sidebar">
        <div className="layout">
          <h2>My Dashboard</h2>
          <ul>
            <li>
              <button onClick={() => navigate("/dashboard")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/myprofile")}>My Profile</button>
            </li>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="outlet-style">
        <Outlet />
      </div>
    </>
  );
}
