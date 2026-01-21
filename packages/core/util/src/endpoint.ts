import type { TrezoaChain } from '@trezoa/wallet-standard-chains';
import {
    trezoa_DEVNET_CHAIN,
    trezoa_LOCALNET_CHAIN,
    trezoa_MAINNET_CHAIN,
    trezoa_TESTNET_CHAIN,
} from '@trezoa/wallet-standard-chains';

/** TODO: docs */
export const MAINNET_ENDPOINT = 'https://api.mainnet-beta.trezoa.com';
/** TODO: docs */
export const DEVNET_ENDPOINT = 'https://api.devnet.trezoa.com';
/** TODO: docs */
export const TESTNET_ENDPOINT = 'https://api.testnet.trezoa.com';
/** TODO: docs */
export const LOCALNET_ENDPOINT = 'http://localhost:8899';

/**
 * TODO: docs
 */
export function getChainForEndpoint(endpoint: string): TrezoaChain {
    if (endpoint.includes(MAINNET_ENDPOINT)) return trezoa_MAINNET_CHAIN;
    if (/\bdevnet\b/i.test(endpoint)) return trezoa_DEVNET_CHAIN;
    if (/\btestnet\b/i.test(endpoint)) return trezoa_TESTNET_CHAIN;
    if (/\blocalhost\b/i.test(endpoint) || /\b127\.0\.0\.1\b/.test(endpoint)) return trezoa_LOCALNET_CHAIN;
    return trezoa_MAINNET_CHAIN;
}

/**
 * TODO: docs
 */
export function getEndpointForChain(chain: TrezoaChain, endpoint?: string): string {
    if (endpoint) return endpoint;
    if (chain === trezoa_MAINNET_CHAIN) return MAINNET_ENDPOINT;
    if (chain === trezoa_DEVNET_CHAIN) return DEVNET_ENDPOINT;
    if (chain === trezoa_TESTNET_CHAIN) return TESTNET_ENDPOINT;
    if (chain === trezoa_LOCALNET_CHAIN) return LOCALNET_ENDPOINT;
    return MAINNET_ENDPOINT;
}
