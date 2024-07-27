import { React, useState, useEffect } from "react";
import back2 from "./../component/assets/back6.avif";
import { useNavigate, useLocation } from "react-router-dom";
import "./../component/PinPage.css";
import axios from "axios";
import PinSetPage from "./PinSetPage";

const PinPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const total = location.state?.total;
  const [userdata, setuserdata] = useState({});
  const [pin, setPin] = useState(["", "", "", ""]);
  const callAboutPage = async () => {
    try {
      const response = await axios.get("http://localhost:8000/dashboard", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = response.data;
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

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      if (value !== "" && index < 3) {
        document.getElementById(`pin-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle PIN submission
    console.log("Entered PIN:", pin.join(""));
    if (parseFloat(pin) <= 0) {
      alert("Amount must be a positive number.");
      return;
    }
    const tpin = pin.join("");
    const email = userdata.email;
    try {
      const response = await axios.post(
        "http://localhost:8000/transactionpin",
        {
          tpin,
          email,
          total,
        }
      );
      if (response.data.status === "success") {
        alert("Payment successful");
        navigate("/Dashboard"); // Navigate to the Dashboard after successful deposit
      } else if (response.data.status === "incorrect") {
        alert("Incorrect pin");
      } else {
        alert("Payment failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during the deposit.");
    }
  };

  return (
    <div className="heropin">
      <div
        className="pin-container"
        style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="pin-header">
            <h5>Enter Transaction Pin</h5>
          </div>

          <div className="pin-inputs">
            {pin.map((digit, index) => (
              <input
                key={index}
                id={`pin-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="pin-input"
              />
            ))}
          </div>
          <button className="continue-button">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default PinPage;
