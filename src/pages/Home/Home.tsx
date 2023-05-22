import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Home = ({ children }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleToggleNavbar = () => {
    setIsNavbarVisible((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar />
      <div id="content" className={!isNavbarVisible ? "active" : ""}>
        {children}
      </div>
    </div>
  );
};
export default Home;
