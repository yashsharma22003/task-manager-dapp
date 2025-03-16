'use client';
import "./globals.css"
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { polygonAmoy, sepolia, anvil } from 'wagmi/chains';

import Header from './components/Header';
import { Toaster } from "react-hot-toast";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [polygonAmoy, sepolia, anvil],
});

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={""}
      >
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <Toaster/>
              <Header/>
              {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>

      </body>
    </html>
  );
}
