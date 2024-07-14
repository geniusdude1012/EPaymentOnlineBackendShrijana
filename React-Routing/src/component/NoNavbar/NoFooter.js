// import React from 'react';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//DISPLAYING NAVBAR FOR SOME CERTAIN PAGES  ONLY
function NoFooter({ children }) {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    console.log("this is location: ", location.pathname);

    const pathsToHideNavbar = ["/Logout"];
    if (pathsToHideNavbar.includes(location.pathname)) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
}

export default NoFooter;
