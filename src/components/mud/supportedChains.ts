/*
 * The supported chains.
 * By default, there are only two chains here:
 *
 * - mudFoundry, the chain running on anvil that pnpm dev
 *   starts by default. It is similar to the viem anvil chain
 *   (see https://viem.sh/docs/clients/test.html), but with the
 *   basefee set to zero to avoid transaction fees.
 * - latticeTestnet, our public test network.
 *
 */

import { MUDChain, mudFoundry, redstone, garnet } from "@latticexyz/common/chains";

var primodium = {
    name:"Primodium Sepolia",
    id:10017,
    network:"primodium-sepolia",
    nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},
    rpcUrls:{
        default:{
            http:["https://primodium-sepolia.rpc.caldera.xyz/http"],
        },
    },
    blockExplorers:{
        default:{
            name:"Blockscout",
            url:"https://primodium-sepolia.explorer.caldera.xyz/"
        },
    },
}

/*
 * See https://mud.dev/tutorials/minimal/deploy#run-the-user-interface
 * for instructions on how to add networks.
 */
export const supportedChains: MUDChain[] = [mudFoundry, redstone, garnet, primodium];
