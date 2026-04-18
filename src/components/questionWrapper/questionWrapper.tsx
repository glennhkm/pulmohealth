import React from "react";
import { YesButton } from "../buttons/yesButton";
import { NoButton } from "../buttons/noButton";
import { CheckIcon } from "@radix-ui/react-icons";
import { RefreshIcon } from "../icons/refreshIcon";

interface QuestionWrapperProps {
  question: string;
  gejala: boolean | null;
  setToYes: () => void;
  setToNo: () => void;
  setToNull: () => void;
}

export const QuestionWrapper = (props: QuestionWrapperProps) => {
  return (
    <div className="w-full py-3 md:py-4 bg-[#2C2C2C]/80 rounded-xl shadow-lg shadow-black/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 px-3 md:px-4 relative">
      {(props.gejala != null) && (
        <div className="bg-green-500 border border-black rounded-full absolute -right-3 -top-3">
          <CheckIcon className="size-5 md:size-6" />
        </div>
      )}
      <p className="text-white text-xs md:text-sm">{props.question}</p>
      <div className="flex gap-2 md:gap-2.5 w-full sm:w-auto shrink-0">        
        {(props.gejala === null || props.gejala === true) && (
          <YesButton setGejala={props.setToYes} gejala={props.gejala}/>
        )}
        {(props.gejala === null || props.gejala === false) && (
          <NoButton setGejala={props.setToNo} gejala={props.gejala}/>
        )}
        {props.gejala !== null && (
          <button onClick={props.setToNull} className="disabled:opacity-60 hover:scale-105 duration-150">
            <RefreshIcon className="size-5 text-white"/>
          </button>
        )}
      </div>
    </div>
  );
};
