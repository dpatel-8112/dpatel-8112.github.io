import React from "react";
import "../style/Home.css";
import Phone from "./Phone";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="Home_Container">
      <Phone />
    </div>
  );
};

export default Home;
