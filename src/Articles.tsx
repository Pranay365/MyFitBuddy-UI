import React from "react";
type ChildProps = {
  className: string;
};
const Articles: React.FC<ChildProps> = ({ className }) => {
  return <div className={className}>Articles</div>;
};
export default Articles;
