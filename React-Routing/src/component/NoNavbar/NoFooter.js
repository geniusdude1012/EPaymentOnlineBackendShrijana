import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function NoFooter({ children }) {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    console.log("Current location:", location.pathname);

    const pathsToHideFooter = [
      "/PinSetPage",
      "/transactionhistory",
      "/logout",
      "/waterbillenquiry",
      "/electricitybillenquiry",
      "/PinPage"
    ];

    // Normalize the current path to lowercase and remove leading/trailing slashes
    const normalizedPath = location.pathname.toLowerCase().replace(/\/+$/, "").replace(/^\/+/, "");
    
    // Check if the normalized path is in the pathsToHideFooter array
    const shouldHideFooter = pathsToHideFooter.some(path => path.replace(/^\/+/, "").toLowerCase() === normalizedPath);
    
    console.log("Normalized path:", normalizedPath);
    console.log("Should hide footer:", shouldHideFooter);

    setShowFooter(!shouldHideFooter);
  }, [location]);

  return <div>{showFooter && children}</div>;
}

export default NoFooter;
