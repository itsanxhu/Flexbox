import { useState } from "react";
import Header from "./Components/Header";

const Flexbox = () => {
  const [align, setalign] = useState("");
  return (
    <div className="fullpage">
      <Header />

      <div className="parent">
        <div className="first">
          <h2 className="flex justify-center items-center text-neutral-500 ">
            justify-content
          </h2>
          <div className="main">
            <div className="box-parent">
              <div className={`box ${align}`}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
            <div className="btns">
              <a>
                <p onClick={() => setalign("flex-start")}>flex-start</p>
              </a>
              <a>
                <p onClick={() => setalign("flex-center")}>flex-center</p>
              </a>
              <a>
                <p onClick={() => setalign("flex-end")}>flex-end</p>
              </a>
              <a>
                <p onClick={() => setalign("flex-space-btw")}>space-between</p>
              </a>
              <a>
                <p onClick={() => setalign("flex-space-around")}>
                  space-around
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="credit">Made by itsanxhu</div>
        </div>
      </div>
    </div>
  );
};

export default Flexbox;
