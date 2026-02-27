import type {JSX} from "react";
import type React from "react";
import {Screen} from "../types";

type exitButtonProps = {
  readonly setCurrScreen: React.Dispatch<React.SetStateAction<Screen>>;
  readonly displayValue: Screen;
};

export default function ExitButton({
                                     setCurrScreen, displayValue,
                                   }: exitButtonProps): JSX.Element {
  return (
    <button className="exit-button" onClick={() => setCurrScreen(displayValue)}>
      Exit
    </button>
  );
}