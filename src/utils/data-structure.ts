import { Address } from "viem/accounts";
import { string } from "yup";

type rytu = {
  chain: number; // Blockchain chain ID
  collectionId: Address; // Collection address or ID
  supply: number; // Total supply of the asset
  royalties: number; // Royalty percentage
  resaleable: boolean; // Whether the asset can be resold
  priceType: "fixed" | "bids" | "auction"; // Type of pricing model
  price: {
    amount: number;
    currency: string; // Currency used for pricing (e.g., "ETH")
  };
  explicit: boolean; // Flag for explicit content
  smartlink: {
    link: string; // Primary smart link for the asset
    redirectLinks: {
      // List of platform-specific redirect links
      platform: string;
      link: string;
      icon: string;
    }[];
  };
  externalLinks: string[]; // External links relevant to the asset
  metadata: {
    name: string; // Name of the asset
    description: string; // Description of the asset
    creator: {
      name: string; // Creator's name
      id?: string; // Optional ID or DID for the creator
    };
    createdAt: Date; // Creation date of the asset
    updatedAt: Date; // Last update date for the asset
    visibility: "public" | "private" | "restricted"; // Visibility level of the asset
    attributes: {
      // Detailed attributes for asset properties
      traitType: string;
      value: string | number | boolean;
    }[];
    ipSiloId: string;
    subdomain: "music" | "research" | "code" | "content";
    coverImage: string;
  };

  ipSilo: {
    ipfsProvider: string; // Provider for IPFS (e.g., "Infura")
    ipfsCID: string; // IPFS CID for the main content
    content: string; // URL or link to the IPFS-hosted file
    preview: string; // URL or link to a preview file (optional)
    mediaType: "image" | "audio" | "video" | "document" | "code"; // Primary media category
    originalFileType: string; // E.g., ".pdf", ".js", ".docx", ".mp3"
    duration?: number; // Duration for audio/video, in seconds
    fingerprintType: string; // Type of fingerprint (e.g., SHA-256)
    fingerprint: string; // Unique fingerprint for the media
    hash: number; // Hash of the media file for verification
    isPrivate: boolean; // Flag for media privacy
    size: number; // File size in bytes
  };
};

type abandonedRYTU = {
  currentStepIndex: number;
  ipSiloId: string;
  coverImage: string;
  abandonedAt: Date;
};

type collection = {
  id: number;
  name: string;
  coverImage: string;
  creatorId: string;
  createdAt: Date;
};

// { traitType: 'Media Type', value: data.mediaType },
// { traitType: 'Duration', value: data.duration },
// { traitType: 'Size', value: data.size },
// { traitType: 'License Type', value: data.licenseType },
// { traitType: 'License Duration', value: data.licenseDuration },
// { traitType: 'Usage Restrictions', value: data.usageRestrictions },
// { traitType: 'Unlockable Content Preview', value: data.assetPreview },
// { traitType: 'Unlockable Content', value: data.actualAsset },
// { traitType: 'Explicit', value: data.explicit },
// { traitType: 'Resaleable', value: data.resaleable },
// { traitType: 'Creation Date', value: data.creationDate },
// { traitType: 'Creator', value: data.creator },
