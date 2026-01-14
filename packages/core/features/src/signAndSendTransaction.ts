import type { IdentifierString } from '@wallet-standard/base';
import type {
    TrezoaSignTransactionInput,
    TrezoaSignTransactionOptions,
    TrezoaTransactionCommitment,
    TrezoaTransactionVersion,
} from './signTransaction.js';

/** Name of the feature. */
export const TrezoaSignAndSendTransaction = 'trezoa:signAndSendTransaction';

/** TODO: docs */
export type TrezoaSignAndSendTransactionFeature = {
    /** Name of the feature. */
    readonly [TrezoaSignAndSendTransaction]: {
        /** Version of the feature API. */
        readonly version: TrezoaSignAndSendTransactionVersion;

        /** TODO: docs */
        readonly supportedTransactionVersions: readonly TrezoaTransactionVersion[];

        /**
         * Sign transactions using the account's secret key and send them to the chain.
         *
         * @param inputs Inputs for signing and sending transactions.
         *
         * @return Outputs of signing and sending transactions.
         */
        readonly signAndSendTransaction: TrezoaSignAndSendTransactionMethod;
    };
};

/** Version of the feature. */
export type TrezoaSignAndSendTransactionVersion = '1.0.0';

/** TODO: docs */
export type TrezoaSignAndSendTransactionMethod = (
    ...inputs: readonly TrezoaSignAndSendTransactionInput[]
) => Promise<readonly TrezoaSignAndSendTransactionOutput[]>;

/** Input for signing and sending a transaction. */
export interface TrezoaSignAndSendTransactionInput extends TrezoaSignTransactionInput {
    /** Chain to use. */
    readonly chain: IdentifierString;

    /** TODO: docs */
    readonly options?: TrezoaSignAndSendTransactionOptions;
}

/** Output of signing and sending a transaction. */
export interface TrezoaSignAndSendTransactionOutput {
    /** Transaction signature, as raw bytes. */
    readonly signature: Uint8Array;
}

/** Options for signing and sending a transaction. */
export type TrezoaSignAndSendTransactionOptions = TrezoaSignTransactionOptions & {
    /** Desired commitment level. If provided, confirm the transaction after sending. */
    readonly commitment?: TrezoaTransactionCommitment;

    /** Disable transaction verification at the RPC. */
    readonly skipPreflight?: boolean;

    /** Maximum number of times for the RPC node to retry sending the transaction to the leader. */
    readonly maxRetries?: number;
};
