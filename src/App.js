import { useState } from "react";
import "./App.css";

import s1 from "./images/Star 1.svg";
import s2 from "./images/Star 2.svg";
import s3 from "./images/Star 3.svg";
import s4 from "./images/Star 4.svg";
import s5 from "./images/Star 5.svg";
import s6 from "./images/Star 6.svg";

function App() {
  const [h, setH] = useState(false);
  const [d, setD] = useState(false);

  return (
    <div
      className={`w-screen select-none h-screen bg-[black] flex items-center justify-center`}
    >
      <div className="absolute top-0 text-[white] font-['Fondamento'] text-2xl mt-10">
        Hover, Click, Hold, Release ...
      </div>

      <img
        onMouseEnter={() => {
          setH(true);
        }}
        onMouseLeave={() => {
          setH(false);
          setD(false);
        }}
        className={`absolute z-30 w-auto transition-c h-auto object-cover ${
          h
            ? "rotate-[174deg] scale-150 translate-x-[180px] -translate-y-[90px]"
            : "translate-x-[90px] -translate-y-[20px] opacity-0"
        } ${
          d
            ? "rotate-[274deg] scale-50 translate-x-[210px] -translate-y-[130px]"
            : ""
        }`}
        src={s1}
      />

      <img
        onMouseEnter={() => {
          setH(true);
        }}
        onMouseLeave={() => {
          setH(false);
          setD(false);
        }}
        className={`absolute z-30 w-auto transition-c h-auto object-cover ${
          h
            ? "rotate-[-120deg] scale-150 translate-x-[170px] translate-y-[70px]"
            : "translate-x-[90px] translate-y-[20px] opacity-0"
        } ${
          d
            ? "rotate-[-220deg] scale-50 translate-x-[210px] translate-y-[120px]"
            : ""
        }`}
        src={s2}
      />

      <img
        onMouseEnter={() => {
          setH(true);
        }}
        onMouseLeave={() => {
          setH(false);
          setD(false);
        }}
        className={`absolute z-30 w-auto transition-c h-auto object-cover ${
          h
            ? "rotate-[200deg] scale-150 -translate-x-[190px] translate-y-[60px]"
            : "-translate-x-[90px] translate-y-[20px] opacity-0"
        } ${
          d
            ? "rotate-[400deg] scale-50 -translate-x-[230px] translate-y-[100px]"
            : ""
        }`}
        src={s3}
      />

      <img
        onMouseEnter={() => {
          setH(true);
        }}
        onMouseLeave={() => {
          setH(false);
          setD(false);
        }}
        className={`absolute z-30 w-auto transition-c h-auto object-cover ${
          h
            ? "rotate-[-179deg] scale-150 -translate-x-[140px] -translate-y-[70px]"
            : "-translate-x-[90px] -translate-y-[20px] opacity-0"
        } ${
          d
            ? "rotate-[-279deg] scale-50 -translate-x-[170px] -translate-y-[120px]"
            : ""
        }`}
        src={s4}
      />

      <img
        onMouseEnter={() => {
          setH(true);
        }}
        onMouseLeave={() => {
          setH(false);
          setD(false);
        }}
        className={`absolute z-30 w-auto transition-c h-auto object-cover ${
          h
            ? "rotate-[300deg] scale-150 -translate-x-[10px] -translate-y-[90px]"
            : "-translate-x-[20px] -translate-y-[20px] opacity-0"
        } ${
          d
            ? "rotate-[500deg] scale-50 -translate-x-[40px] -translate-y-[140px]"
            : ""
        }`}
        src={s5}
      />

      <img
        onMouseEnter={() => {
          setH(true);
        }}
        onMouseLeave={() => {
          setH(false);
          setD(false);
        }}
        className={`absolute z-30 w-auto transition-c h-auto object-cover ${
          h
            ? "rotate-[-240deg] scale-150 -translate-x-[20px] translate-y-[90px]"
            : "-translate-x-[20px] translate-y-[20px] opacity-0"
        } ${
          d
            ? "rotate-[-390deg] scale-50 -translate-x-[10px] translate-y-[160px]"
            : ""
        }`}
        src={s6}
      />
      <div
        onMouseEnter={() => {
          setH(true);
        }}
        onMouseLeave={() => {
          setH(false);
          setD(false);
        }}
        onMouseDown={() => {
          setD(true);
        }}
        onMouseUp={() => {
          setD(false);
        }}
        className={`cursor-default absolute overflow-hidden transition-c z-10 w-max h-max py-6 px-16 border-[white] border-[1px] rounded-full bg-[black] ${
          h ? "rotate-[-10deg] scale-150" : ""
        } ${d ? "translate-y-5 -translate-x-1" : ""}`}
      >
        <div
          className={`skew-x-12 absolute transition-c w-[20px] h-[400px] -translate-y-[200px] bg-[white] left-[-70px] ${
            h ? "translate-x-[295px]" : ""
          }`}
        />
        <div
          className={`skew-x-12 absolute transition-c w-[5px] h-[400px] -translate-y-[200px] bg-[white] left-[-40px] ${
            h ? "translate-x-[295px]" : ""
          }`}
        />
        <div
          className={`select-none text-[white] font-['Fondamento'] text-2xl`}
        >
          Click Me
        </div>
      </div>
      <div
        className={`absolute overflow-hidden transition-c w-max h-max py-6 px-16 border-[white] border-[1px] rounded-full ${
          h ? "rotate-[-10deg] scale-150 translate-y-5 -translate-x-1" : ""
        }`}
      >
        <div className={`text-[#ffffff00] font-['Fondamento'] text-2xl`}>
          Click Me
        </div>
      </div>
    </div>
  );
}

export default App;
