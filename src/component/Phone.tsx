import React from "react";
import "../style/Phone.css";
// import profile from "../images/profile.jfif";
import profile from "../images/profile-2.jpg";
import Link from "./Link";
import Social from "./Social";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

interface Props {}

const Phone = (props: Props) => {
  return (
    <div className="Phone_Container">
      <div className="Image_Container">
        <img src={profile} alt="" />
      </div>
      <div className="Heading_Container">
        <div className="Name">Devarshi Patel</div>
        <div className="Greeting">નમસ્તે</div>
      </div>
      <div className="Links_Container">
        <Link
          link="http://devarshipatel.tech/portfolio"
          displayName="Portfolio"
        />
        <Link
          link="https://drive.google.com/file/d/1toGeO7d-QVnp44_C9i49AyjGkEIZi7d_/view?usp=sharing"
          displayName="Resume"
        />
      </div>
      <div className="Social_Container">
        <Social link="mailto:devarshi-patel@outlook.com" icon={AiOutlineMail} />
        <Social
          link="https://www.linkedin.com/in/devarshi-dot-patel"
          icon={AiOutlineLinkedin}
        />
        <Social link="https://github.com/dpatel-8112" icon={AiOutlineGithub} />
        <Social
          link="https://www.instagram.com/devarshi_patel_/"
          icon={AiOutlineInstagram}
        />
      </div>
    </div>
  );
};

export default Phone;
