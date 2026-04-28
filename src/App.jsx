import { useState } from "react";
import Header from "./components/Header";

const Flexbox = () => {
  const handleReset = () => {
    setjustify("justify-center");
    setalign("items-center");
  };
  const [justify, setjustify] = useState("justify-center");
  const [align, setalign] = useState("items-center");
  const [direction, setdirection] = useState("");
  const [wrap, setwrap] = useState("");
  const [grow, setgrow] = useState("");
  return (
    <div className="fullpage bg-page">
      <div className="parent">
        <div className="one">
          {/* -------components--- */}
          <Header onReset={handleReset} />
          <div className="first">
            <h2 className=" flex justify-center items-center text-slate-700">
              flex-direction
            </h2>
            <div className="main">
              <div className="box-parent">
                <div className={`box bg-bg-box ${direction}`}>
                  <div className="jline1 bg-line1"></div>
                  <div className="jline2 bg-line2"></div>
                  <div className="jline3 bg-line3"></div>
                </div>
              </div>
              <div className="btns text-slate-800 ">
                <p onClick={() => setdirection("flex-row")}>row</p>
                <p onClick={() => setdirection("flex-row-reverse")}>
                  row-reverse
                </p>
                <p onClick={() => setdirection("flex-col")}>column</p>
                <p onClick={() => setdirection("flex-col-reverse")}>
                  column-reverse
                </p>
              </div>
            </div>
          </div>
          <div className="first">
            <h2 className=" flex justify-center items-center text-slate-700">
              flex-wrap
            </h2>
            <div className="main">
              <div className="box-parent">
                <div className={`box bg-bg-box ${wrap}`}>
                  <div className="wline1 bg-line1"></div>
                  <div className="wline2 bg-line2"></div>
                  <div className="wline3 bg-line3"></div>
                </div>
              </div>
              <div className="btns text-slate-800 ">
                <p onClick={() => setwrap("flex-nowrap")}>nowrap</p>
                <p onClick={() => setwrap("flex-wrap")}>wrap</p>
                <p onClick={() => setwrap("flex-wrap-reverse")}>
                  flex-wrap-reverse
                </p>
              </div>
            </div>
          </div>
          <div className="first">
            <h2 className=" flex justify-center items-center text-slate-700">
              flex-grow
            </h2>
            <div className="main">
              <div className="box-parent">
                <div className="box bg-bg-box">
                  <div className="gline1 bg-line1"></div>
                  <div className={`gline2 bg-line2 ${grow}`}></div>
                  <div className="gline3 bg-line3"></div>
                </div>
              </div>
              <div className="btns text-slate-800 ">
                <p onClick={() => setgrow("grow-0")}>0</p>
                <p onClick={() => setgrow("grow")}>1</p>
              </div>
            </div>
          </div>
          <div className="first">
            <h2 className=" flex justify-center items-center text-slate-700">
              justify-content
            </h2>
            <div className="main">
              <div className="box-parent">
                <div className={`box bg-bg-box ${justify}`}>
                  <div className="jline1 bg-line1"></div>
                  <div className="jline2 bg-line2"></div>
                  <div className="jline3 bg-line3"></div>
                </div>
              </div>
              <div className="btns text-slate-800 ">
                <p onClick={handleReset}>RESET</p>
                <p onClick={() => setjustify("justify-start")}>flex-start</p>
                <p onClick={() => setjustify("justify-end")}>flex-end</p>
                <p onClick={() => setjustify("justify-center")}>flex-center</p>
                <p onClick={() => setjustify("justify-between")}>
                  space-between
                </p>
                <p onClick={() => setjustify("justify-around")}>space-around</p>
                <p onClick={() => setjustify("justify-evenly")}>space-evenly</p>
              </div>
            </div>
          </div>
          <div className="first">
            <h2 className=" flex justify-center items-center text-slate-700">
              align-items
            </h2>
            <div className="main">
              <div className="box-parent">
                <div className={`box bg-bg-box ${align}`}>
                  <div className="aline1 bg-line1"></div>
                  <div className="aline2 bg-line2"></div>
                  <div className="aline3 bg-line3"></div>
                </div>
              </div>
              <div className="btns text-slate-800 ">
                <p onClick={() => setalign("items-start")}>flex-start</p>
                <p onClick={() => setalign("items-end")}>flex-end</p>
                <p onClick={() => setalign("items-center")}>flex-center</p>
                <p onClick={() => setalign("items-stretch")}>stretch</p>
                <p onClick={() => setalign("items-baseline")}>baseline</p>
              </div>
            </div>
          </div>
        </div>
        <div className="two flex flex-col justify-end">
          <div className="credit flex justify-end text-slate-700">Made by</div>
          <div className="credit flex justify-end text-slate-700">itsanxhu</div>
        </div>
      </div>
    </div>
  );
};

export default Flexbox;
