import React from "react";
import "../style/Phone.css";
// import profile from "../images/profile.jfif";
import profile from "../images/profile-2.jpg";
import Link from "./Link";
import Social from "./Social";

import {LinkData, SocialData} from "../data/portfolioData"


const Phone = () => {
  return (
    <div className="Phone_Container">
        <div className="Top_Container">
          <div className="Image_Container">
            <img src={profile} alt="" />
          </div>
          <div className="Heading_Container">
            <div className="Name">{"Devarshi Patel"}</div>
            <div className="Greeting">નમસ્તે</div>
          </div>
          <div className="Links_Container">
              {LinkData.map((linkItem, index) => (
                <Link
                  key={index}
                  link={linkItem.url}
                  displayName={linkItem.name}
                />
              ))
              }
          </div>
        </div>
      <div className="Social_Container">
        {
          SocialData.map((socialItem, index) => (
            <Social
              key={index}
              link={socialItem.url}
              icon={socialItem.icon}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Phone;
