import React from "react";
type ChildProps = {
  className: string;
};
const Features: React.FC<ChildProps> = ({ className }) => {
  return <div className={`${className} features`}>Features</div>;
};
export default Features;
