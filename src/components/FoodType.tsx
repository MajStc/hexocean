import React from "react";

interface Props {
  content: string;
  className: string;
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
