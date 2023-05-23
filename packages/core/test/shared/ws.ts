import { IRelayer } from "@exodus/walletconnect-types";

export async function disconnectSocket(relayer: IRelayer) {
  if (relayer.connected) {
    await relayer.transportClose();
  }
}
