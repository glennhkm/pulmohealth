import { YesNoButtonPropsTypes } from "@/types/yesNoButtonPropsTypes";
import React from "react";

export const YesButton = (props: YesNoButtonPropsTypes) => {
  return (
    <button disabled={props.gejala === true} onClick={props.setGejala} className="rounded-xl disabled:pointer-events-none disabled:opacity-60 text-xs md:text-sm w-full sm:w-32 py-2 bg-green-600 text-white hover:scale-105 duration-150 shadow-lg shadow-black/60">
      Ya
    </button>
  );
};
