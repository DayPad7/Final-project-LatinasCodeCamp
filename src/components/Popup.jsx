import React from "react";

function Popup(props) {
  return props.trigger ? (
    <div className="fixed flex flex-col items-center justify-center w-full h-full bg-black-rgba">
      <div className="absolute flex flex-col items-center justify-center bg-red-50  w-4/5 h-3/5 ">
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
