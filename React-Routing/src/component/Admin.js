import React, { useState } from "react";
import "./../component/Admin.css";
import back1 from "./assets/back1.avif";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const [remember, setRemember] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleRememberChange = (e) => {
    setRemember(e.target.checked);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  async function handlesubmit(e) {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      const registerr = await axios
        .post("http://localhost:8000/adminlogin", user)
        .then((response) => {
          if (response.data.status === "success") {
            navigate("/AdminPage");
            alert("Login successful");
          } else if (response.data.status === "error") {
            alert("Incorrect password");
          } else {
            alert("User not registered");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Invalid entry");
    }
  }

  return (
    <div
      className="admin-container"
      style={{ backgroundImage: `url(${back1})`, backgroundSize: "cover" }}
    >
      <form className="admin-form" onSubmit={handlesubmit}>
        <h2>ADMIN</h2>
        <label htmlFor="username">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <div className="remember-container">
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={handleRememberChange}
          />
          <label htmlFor="remember">Remember password</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Admin;
