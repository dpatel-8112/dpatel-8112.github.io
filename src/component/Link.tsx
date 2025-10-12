import React from "react";

interface Props {
  link: string;
  displayName: string;
}

const Link = (props: Props) => {
  return (
    <div style={{ margin: "10px 0px" }}>
      <a href={props.link} target="_blank">
        <div className="Link_Container">
          <div className="Link">{props.displayName}</div>
        </div>
      </a>
    </div>
  );
};

export default Link;
