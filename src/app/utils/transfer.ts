import {
  Address,
  createPublicClient,
  createWalletClient,
  http,
  publicActions,
  parseEther,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base, zora } from "viem/chains";

import abi from "./abi";

export const transferToken = async (
  recipient_address: string,

  amount: number
) => {
  const client = createPublicClient({
    chain: zora,
    transport: http(),
  });

  const PRIVATE_KEY = process.env.PRIVATE_KEY as Address;
  const account = privateKeyToAccount(`0x${PRIVATE_KEY}`);

  const walletClient = createWalletClient({
    account,
    chain: zora,
    transport: http(),
  }).extend(publicActions);

  try {
    const { request } = await walletClient.simulateContract({
      account,
      address: "0xa6B280B42CB0b7c4a4F789eC6cCC3a7609A1Bc39",
      abi: abi,
      functionName: "transfer",
      args: [recipient_address, parseEther(`${amount}`)],
    });

    const res = await walletClient.writeContract(request);

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
