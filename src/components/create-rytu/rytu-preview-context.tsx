"use client";

import { atom, useAtom } from "jotai";
import NFT1 from "@/assets/images/nft/nft-1.jpg";

type rytuPreviewType = {
  id?: string;
  imageUrl?: string;
  name?: string;
  price?: number;
  currency?: string;

  ipIpfsCID: string;
  externalLink: string;
  mediaType: "image" | "audio" | "video" | "document" | "code";
  originalFileType: string;
  fingerprint: string;
  hash: number;
  chain: number;
  collectionId: number;
  supply: number;
  royalties: number;
  resaleable: boolean;
  priceType: "fixed" | "bids" | "auction";
  explicit: boolean;
  description: string;
  visibility: "public" | "private" | "restricted";
  coverImageIpfsCID: string;
};

const initialData = {
  id: "000",
  imageUrl: NFT1,
  name: "Name of RYTU shows here",
  price: 0.0,
  currency: "USD",
  ipIpfsCID: null,
  externalLink: "",
  mediaType: "image",
  originalFileType: "image/jpeg",
  fingerprint: null,
  hash: null,
  chain: null,
  collectionId: null,
  supply: 0,
  royalties: 0,
  resaleable: true,
  priceType: "fixed",
  explicit: false,
  description: "",
  visibility: "public",
  coverImageIpfsCID: "",
};

const rytuPreviewAtom = atom({ ...initialData });

export function useRYTUPreview() {
  const [state, setState] = useAtom(rytuPreviewAtom);

  const updatePreview = (params) => {
    setState((prevState) => ({
      ...prevState,
      ...Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value !== undefined)
      ),
    }));
  };

  const resetPreview = () => {
    setState({ ...initialData });
  };

  return {
    ...state,
    updatePreview,
    resetPreview,
  };
}
