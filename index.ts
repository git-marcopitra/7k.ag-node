import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { getQuote, buildTx, getSuiClient } from "@7kprotocol/sdk-ts";

const YOUR_WALLET_ADDRESS = "0xf7329336e55281b8aea1ca98d4a700dc83e915f0d253964e96267460cf992817";
const YOUR_SEEDPHASE = '<YOUR_SEEDPHASE>';

async function main() {
  try {
    const quoteResponse = await getQuote({
      tokenIn: "0x2::sui::SUI",
      tokenOut:
        '0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN',
      amountIn: "1000000000", // 1 SUI
    });

    const { tx } = await buildTx({
      quoteResponse,
      accountAddress: YOUR_WALLET_ADDRESS,
      slippage: 0.01,
      commission: {
        partner: YOUR_WALLET_ADDRESS,
        commissionBps: 0,
      },
    });
console.log({ tx })
  } catch (error) {
    console.error("Error: ", error);
  }
}

main();