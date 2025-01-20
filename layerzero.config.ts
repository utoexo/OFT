// Generated LayerZero Config

const arbitrumOneContract = {
    eid: 30110,
    contractName: 'OToken',
}

const baseContract = {
    eid: 30184,
    contractName: 'OToken',
}

const celoContract = {
    eid: 30125,
    contractName: 'OToken',
}

const ethereumContract = {
    eid: 30101,
    contractName: 'TokenAdapter',
}

const optimismContract = {
    eid: 30111,
    contractName: 'OToken',
}

export default {
    contracts: [
        { contract: arbitrumOneContract },
        { contract: baseContract },
        { contract: celoContract },
        { contract: ethereumContract },
        { contract: optimismContract },
    ],
    connections: [
        {
            from: arbitrumOneContract,
            to: baseContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55c492897526677c5b68fb199ea31e2c126416',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x2f55c492897526677c5b68fb199ea31e2c126416',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbitrumOneContract,
            to: celoContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55c492897526677c5b68fb199ea31e2c126416',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55c492897526677c5b68fb199ea31e2c126416',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbitrumOneContract,
            to: ethereumContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55c492897526677c5b68fb199ea31e2c126416',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x2f55c492897526677c5b68fb199ea31e2c126416',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbitrumOneContract,
            to: optimismContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55c492897526677c5b68fb199ea31e2c126416',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55c492897526677c5b68fb199ea31e2c126416',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: arbitrumOneContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: celoContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: ethereumContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: optimismContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: celoContract,
            to: arbitrumOneContract,
            config: {
                sendLibrary: '0x42b4E9C6495B4cFDaE024B1eC32E09F28027620e',
                receiveLibraryConfig: { receiveLibrary: '0xaDDed4478B423d991C21E525Cd3638FBce1AaD17', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x1dDbaF8b75F2291A97C22428afEf411b7bB19e28' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: celoContract,
            to: baseContract,
            config: {
                sendLibrary: '0x42b4E9C6495B4cFDaE024B1eC32E09F28027620e',
                receiveLibraryConfig: { receiveLibrary: '0xaDDed4478B423d991C21E525Cd3638FBce1AaD17', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x1dDbaF8b75F2291A97C22428afEf411b7bB19e28' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: celoContract,
            to: ethereumContract,
            config: {
                sendLibrary: '0x42b4E9C6495B4cFDaE024B1eC32E09F28027620e',
                receiveLibraryConfig: { receiveLibrary: '0xaDDed4478B423d991C21E525Cd3638FBce1AaD17', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x1dDbaF8b75F2291A97C22428afEf411b7bB19e28' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: celoContract,
            to: optimismContract,
            config: {
                sendLibrary: '0x42b4E9C6495B4cFDaE024B1eC32E09F28027620e',
                receiveLibraryConfig: { receiveLibrary: '0xaDDed4478B423d991C21E525Cd3638FBce1AaD17', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x1dDbaF8b75F2291A97C22428afEf411b7bB19e28' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethereumContract,
            to: arbitrumOneContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethereumContract,
            to: baseContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethereumContract,
            to: celoContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethereumContract,
            to: optimismContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: optimismContract,
            to: arbitrumOneContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: optimismContract,
            to: baseContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: optimismContract,
            to: celoContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: optimismContract,
            to: ethereumContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                            '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
    ],
}
