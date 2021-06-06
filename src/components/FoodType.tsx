import React from "react";

interface Props {
  className: string;
  content: string;
  clickHandler: (e: any) => void;
}

const FoodOption = ({ className, content, clickHandler }: Props) => {
  return (
    <div onClick={clickHandler} className={className}>
      {content}
    </div>
  );
};

export default FoodOption;
