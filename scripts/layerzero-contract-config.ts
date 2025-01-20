import dvnDeployments from './dvn-deployments.json'
import lzV2Deployments from './layerzero-v2-deployments.json'

export interface NetworkConfig {
    name: string
    eid: string
    contractName: string
    sendLibrary: string
    receiveLibrary: string
    executor: string
    confirmations: number
    requiredDVNs: string[]
}

// Helper function to get DVN addresses for a network
function getDVNsForNetwork(networkName: string): string[] {
    const addresses: string[] = []
    for (const dvn of dvns) {
        // Get DVN addresses from dvn-deployments.json
        const dvnAddresses = dvnDeployments[dvn as keyof typeof dvnDeployments]
        // Get specific address for network
        const address = dvnAddresses[networkName as keyof typeof dvnAddresses]
        if (!address) {
            throw new Error(`DVN ${dvn} does not have address for network ${networkName}`)
        }
        addresses.push(address)
    }
    return addresses
}

// Helper function to get V2 contract addresses
function getV2Addresses(networkName: string) {
    // Convert network name to match V2 deployments format (e.g., "ethereum" -> "Ethereum-Mainnet")
    const formattedName = networkName
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join('-')

    const network = Object.entries(lzV2Deployments).find(
        ([name]) =>
            name.toLowerCase() === `${formattedName}-Mainnet`.toLowerCase() ||
            name.toLowerCase() === formattedName.toLowerCase()
    )

    if (!network) {
        throw new Error(`Network ${networkName} not found in V2 deployments`)
    }

    return network[1]
}
const networks = [
    {
        layerzeroName: 'Arbitrum-Mainnet',
        confirmations: 20,
        contractName: 'OToken',
        customName: 'arbitrumOne',
        dvnName: 'arbitrum',
    },
    {
        layerzeroName: 'Base-Mainnet',
        confirmations: 10,
        contractName: 'OToken',
        customName: 'base',
        dvnName: 'base',
    },
    // {
    //     layerzeroName: 'BNB-Smart-Chain-Mainnet',
    //     confirmations: 20,
    //     contractName: 'OToken',
    //     customName: 'bsc',
    //     dvnName: 'bsc',
    // },
    {
        layerzeroName: 'Celo-Mainnet',
        confirmations: 20,
        contractName: 'OToken',
        customName: 'celo',
        dvnName: 'celo',
    },
    {
        layerzeroName: 'Ethereum-Mainnet',
        confirmations: 15,
        contractName: 'TokenAdapter',
        customName: 'ethereum',
        dvnName: 'ethereum',
    },
    // {
    //     layerzeroName: 'Polygon-Mainnet',
    //     confirmations: 50,
    //     contractName: 'OToken',
    //     customName: 'polygon',
    //     dvnName: 'polygon',
    // },
    {
        layerzeroName: 'Optimism-Mainnet',
        confirmations: 20,
        contractName: 'OToken',
        customName: 'optimism',
        dvnName: 'optimism',
    },
].sort((a, b) => a.customName.localeCompare(b.customName))

const dvns = ['LayerZero_Labs', 'Google_Cloud']

export const mainnetNetworks: NetworkConfig[] = networks.map((network) => {
    const v2Addresses = getV2Addresses(network.layerzeroName)

    return {
        name: network.customName,
        eid: v2Addresses.eid,
        contractName: network.contractName,
        sendLibrary: v2Addresses.sendUln302,
        receiveLibrary: v2Addresses.receiveUln302,
        executor: v2Addresses.executor,
        confirmations: network.confirmations,
        requiredDVNs: getDVNsForNetwork(network.dvnName),
    }
})
