import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/authActions";
import Logo from "../photos/front-page-photo.jpg";
import "./SignUp.css";

export default function SignUp() {
  const [submitData, setSubmitData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signUp(submitData));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSubmitData((prevSubmitData) => {
      return { ...prevSubmitData, [name]: value };
    });
  }

  return (
    <div className="sign-up-submit">
      <h1>Join us now!</h1>
      <img src={Logo} />
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label>Email</label>
          <input
            type="email"
            placeholder="type email"
            name="email"
            value={submitData.email}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <label>Password</label>
          <input
            type="password"
            placeholder="type password"
            name="password"
            value={submitData.password}
            required
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
