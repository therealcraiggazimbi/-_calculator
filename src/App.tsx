import React, { useState } from "react";
import Lable from "./Lable";
import Screen from "./Screen";

const App = () => {
  const box: any = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ",",
    "=",
  ];

  const [value, setValue] = useState(0);
  return (
    <>
      <Lable />
      <Screen _currentValue={value} _setValue={setValue} />
      <div className="calculator-container">
        {box.map((value: any) => {
          return (
            <div
              className="box"
              onClick={() => {
                console.log(value);
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
