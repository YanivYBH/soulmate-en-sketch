import React from "react";

function Container({ children, small, medium, floatLeft, floatRight }) {
  return (
    <div
      className={`w-screenz ml-auto mr-auto px-10 ${
        floatLeft
          ? "md:!w-[95vw] md:!mr-auto md:!ml-[0px]"
          : floatRight
          ? "md:!w-[95vw] md:!ml-auto md:!mr-[0px]"
          : small
          ? "md:w-[30vw] md:h-[700px] md:mx-auto !px-0"
          : medium
          ? "md:w-[80vw] md:mx-auto !px-0"
          : "md:w-[65vw] md:mx-auto"
      } `}
    >
      {children}
    </div>
  );
}

export default Container;
