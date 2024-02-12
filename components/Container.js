import React from "react";

function Container({ children, small, medium, xmall,large, floatLeft, floatRight }) {
  

  return (
    <div
      className={` ml-auto mr-auto px-10 ${
        small
          ? "w-full max-w-[900px] !px-0"
          : medium
          ? "xl:max-w-[450px]  !px-0"
          : large
          ? "xl:max-w-[450px]  !px-0"
          : xmall
          ? "xl:max-w-[400px]  !px-0"

          : "w-full md:mx-auto"
      } `}
    >
      {children}
    </div>
  );
}

export default Container;
