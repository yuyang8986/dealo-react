import React from "react";
import IconEnum from "../../models/IconEnum";

type Props = {
    icon: IconEnum;
  };

const Icon = ({ icon}: Props) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 16 16"
      width="1rem"
      height="1rem"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fillRule="evenodd" clipRule="evenodd" d={icon} fill="currentColor"/>
    </svg>
  );
};

export default Icon;