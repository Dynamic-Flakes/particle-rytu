"use client";

import { atom, useAtom } from "jotai";

const initialData = {
  currentIndex: 1, // currentIndex is 1 based index
  currentState: "uploading...",
  totalSteps: 4,
};
const stepperAtom = atom({ ...initialData });

export function useIPStepper() {
  const [state, setState] = useAtom(stepperAtom);

  const setTotalSteps = (totalSteps: number) => {
    setState({ ...state, totalSteps });
  };

  const updateSteps = (currentIndex: number, currentState: string) => {
    setState({ ...state, currentIndex, currentState });
  };
  const resetSteps = () => {
    setState({ ...initialData });
  };
  return {
    ...state,
    updateSteps,
    resetSteps,
    setTotalSteps,
  };
}

// currentIndex is 0 based index
const rytuInitialData = { currentIndex: 0, totalSteps: 4 };
const rytuStepperAtom = atom({ ...rytuInitialData });

export function useRYTUStepper() {
  const [state, setState] = useAtom(rytuStepperAtom);

  const updateRytuStepper = (currentIndex: number) => {
    setState({ ...state, currentIndex });
  };
  const resetRytuStepper = () => {
    setState({ ...initialData });
  };
  return {
    ...state,
    updateRytuStepper,
    resetRytuStepper,
  };
}
