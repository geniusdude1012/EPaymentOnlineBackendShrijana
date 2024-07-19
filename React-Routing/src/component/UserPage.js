import React, { useState, useEffect } from "react";
import "./../component/UserPage.css";
import { Link, useNavigate } from "react-router-dom";
import back2 from "./../component/assets/back6.avif";
import profile from "./assets/profile.jpg";
import axios from "axios";

const UserPage = () => {
  const [userdata, setuserdata] = useState({});
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const response = await axios.get("http://localhost:8000/dashboard", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data;
      console.log(data);
      setuserdata(data);
      if (response.status !== 200) {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error(error);
      navigate("/Login");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <div className="containerUser">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar1">
            <img src={profile} alt="User Avatar" className="avatar" />
          </div>
          <h3>User Name Display</h3>
        </div>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Dashboard">
              <li>Dashboard</li>
            </Link>
          </ul>
        </nav>
      </aside>
      <main
        className="main-content"
        style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}
      >
        <section className="about">
          <h1>Profile Information</h1>
          <div className="info">
            <p>
              <strong className="name">Full Name</strong> {userdata.name}
            </p>
            <p>
              <strong className="name">Email</strong> {userdata.email}
            </p>
            <p>
              <strong className="name">Phone</strong>
              {userdata.contactno}
            </p>
            <p>
              <strong className="name">Address</strong>
              {userdata.address}
            </p>
          </div>
        </section>
        {/* <section className="recent-projects">
          <h3>Recent Projects</h3>
          <div className="projects">
            <div className="project">
              <p><strong>Project Name:</strong> Project Description</p>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default UserPage;
