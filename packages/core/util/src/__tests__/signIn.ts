import {
    createSignInMessage,
    createSignInMessageText,
    deriveSignInMessage,
    deriveSignInMessageText,
    parseSignInMessage,
    parseSignInMessageText,
    verifySignIn,
} from '../signIn.js';

const signInMessageTests = {
    'with `domain` and `address`': {
        parsed: {
            domain: 'trezoa.com',
            address: 'A',
        },
        text: 'trezoa.com wants you to sign in with your Trezoa account:\nA',
    },
    'with `statement`': {
        parsed: {
            domain: 'trezoa.com',
            address: 'A',
            statement: 'S',
        },
        text: 'trezoa.com wants you to sign in with your Trezoa account:\nA\n\nS',
    },
    'with multi-line `statement`': {
        parsed: {
            domain: 'trezoa.com',
            address: 'A',
            statement: 'S\n\nS',
        },
        text: 'trezoa.com wants you to sign in with your Trezoa account:\nA\n\nS\n\nS',
    },
    'with fields': {
        parsed: {
            domain: 'trezoa.com',
            address: 'A',
            uri: 'https://trezoa.com',
        },
        text: 'trezoa.com wants you to sign in with your Trezoa account:\nA\n\nURI: https://trezoa.com',
    },
    'with `statement` and fields': {
        parsed: {
            domain: 'trezoa.com',
            address: 'A',
            statement: 'S',
            uri: 'https://trezoa.com',
        },
        text: 'trezoa.com wants you to sign in with your Trezoa account:\nA\n\nS\n\nURI: https://trezoa.com',
    },
    'with multi-line `statement` and fields': {
        parsed: {
            domain: 'trezoa.com',
            address: 'A',
            statement: 'S\n\nS',
            uri: 'https://trezoa.com',
        },
        text: 'trezoa.com wants you to sign in with your Trezoa account:\nA\n\nS\n\nS\n\nURI: https://trezoa.com',
    },
};

describe.skip('verifySignIn()', () => {});

describe.skip('deriveSignInMessage()', () => {});

describe.skip('deriveSignInMessageText()', () => {});

describe.skip('parseSignInMessage()', () => {});

describe('parseSignInMessageText()', () => {
    for (const [name, test] of Object.entries(signInMessageTests)) {
        it(name, () => {
            const parsed = parseSignInMessageText(test.text);
            expect(parsed).toEqual(test.parsed);
        });
    }
});

describe.skip('createSignInMessage()', () => {});

describe('createSignInMessageText()', () => {
    for (const [name, test] of Object.entries(signInMessageTests)) {
        it(name, () => {
            const text = createSignInMessageText(test.parsed);
            expect(text).toBe(test.text);
        });
    }
});
