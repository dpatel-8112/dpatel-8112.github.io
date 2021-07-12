import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import style from "./HomeCard.module.css";
import { GrFormClose } from "react-icons/gr";
import { VscChromeMaximize } from "react-icons/vsc";
import { HiMinusSm } from "react-icons/hi";
import Commands from "./commands.json";

function HomeCard() {
  const inputEl = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [preInputs, setPreInputs] = useState([]);
  const [inputResult, setInputResult] = useState([]);
  const [rootUser, setRootUser] = useState("root@amazing :~$");

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);

    // console.log(e.target.value);
  };

  const externalLinkHandler = (linkItem) => {
    if (window.confirm(`Would you like to visit my ${inputValue}`)) {
      window.open(linkItem.link);
      setInputResult(
        <a target="_blank" href={linkItem.link}>
          {linkItem.link}
        </a>
      );
    } else {
      setInputResult(
        <a target="_blank" href={linkItem.link}>
          {linkItem.link}
        </a>
      );
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setInputResult([]);

    let found = 0;

    Commands.filter((item) => item.command == inputValue).map((fItem) => {
      // console.log(fItem);
      found = 1;

      if (fItem.type == "link") {
        externalLinkHandler(fItem);
        found = 1;
      } else if (fItem.type == "text") {
        let results = [];
        results = fItem.result.map((item) => item + " ");
        setInputResult(results);
      } else {
        let results = [];
        results = fItem.result.map((item) => " ➡ " + item + " ");
        setInputResult(results);
      }
    });

    if (found == 0) {
      setInputResult([
        "'" +
          inputValue +
          "' is not recognized as an internal or external command !!!",
      ]);
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
          <Card.Text style={{ minHeight: "5000px" }}>
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
                  {/* <button type="submit" style={{ display: "none" }}></button> */}
                </form>
              </span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <div className={style.Notice}>
        <mark>
          💻 Type '<code>ls</code>' OR '<code>help</code>' for commands!
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
