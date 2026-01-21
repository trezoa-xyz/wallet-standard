import type { IdentifierString } from '@wallet-standard/base';

/** Trezoa Mainnet (beta) cluster, e.g. https://api.mainnet-beta.trezoa.com */
export const trezoa_MAINNET_CHAIN = 'trezoa:mainnet';

/** Trezoa Devnet cluster, e.g. https://api.devnet.trezoa.com */
export const trezoa_DEVNET_CHAIN = 'trezoa:devnet';

/** Trezoa Testnet cluster, e.g. https://api.testnet.trezoa.com */
export const trezoa_TESTNET_CHAIN = 'trezoa:testnet';

/** Trezoa Localnet cluster, e.g. http://localhost:8899 */
export const trezoa_LOCALNET_CHAIN = 'trezoa:localnet';

/** Array of all Trezoa clusters */
export const trezoa_CHAINS = [
    trezoa_MAINNET_CHAIN,
    trezoa_DEVNET_CHAIN,
    trezoa_TESTNET_CHAIN,
    trezoa_LOCALNET_CHAIN,
] as const;

/** Type of all Trezoa clusters */
export type TrezoaChain = (typeof trezoa_CHAINS)[number];

/**
 * Check if a chain corresponds with one of the Trezoa clusters.
 */
export function isTrezoaChain(chain: IdentifierString): chain is TrezoaChain {
    return trezoa_CHAINS.includes(chain as TrezoaChain);
}
