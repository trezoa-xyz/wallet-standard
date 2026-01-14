import { ed25519 } from '@noble/curves/ed25519';
import type { TrezoaSignMessageInput, TrezoaSignMessageOutput } from '@trezoa/wallet-standard-features';
import { bytesEqual } from './util.js';

/**
 * TODO: docs
 */
export function verifyMessageSignature({
    message,
    signedMessage,
    signature,
    publicKey,
}: {
    message: Uint8Array;
    signedMessage: Uint8Array;
    signature: Uint8Array;
    publicKey: Uint8Array;
}): boolean {
    // TODO: implement https://github.com/trezoa-labs/trezoa/blob/master/docs/src/proposals/off-chain-message-signing.md
    return bytesEqual(message, signedMessage) && ed25519.verify(signature, signedMessage, publicKey);
}

/**
 * TODO: docs
 */
export function verifySignMessage(input: TrezoaSignMessageInput, output: TrezoaSignMessageOutput): boolean {
    const {
        message,
        account: { publicKey },
    } = input;
    const { signedMessage, signature } = output;
    return verifyMessageSignature({ message, signedMessage, signature, publicKey: publicKey as Uint8Array });
}
