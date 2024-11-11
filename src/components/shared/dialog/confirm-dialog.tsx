import React from "react";
import { useConfirmDialog } from "./confirm-dialog-context";
import Button from "@/components/shared/button";
import { useModal } from "@/components/modal-views/context";

export default function ConfirmDialog() {
  let {
    isConfirmed,
    onCancel,
    onConfirm,
    title,
    cancelButtonLabel,
    confirmButtonLabel,
  } = useConfirmDialog();
  const { closeModal } = useModal();

  function handleCancel() {
    onCancel();
    closeModal();
  }

  return (
    <div
      className="relative flex flex-col gap-8 z-50 mx-auto h-auto w-[540px] max-w-full rounded-lg bg-white px-8  py-8 dark:bg-light-dark"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="text-center text-lg">{title}</div>

      <div className="flex items-center justify-center gap-10">
        <Button onClick={onConfirm}>{confirmButtonLabel}</Button>
        <Button
          onClick={handleCancel}
          variant="ghost"
          className="dark:text-white"
        >
          {cancelButtonLabel}
        </Button>
      </div>
    </div>
  );
}
