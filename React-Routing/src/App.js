import { Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/LoginSign/Login";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import ElectricityBillEnquiry from "./component/ElectricityBillEnquiry";
import Team from "./component/Team";
import WaterBillEnquiry from "./component/WaterBillEnquiry";
import Deposit from "./component/Deposit";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Payment from "./component/Payment";
import Admin from "./component/Admin";
import ForgetPassword from "./component/LoginSign/ForgetPassword";
import RecoveryPassword from "./component/LoginSign/RecoveryPassword";
import FormComponent from "./component/FormComponent";
import OTPVerification from "./component/OTPVerification";
import Dashboard from "./component/Dashboard";
import Footer from "./component/Footer/Footer";
import AboutLeadG2 from "./component/Footer/AboutLeadG2";
import Privacy from "./component/Footer/Privacy";
import { ContactUs } from "./component/Footer/ContactUs";
import Logout from "./component/LoginSign/Logout";

import UserPage from "./component/UserPage";
import PaymentReceipt from "./component/PaymentReceipt";
import NoNavbar from "./component/NoNavbar/NoNavbar";
import NoFooter from "./component/NoNavbar/NoFooter";
import AdminPage from "./component/AdminPage";
import TransactionHistory from "./component/TransactionHistory";
import PinPage from "./component/PinPage";
import PinSetPage from "./component/PinSetPage";
import UpdateUserInfo from "./component/UpdateUserInfo";
import PaymentTransaction from "./component/PaymentTransaction";
// import TransferPin from "./component/TransferPin";

function App() {
  return (
    <>
      <NoNavbar navbar={<Navbar />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/team" element={<Team />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Deposit" element={<Deposit />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/RecoveryPassword" element={<RecoveryPassword />} />
          <Route path="/WaterBillEnquiry" element={<WaterBillEnquiry />} />
          <Route
            path="/ElectricityBillEnquiry"
            element={<ElectricityBillEnquiry />}
          />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/FormComponent" element={<FormComponent />} />
          <Route path="/OTPVerification" element={<OTPVerification />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/AboutLeadG2" element={<AboutLeadG2 />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/TransactionHistory" element={<TransactionHistory />} />
          <Route path="/PaymentReceipt" element={<PaymentReceipt />} />
          <Route path="/PinPage" element={<PinPage />} />
          <Route path="/PinSetPage" element={<PinSetPage />} />
          <Route path="/UpdateUserInfo" element={<UpdateUserInfo />} />
          <Route path="/PaymentTransaction" element={<PaymentTransaction />} />
          {/* <Route path="/TransferPin" element={<TransferPin />} /> */}
        </Routes>
      </NoNavbar>
      <br />
      <NoFooter>
        <Footer />
      </NoFooter>
    </>
  );
}

export default App;
