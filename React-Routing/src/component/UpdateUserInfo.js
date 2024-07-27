import React from "react";
import "./../component/UpdateUserInfo.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import back1 from "./../component/assets/back1.avif";
import Swal from "sweetalert2";

const UpdateUserInfo = () => {
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
  const [user, setUser] = useState({
    name: "",
    password: "",
    cpassword: "",
    token: "",
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, password, cpassword, contactno, address } = user;
    const email = userdata.email;
    if (
      name &&
      password &&
      contactno &&
      address &&
      cpassword &&
      password === cpassword
    ) {
      const register = await axios
        .post("http://localhost:8000/updateuser", {
          name,
          email,
          contactno,
          address,
          cpassword,
          password,
          cpassword,
        })
        .then((response) => {
          if (response.data.status === "success") {
            Swal.fire({
              title: "Update Alert",
              text: "Update succesfull",
              icon: "success",
              confirmButtonText: "OK",
            });

            navigate("/Dashboard");
          } else {
            alert("User already registered");
          }
        })
        .catch((error) => {
          console.log(error.message);
          alert("Update failed");
        });
    } else {
      alert("Email has been registered already");
    }
  };

  return (
    <div
      className="flex flex-col justify-between max-w-2xl px-4 lg:pt-16 lg:flex-row md:px-8 lg:max-w-full"
      style={{ backgroundImage: `url(${back1})`, backgroundSize: "cover" }}
    >
      <div
        className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          margin: "20px",
        }}
      >
        {/* <div className="max-w-xl mb-6">
          {console.log(user)}
          <p class="text-base text-gray-700 md:text-lg">
            <h1>Simple & Fast Payment.</h1>
          </p>
        </div> */}
        {/* <div className="flex items-center">
          <div class="btn-group">
            <a href="/Register" class="btn btn-dark active" aria-current="page">
              Register Now
            </a>
          </div>
        </div> */}
      </div>
      <div className="register-container">
        <div className="register-form">
          <h2>Update Your Information</h2>
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Enter your Name"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter New Password"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="cpassword"
              value={user.cpassword}
              placeholder="Confirm password"
              onChange={handleChange}
              required
            />
            <input
              type="value"
              name="contactno"
              value={user.contactno}
              placeholder="Phone number"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              value={user.address}
              placeholder="Enter address"
              onChange={handleChange}
              required
            />
            {/* <div className="terms">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to all statements in <a href="#">Terms of Service</a>
              </label>
            </div> */}

            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserInfo;
