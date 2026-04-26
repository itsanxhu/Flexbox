import { useState } from "react";
import Header from "./components/Header";

const Flexbox = () => {
  const handleReset = () => {
    setjustify("justify-center");
    setalign("items-center");
  };
  const [justify, setjustify] = useState("justify-center");
  const [align, setalign] = useState("items-center");
  return (
    <div className="fullpage bg-page">
      <div className="parent">
        <div className="one">
          {/* -------components--- */}
          <Header onReset={handleReset} />
          <div className="first">
            <h2 className=" flex justify-center items-center text-slate-700">
              justify-content
            </h2>
            <div className="main">
              <div className="box-parent">
                <div className={`box ${justify}`}>
                  <div className="jline1 bg-line1"></div>
                  <div className="jline2 bg-line2"></div>
                  <div className="jline3 bg-line3"></div>
                </div>
              </div>
              <div className="btns text-slate-800 ">
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
                <div className={`box ${align}`}>
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
                <p onClick={() => setalign("items-auto")}>auto</p>
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
