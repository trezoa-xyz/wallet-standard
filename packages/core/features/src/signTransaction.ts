import type { IdentifierString, WalletAccount } from '@wallet-standard/base';

/** Name of the feature. */
export const TrezoaSignTransaction = 'trezoa:signTransaction';

/** TODO: docs */
export type TrezoaSignTransactionFeature = {
    /** Name of the feature. */
    readonly [TrezoaSignTransaction]: {
        /** Version of the feature API. */
        readonly version: TrezoaSignTransactionVersion;

        /** TODO: docs */
        readonly supportedTransactionVersions: readonly TrezoaTransactionVersion[];

        /**
         * Sign transactions using the account's secret key.
         *
         * @param inputs Inputs for signing transactions.
         *
         * @return Outputs of signing transactions.
         */
        readonly signTransaction: TrezoaSignTransactionMethod;
    };
};

/** Version of the feature. */
export type TrezoaSignTransactionVersion = '1.0.0';

/** TODO: docs */
export type TrezoaTransactionVersion = 'legacy' | 0;

/** TODO: docs */
export type TrezoaSignTransactionMethod = (
    ...inputs: readonly TrezoaSignTransactionInput[]
) => Promise<readonly TrezoaSignTransactionOutput[]>;

/** Input for signing a transaction. */
export interface TrezoaSignTransactionInput {
    /** Account to use. */
    readonly account: WalletAccount;

    /** Serialized transaction, as raw bytes. */
    readonly transaction: Uint8Array;

    /** Chain to use. */
    readonly chain?: IdentifierString;

    /** TODO: docs */
    readonly options?: TrezoaSignTransactionOptions;
}

/** Output of signing a transaction. */
export interface TrezoaSignTransactionOutput {
    /**
     * Signed, serialized transaction, as raw bytes.
     * Returning a transaction rather than signatures allows multisig wallets, program wallets, and other wallets that
     * use meta-transactions to return a modified, signed transaction.
     */
    readonly signedTransaction: Uint8Array;
}

/** Options for signing a transaction. */
export type TrezoaSignTransactionOptions = {
    /** Preflight commitment level. */
    readonly preflightCommitment?: TrezoaTransactionCommitment;

    /** The minimum slot that the request can be evaluated at. */
    readonly minContextSlot?: number;
};

/** Commitment level for transactions. */
export type TrezoaTransactionCommitment = 'processed' | 'confirmed' | 'finalized';
