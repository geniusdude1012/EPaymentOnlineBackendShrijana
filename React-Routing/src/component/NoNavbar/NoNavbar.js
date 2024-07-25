import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function NoNavbar({ children, navbar }) {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    console.log("Current location:", location.pathname);

    const pathsToHideNavbar = [
      '/dashboard',
      '/deposit',
      '/userpage',
      '/adminpage',
      '/payment',
      '/transactionhistory',
      '/paymentreceipt',
      '/otpverification',
      '/admin',
      '/electricitybillenquiry',
      '/waterbillenquiry',
      '/logout'
    ];

    const path = location.pathname.toLowerCase();
    setShowNavbar(!pathsToHideNavbar.includes(path));
  }, [location]);

  return (
    <div>
      {showNavbar && navbar}
      {children}
    </div>
  );
}

export default NoNavbar;
