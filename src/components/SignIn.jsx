import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/authActions";
import Logo from "../photos/front-page-photo.jpg";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    const success = await dispatch(signIn(email, password));
    if (success) {
      navigate("/dashboard");
    }
  }

  return (
    <div className="sign-in-submit">
      <h1>Welcome back, we missed you!</h1>
      <img src={Logo} />
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label>Email</label>
          <input
            type="email"
            placeholder="type email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label>Password</label>
          <input
            type="password"
            placeholder="type password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Sign In
        </button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}
