import type { WalletAccount } from '@wallet-standard/base';

/** Name of the feature. */
export const TrezoaSignMessage = 'trezoa:signMessage';

/** TODO: docs */
export type TrezoaSignMessageFeature = {
    /** Name of the feature. */
    readonly [TrezoaSignMessage]: {
        /** Version of the feature API. */
        readonly version: TrezoaSignMessageVersion;

        /** Sign messages (arbitrary bytes) using the account's secret key. */
        readonly signMessage: TrezoaSignMessageMethod;
    };
};

/** Version of the feature. */
export type TrezoaSignMessageVersion = '1.1.0' | '1.0.0';

/** TODO: docs */
export type TrezoaSignMessageMethod = (
    ...inputs: readonly TrezoaSignMessageInput[]
) => Promise<readonly TrezoaSignMessageOutput[]>;

/** Input for signing a message. */
export interface TrezoaSignMessageInput {
    /** Account to use. */
    readonly account: WalletAccount;

    /** Message to sign, as raw bytes. */
    readonly message: Uint8Array;
}

/** Output of signing a message. */
export interface TrezoaSignMessageOutput {
    /**
     * Message bytes that were signed.
     * The wallet may prefix or otherwise modify the message before signing it.
     */
    readonly signedMessage: Uint8Array;

    /**
     * Message signature produced.
     * If the signature type is provided, the signature must be Ed25519.
     */
    readonly signature: Uint8Array;

    /**
     * Optional type of the message signature produced.
     * If not provided, the signature must be Ed25519.
     */
    readonly signatureType?: 'ed25519';
}
