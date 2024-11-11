"use client";

import { atom, useAtom } from "jotai";

export type MODAL_VIEW =
  | "SEARCH_VIEW"
  | "SHARE_VIEW"
  | "WALLET_CONNECT_VIEW"
  | "PROFILE_INFO_VIEW"
  | "FOLLOWING_VIEW"
  | "FOLLOWERS_VIEW"
  | "NFT_PREVIEW"
  | "CREATE_COLLECTION"
  | "PROFIT_TRANSFER_PREVIEW"
  | "DCA_ORDER_HISTORY"
  | "IP_SILO_STEPPER"
  | "CONFIRMATION_DIALOG";

interface ModalTypes {
  isOpen: boolean;
  view: MODAL_VIEW;
  // @typescript-eslint/no-explicit-any
  data: any;
}

const modalAtom = atom<ModalTypes>({
  isOpen: false,
  view: "SEARCH_VIEW",
  data: null,
});

export function useModal() {
  const [state, setState] = useAtom(modalAtom);
  const openModal = (view: MODAL_VIEW, data: unknown = null) =>
    setState({ ...state, isOpen: true, view, data });
  const closeModal = () => setState({ ...state, isOpen: false });

  console.log("search...", state.view, state.isOpen);
  return {
    ...state,
    openModal,
    closeModal,
  };
}
