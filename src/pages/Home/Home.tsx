import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { withRouter } from "react-router-dom";

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
        if you like my work,please support by
      </div>
    </div>
  );
};
export default withRouter(Home);
