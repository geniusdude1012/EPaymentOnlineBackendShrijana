// import React from 'react';
import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
//DISPLAYING NAVBAR FOR SOME CERTAIN PAGES  ONLY
function NoNavbar({children}) {
const location = useLocation();
const[showNavbar,setShowNavbar] = useState(false);
useEffect(() => {
    console.log('this is location: ',location)
    if(location.pathname === '/Dashboard') {
        setShowNavbar(false);
    }
    else{
        setShowNavbar(true);
    }

    
},[location]);

  return (
    <div>{showNavbar && children}</div>
  )
}

export default NoNavbar