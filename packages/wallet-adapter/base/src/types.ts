import {
    isWalletAdapterCompatibleStandardWallet,
    type StandardWalletAdapter,
    type WalletAdapterCompatibleStandardWallet,
} from '@trezoa/wallet-adapter-base';

/**
 * @deprecated Use `StandardWalletAdapter` from `@trezoa/wallet-adapter-base` instead.
 *
 * @group Deprecated
 */
export type StandardAdapter = StandardWalletAdapter;

/**
 * @deprecated Use `WalletAdapterCompatibleStandardWallet` from `@trezoa/wallet-adapter-base` instead.
 *
 * @group Deprecated
 */
export type WalletAdapterCompatibleWallet = WalletAdapterCompatibleStandardWallet;

/**
 * @deprecated Use `isWalletAdapterCompatibleStandardWallet` from `@trezoa/wallet-adapter-base` instead.
 *
 * @group Deprecated
 */
export const isWalletAdapterCompatibleWallet = isWalletAdapterCompatibleStandardWallet;
