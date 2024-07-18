import React from "react";
import "./../LoginSign/Logout.css";
import load from "./../assets/profile.jpg";
import back2 from "./../assets/back6.avif";
import back1 from "./../assets/pic1.webp";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const signout = async () => {
    const logoutt = await axios
      .get("http://localhost:8000/logout", {
        withCredentials: true,
      })
      .then((response) => navigate("/Login"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div
        class="card-container"
        style={{ backgroundImage: `url(${back1})`, backgroundSize: "cover" }}
      >
        <div
          class="upper-container"
          style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}
        >
          <div class="image-container">
            <img src={load} />
          </div>
        </div>

        <div
          class="lower-container"
          style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}
        >
          <div>
            <h3>User Name</h3>
          </div>
          <div>
            <p>Are you sure want to logout??</p>
          </div>
          <div>
            <a onClick={signout} class="btn">
              Yes
            </a>
            <a href="/Dashboard" class="btn">
              No
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
