import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import style from "./HomeCard.module.css";
import { GrFormClose } from "react-icons/gr";
import { VscChromeMaximize } from "react-icons/vsc";
import { HiMinusSm } from "react-icons/hi";

function HomeCard() {
  const inputEl = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [preInputs, setPreInputs] = useState([]);
  const [inputResult, setInputResult] = useState([]);
  const [rootUser, setRootUser] = useState("root@kali :~$");

  const command = {
    whois: "My Name is Devarshi Patel. I am a Web Developer.",
    hobby: ["coding", " cricket", " chess"],
    hi: "Hi... Welcome to my Website :)",
    github: "https://github.com/dpatel-8112",
    portfolio: "http://amazingdotdp.me/portfolio/",
    "--help":
      "For the list of Commands type : ls And then type any one of the command to get its results. Thank YOu!",
    ls: ["hi", " whois", " hobby", " portfolio", " github"],
  };

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setInputResult([]);

    for (var i in command) {
      // console.log(command[i]);
      if (i == inputValue) {
        setInputResult([command[i]]);
        // console.log([command[i]]);
      }
    }
  };

  useEffect(() => {
    inputEl.current.focus();

    if (inputResult != null) {
      setPreInputs([
        ...preInputs,
        inputValue ? (
          <span className={style.InputResult}>
            <span className={style.UserRoot}>{rootUser}</span>
            <span className={style.InputContainer}>{inputValue}</span>
            <span className={style.Result}>{inputResult}</span>
          </span>
        ) : (
          ""
        ),
      ]);
    }

    if (inputValue == "github" || inputValue == "portfolio") {
      if (window.confirm(`Would you like to visit my ${inputValue}`)) {
        window.location.href = `${command[inputValue]}`;
      }
    }

    setInputValue("");

    return () => {};
  }, [inputResult]);

  return (
    <>
      <Card className={style.CardContainer}>
        <Card.Header className={style.CardHeader}>
          <GrFormClose className={style.CloseIcon} />
          <VscChromeMaximize className={style.MaximizeIcon} />
          <HiMinusSm className={style.MinimizeIcon} />
        </Card.Header>
        <Card.Body className={style.CardBody}>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>
            {preInputs}

            <span style={{ display: "block" }}>
              <span className={style.UserRoot}>{rootUser}</span>
              <span className={style.InputContainer}>
                <form action="" onSubmit={formSubmitHandler}>
                  <input
                    ref={inputEl}
                    type="text"
                    value={inputValue}
                    onChange={inputValueHandler}
                  />
                </form>
              </span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <div className={style.Notice}>
        <mark>
          PS : type '<code>ls</code>' AND '<code>--help</code>' for commands!
        </mark>
      </div>

      <div style={{ display: "flex" }}>
        <div className={style.LinkToPortfolio}>
          <a target="_blank" href="http://amazingdotdp.me/portfolio/">
            PortFolio
          </a>
        </div>
        <div className={style.LinkToPortfolio}>
          <a target="_blank" href="http://amazingdotdp.me/web-projects/">
            Web Projects
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
