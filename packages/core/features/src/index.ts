import type { WalletWithFeatures } from '@wallet-standard/base';
import type { TrezoaSignAndSendTransactionFeature } from './signAndSendTransaction.js';
import type { TrezoaSignInFeature } from './signIn.js';
import type { TrezoaSignMessageFeature } from './signMessage.js';
import type { TrezoaSignTransactionFeature } from './signTransaction.js';
import type { TrezoaSignAndSendAllTransactionsFeature } from './signAndSendAllTransactions.js';

/** TODO: docs */
export type TrezoaFeatures =
    | TrezoaSignAndSendTransactionFeature
    | TrezoaSignInFeature
    | TrezoaSignMessageFeature
    | TrezoaSignTransactionFeature
    | TrezoaSignAndSendAllTransactionsFeature;

/** TODO: docs */
export type WalletWithTrezoaFeatures = WalletWithFeatures<TrezoaFeatures>;

export * from './signAndSendTransaction.js';
export * from './signIn.js';
export * from './signMessage.js';
export * from './signTransaction.js';
export * from './signAndSendAllTransactions.js';
