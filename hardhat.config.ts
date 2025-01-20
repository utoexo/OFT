// Get the environment configuration from .env file
//
// To make use of automatic environment setup:
// - Duplicate .env.example file and name it .env
// - Fill in the environment variables
import 'dotenv/config'

import 'hardhat-deploy'
import 'hardhat-contract-sizer'
import '@nomiclabs/hardhat-ethers'
import '@layerzerolabs/toolbox-hardhat'
import { HardhatUserConfig, HttpNetworkAccountsUserConfig } from 'hardhat/types'

import { EndpointId } from '@layerzerolabs/lz-definitions'

import './type-extensions'
import './tasks'
import '@nomicfoundation/hardhat-verify'
import './tasks/sendOFT'

// Set your preferred authentication method
//
// If you prefer using a mnemonic, set a MNEMONIC environment variable
// to a valid mnemonic
const MNEMONIC = process.env.MNEMONIC

// If you prefer to be authenticated using a private key, set a PRIVATE_KEY environment variable
const PRIVATE_KEY = process.env.PRIVATE_KEY

const accounts: HttpNetworkAccountsUserConfig | undefined = MNEMONIC
    ? { mnemonic: MNEMONIC }
    : PRIVATE_KEY
      ? [PRIVATE_KEY]
      : undefined

if (accounts == null) {
    console.warn(
        'Could not find MNEMONIC or PRIVATE_KEY environment variables. It will not be possible to execute transactions in your example.'
    )
}

const config: HardhatUserConfig = {
    etherscan: {
        apiKey: {
            arbitrumOne: process.env.ARBISCAN_API_KEY || '',
            base: process.env.BASESCAN_API_KEY || '',
            bsc: process.env.BSCSCAN_API_KEY || '',
            celo: process.env.CELOSCAN_API_KEY || '',
            ethereum: process.env.ETHERSCAN_API_KEY || '',
            polygon: process.env.POLYGONSCAN_API_KEY || '',
        },
        customChains: [
            {
                network: 'arbitrumOne',
                chainId: 42161,
                urls: {
                    apiURL: 'https://api.arbiscan.io/api',
                    browserURL: 'https://arbiscan.io/',
                },
            },
            {
                network: 'base',
                chainId: 8453,
                urls: {
                    apiURL: 'https://api.basescan.org/api',
                    browserURL: 'https://basescan.org/',
                },
            },
            {
                network: 'bsc',
                chainId: 56,
                urls: {
                    apiURL: 'https://api.bscscan.com/api',
                    browserURL: 'https://bscscan.com/',
                },
            },
            {
                network: 'celo',
                chainId: 42220,
                urls: {
                    apiURL: 'https://api.celoscan.io/api',
                    browserURL: 'https://celoscan.io/',
                },
            },
            {
                network: 'polygon',
                chainId: 137,
                urls: {
                    apiURL: 'https://api.polygonscan.com/api',
                    browserURL: 'https://polygonscan.com/',
                },
            },
        ],
    },
    paths: {
        cache: 'cache/hardhat',
    },
    solidity: {
        compilers: [
            {
                version: '0.8.22',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        'sepolia-testnet': {
            eid: EndpointId.SEPOLIA_V2_TESTNET,
            url: process.env.RPC_URL_SEPOLIA || 'https://rpc.sepolia.org/',
            accounts,
            oftAdapter: {
                tokenAddress: '0x0', // Set the token address for the OFT adapter
            },
        },
        'avalanche-testnet': {
            eid: EndpointId.AVALANCHE_V2_TESTNET,
            url: process.env.RPC_URL_FUJI || 'https://rpc.ankr.com/avalanche_fuji',
            accounts,
        },
        'amoy-testnet': {
            eid: EndpointId.AMOY_V2_TESTNET,
            url: process.env.RPC_URL_AMOY || 'https://polygon-amoy-bor-rpc.publicnode.com',
            accounts,
        },
        polygon: {
            eid: EndpointId.POLYGON_V2_MAINNET,
            url: process.env.RPC_URL_POLYGON || `https://rpc.ankr.com/polygon`,
            accounts,
            gasPrice: 100e9,
            timeout: 60000,
        },
        arbitrumOne: {
            eid: EndpointId.ARBITRUM_V2_MAINNET,
            url: process.env.RPC_URL_ARBITRUM || `https://rpc.ankr.com/arbitrum`,
            accounts,
        },
        ethereum: {
            eid: EndpointId.ETHEREUM_V2_MAINNET,
            url: process.env.RPC_URL_ETHEREUM || `https://rpc.ankr.com/eth`,
            accounts,
            oftAdapter: {
                tokenAddress: process.env.Token_ADDRESS || '', // Set the token address for the OFT adapter
            },
            gasPrice: 15.3e9,
            timeout: 600000,
        },
        base: {
            eid: EndpointId.BASE_V2_MAINNET,
            url: process.env.RPC_URL_BASE || `https://mainnet.base.org`,
            accounts,
        },
        bsc: {
            eid: EndpointId.BSC_V2_MAINNET,
            url: process.env.RPC_URL_BSC || `https://rpc.ankr.com/bsc`,
            accounts,
            gasPrice: 1e9,
        },
        celo: {
            eid: EndpointId.CELO_V2_MAINNET,
            url: process.env.RPC_URL_CELO || `https://rpc.ankr.com/celo`,
            accounts,
            gasPrice: 10e9,
        },
        hardhat: {
            // Need this for testing because TestHelperOz5.sol is exceeding the compiled contract size limit
            allowUnlimitedContractSize: true,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0, // wallet address of index[0], of the mnemonic in .env
        },
    },
}

export default config
