import Logo from "../photos/front-page-photo.jpg";
import { useNavigate } from "react-router-dom";

export default function FrontPage() {
  const navigate = useNavigate();

  function handleSignInClick() {
    navigate("/signin");
  }

  function handleSignUpClick() {
    navigate("/signup");
  }

  return (
    <>
      <div className="front-page-container">
        <h1 className="overlay-title">Welcome to FreelanceHub</h1>
        <p className="join-description">
          "Join the FreelanceHub community today ... where talent meets
          opportunity! Sign in now to connect, collaborate, and grow your
          freelance career."
        </p>
        <img src={Logo} />
        <div className="front-buttons-container">
          <button className="btn" onClick={handleSignInClick}>
            Sign In
          </button>
          <button className="btn" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
