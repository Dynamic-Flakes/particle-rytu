"use client";

import React from "react";
import { ConnectKitProvider, createConfig } from "@particle-network/connectkit";
import {
  evmWalletConnectors,
  injected,
} from "@particle-network/connectkit/evm";
import { authWalletConnectors } from "@particle-network/connectkit/auth";
import { solanaWalletConnectors } from "@particle-network/connectkit/solana";
import {
  mainnet,
  solana,
  arbitrum,
  avalanche,
  bsc,
  optimism,
  polygon,
} from "@particle-network/connectkit/chains";

const particleConfig = createConfig({
  projectId: process.env.NEXT_PUBLIC_PARTICLE_PROJECT_ID!,
  clientKey: process.env.NEXT_PUBLIC_PARTICLE_CLIENT_KEY!,
  appId: process.env.NEXT_PUBLIC_PARTICLE_APP_ID!,

  appearance: {
    theme: {
      "--pcm-body-background": "#0d1321",
      "--pcm-body-color": "#FFFFFF",
      "--pcm-primary-button-color": "#000000",
    },
    language: "en-US",
    collapseWalletList: false,
  },

  walletConnectors: [
    authWalletConnectors({
      authTypes: [
        "google",
        "apple",
        "github",
        "facebook",
        "twitter",
        "microsoft",
        "discord",
        "twitch",
        "linkedin",
        "phone",
        "email",
      ],
      fiatCoin: "USD",
      promptSettingConfig: {
        promptMasterPasswordSettingWhenLogin: 1,
        promptPaymentPasswordSettingWhenSign: 1,
      },
    }),

    // EVM wallet connectors
    evmWalletConnectors({
      metadata: { name: "My App" },
      connectorFns: [
        injected({ target: "metaMask" }),
        injected({ target: "coinbaseWallet" }),
        injected({ target: "okxWallet" }),
        injected({ target: "phantom" }),
        injected({ target: "trustWallet" }),
        injected({ target: "bitKeep" }),
      ],
      multiInjectedProviderDiscovery: true,
    }),

    // Solana wallet connectors
    solanaWalletConnectors({
      connectorFns: [injected({ target: "phantom" })],
    }),
  ],

  chains: [mainnet, solana, arbitrum, avalanche, bsc, optimism, polygon],
});

export const ParticleSSO = ({ children }: React.PropsWithChildren) => {
  return (
    <ConnectKitProvider config={particleConfig}>{children}</ConnectKitProvider>
  );
};
