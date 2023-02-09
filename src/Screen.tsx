import React from "react";

interface valueProps {
  _currentValue: any;
  _setValue: any;
}

const Screen = ({ _currentValue, _setValue }: valueProps) => {
  return <div className="screen">{_currentValue}</div>;
};

export default Screen;
