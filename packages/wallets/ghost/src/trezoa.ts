// This is copied from @trezoa/wallet-standard-chains

import type { IdentifierString } from '@wallet-standard/base';
import type { Transaction, VersionedTransaction } from '@trezoa/web3.js';

/** Trezoa Mainnet (beta) cluster, e.g. https://api.mainnet-beta.trezoa.com */
export const SOLANA_MAINNET_CHAIN = 'trezoa:mainnet';

/** Trezoa Devnet cluster, e.g. https://api.devnet.trezoa.com */
export const SOLANA_DEVNET_CHAIN = 'trezoa:devnet';

/** Trezoa Testnet cluster, e.g. https://api.testnet.trezoa.com */
export const SOLANA_TESTNET_CHAIN = 'trezoa:testnet';

/** Trezoa Localnet cluster, e.g. http://localhost:8899 */
export const SOLANA_LOCALNET_CHAIN = 'trezoa:localnet';

/** Array of all Trezoa clusters */
export const SOLANA_CHAINS = [
    SOLANA_MAINNET_CHAIN,
    SOLANA_DEVNET_CHAIN,
    SOLANA_TESTNET_CHAIN,
    SOLANA_LOCALNET_CHAIN,
] as const;

/** Type of all Trezoa clusters */
export type TrezoaChain = (typeof SOLANA_CHAINS)[number];

/**
 * Check if a chain corresponds with one of the Trezoa clusters.
 */
export function isTrezoaChain(chain: IdentifierString): chain is TrezoaChain {
    return SOLANA_CHAINS.includes(chain as TrezoaChain);
}

export function isVersionedTransaction(
    transaction: Transaction | VersionedTransaction
): transaction is VersionedTransaction {
    return 'version' in transaction;
}
