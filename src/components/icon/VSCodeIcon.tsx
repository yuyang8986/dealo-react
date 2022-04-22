import React from "react";
import * as VSC from "react-icons/vsc";

type Props = {
  iconName: keyof typeof VSC;
};

const Icon = ({ iconName }: Props) => {
  const icon = React.createElement(VSC[iconName]);
  return icon;
};
 
export default Icon;