import type { TrezoaTransactionVersion } from './signTransaction.js';
import type {
    TrezoaSignAndSendTransactionInput,
    TrezoaSignAndSendTransactionOutput,
} from './signAndSendTransaction.js';

/** Name of the feature */
export const SignAndSendAllTransactions = 'trezoa:signAndSendAllTransactions';

/** TODO: docs */
export type TrezoaSignAndSendAllTransactionsFeature = {
    /** Name of the feature. */
    readonly [SignAndSendAllTransactions]: {
        /** Version of the feature API. */
        readonly version: TrezoaSignAndSendAllTransactionsVersion;

        /** TODO: docs */
        readonly supportedTransactionVersions: readonly TrezoaTransactionVersion[];

        /**
         * Sign transactions using the account's secret key and send them to the chain.
         *
         * @param inputs {TrezoaSignAndSendTransactionInput[]} Inputs for signing and sending multiple transactions.
         * @param options {TrezoaSignAndSendAllTransactionsOptions} Options for signing and sending transactions.
         *
         * @return Outputs of signing and sending transactions.
         */
        readonly signAndSendAllTransactions: TrezoaSignAndSendAllTransactionsMethod;
    };
};

/** Version of the feature. */
export type TrezoaSignAndSendAllTransactionsVersion = '1.0.0';

/** TODO: docs */
export type TrezoaSignAndSendAllTransactionsMethod = (
    inputs: readonly TrezoaSignAndSendTransactionInput[],
    options?: TrezoaSignAndSendAllTransactionsOptions
) => Promise<readonly PromiseSettledResult<TrezoaSignAndSendTransactionOutput>[]>;

/** Options for signing and sending multiple transactions. */
export type TrezoaSignAndSendAllTransactionsOptions = {
    /** Mode for signing and sending transactions. */
    readonly mode?: TrezoaSignAndSendAllTransactionsMode;
};

/** Mode for signing and sending transactions. */
export type TrezoaSignAndSendAllTransactionsMode = 'parallel' | 'serial';
