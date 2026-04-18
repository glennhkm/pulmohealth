import { YesNoButtonPropsTypes } from "@/types/yesNoButtonPropsTypes";
import React from "react";

export const NoButton = (props: YesNoButtonPropsTypes) => {
  return (
    <button disabled={props.gejala === false} onClick={props.setGejala} className="rounded-xl disabled:pointer-events-none disabled:opacity-60 text-xs md:text-sm py-2 w-full sm:w-32 bg-amber-500 text-white hover:scale-105 duration-150 shadow-lg shadow-black/60">
      Tidak
    </button>
  );
};
