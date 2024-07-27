// import React, { useState } from "react";
// import "./../LoginSign/ForgetPassword.css";
// import { Link } from "react-router-dom";
// import back1 from "./../assets/black3.avif";
// const ForgetPassword = () => {
//   const [email, setEmail] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Email submitted:", email);
//     const { email } = user;
//     if (email) {
//       const registerr = await axios
//         .post("http://localhost:8000/forgetpassword", user)
//         .then((response) => {
//           if (response.data.status === "success") {
//             navigate("/Dashboard");
//             alert("Login successful");
//           } else if (response.data.status === "error") {
//             alert("Incorrect password");
//           } else {
//             alert("User not registered");
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       alert("Invalid entry");
//     }
//   };

//   return (
//     <div
//       className="forget-password-container"
//       style={{ backgroundImage: `url(${back1})`, backgroundSize: "cover" }}
//     >
//       <form onSubmit={handleSubmit}>
//         <h4>Forgot Password</h4>
//         <p> </p>
//         <p> </p>
//         <input
//           type="email"
//           placeholder="Enter Your Valid Email"
//           value={email}
//           onChange={handleEmailChange}
//           required
//         />
//         <button type="submit">Send Code</button>
//       </form>
//     </div>
//   );
// };

// export default ForgetPassword;
