import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

interface Props {
  icon: any;
  link: string;
}

const Social = (props: Props) => {
  const RenderedIcon: any = props.icon;

  return (
    <div className="Social_Link">
      <a href={props.link} target="_blank">
        <RenderedIcon />
      </a>
    </div>
  );
};

export default Social;
