// This is copied with modification from @wallet-standard/wallet

import {
    TrezoaSignAndSendTransaction,
    TrezoaSignMessage,
    TrezoaSignTransaction,
} from '@trezoa/wallet-standard-features';
import type { WalletAccount } from '@wallet-standard/base';
import { SOLANA_CHAINS } from './trezoa.js';

const chains = SOLANA_CHAINS;
const features = [TrezoaSignAndSendTransaction, TrezoaSignTransaction, TrezoaSignMessage] as const;

export class GhostWalletAccount implements WalletAccount {
    readonly #address: WalletAccount['address'];
    readonly #publicKey: WalletAccount['publicKey'];
    readonly #chains: WalletAccount['chains'];
    readonly #features: WalletAccount['features'];
    readonly #label: WalletAccount['label'];
    readonly #icon: WalletAccount['icon'];

    get address() {
        return this.#address;
    }

    get publicKey() {
        return this.#publicKey.slice();
    }

    get chains() {
        return this.#chains.slice();
    }

    get features() {
        return this.#features.slice();
    }

    get label() {
        return this.#label;
    }

    get icon() {
        return this.#icon;
    }

    constructor({ address, publicKey, label, icon }: Omit<WalletAccount, 'chains' | 'features'>) {
        if (new.target === GhostWalletAccount) {
            Object.freeze(this);
        }

        this.#address = address;
        this.#publicKey = publicKey;
        this.#chains = chains;
        this.#features = features;
        this.#label = label;
        this.#icon = icon;
    }
}
