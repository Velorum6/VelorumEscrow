import { createClient } from "viem";
import { createConfig, http } from "wagmi";
import { coinbaseWallet } from "wagmi/connectors";
import { coreConfig } from "./coreConfig";

export const wagmiConfig = createConfig({
  chains: [coreConfig.chain],

  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
  connectors: [coinbaseWallet({ appName: "wagmi" })],
});
