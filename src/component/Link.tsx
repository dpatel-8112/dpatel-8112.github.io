import React from "react";

interface Props {
    link: string;
    displayName: string;
}

const Link = (props: Props) => {
    return (
        <div style={{ margin: "10px 0px" }}>
            {/* ✅ Add rel="noopener noreferrer" for security when using target="_blank"
      */}
            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                // download={props.displayName}
            >
                <div className="Link_Container">
                    <div className="Link">{props.displayName}</div>
                </div>
            </a>
        </div>
    );
};

export default Link;