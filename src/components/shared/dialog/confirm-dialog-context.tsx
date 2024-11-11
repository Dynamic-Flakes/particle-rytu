"use client";

import { atom, useAtom } from "jotai";

const initialData = {
  title: "Are you sure?",
  isConfirmed: false,
  titlePlaceholder: "Enter your name",
  confirmButtonLabel: "Confirm",
  cancelButtonLabel: "Cancel",
  errorMessage: "",
  successMessage: "",
};

const confirmDialogAtom = atom({ ...initialData });

export function useConfirmDialog() {
  const [state, setState] = useAtom(confirmDialogAtom);

  const setDialogTitle = (title: string) => {
    setState({ ...state, title });
  };

  const onCancel = () => {
    setState({ ...state, isConfirmed: false });
  };

  const onConfirm = () => {
    setState({ ...state, isConfirmed: true });
  };

  const setConfirmLabel = (text: string) => {
    setState({ ...state, confirmButtonLabel: text });
  };

  const setCancelLabel = (text: string) => {
    setState({ ...state, confirmButtonLabel: text });
  };

  const resetDialog = () => {
    setState({ ...initialData });
  };

  return {
    ...state,
    onCancel,
    onConfirm,
    resetDialog,
    setConfirmLabel,
    setCancelLabel,
    setDialogTitle,
  };
}
