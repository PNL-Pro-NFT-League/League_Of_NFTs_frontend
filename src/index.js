import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { darkTheme } from '@rainbow-me/rainbowkit';
import "@rainbow-me/rainbowkit/styles.css";

import App from "./App";

import {
  ConnectButton,
  connectorsForWallets,
  wallet,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { chain, configureChains, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { sequenceWallet } from 'sequence-rainbowkit-wallet';

const defaultProvider = alchemyProvider({
  apiKey: process.env.ALCHEMY_APIKEY,
});

export const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygonMumbai],
  [defaultProvider],
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      sequenceWallet({ chains }),
      wallet.metaMask({ chains }),
      wallet.rainbow({ chains }),
      wallet.walletConnect({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: () => [...connectors()],
  provider,
  webSocketProvider,
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
        borderRadius: 'medium',
        fontStack: 'small'
      })}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </BrowserRouter>
);
