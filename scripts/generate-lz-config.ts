import fs from 'fs'
import path from 'path'

import { NetworkConfig, mainnetNetworks } from './layerzero-contract-config'

function generateLzConfig(networks: NetworkConfig[]) {
    // Create individual contract declarations
    const contractDeclarations = networks
        .map(
            (network) => `const ${network.name}Contract = {
    eid: ${network.eid},
    contractName: '${network.contractName}',
}`
        )
        .join('\n\n')

    // Generate connections
    const connections = networks
        .flatMap((fromNetwork) =>
            networks
                .filter((toNetwork) => fromNetwork.eid !== toNetwork.eid)
                .map(
                    (toNetwork) => `        {
            from: ${fromNetwork.name}Contract,
            to: ${toNetwork.name}Contract,
            config: {
                sendLibrary: '${fromNetwork.sendLibrary}',
                receiveLibraryConfig: { receiveLibrary: '${fromNetwork.receiveLibrary}', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '${fromNetwork.executor}' },
                    ulnConfig: {
                        confirmations: ${fromNetwork.confirmations ?? 20},
                        requiredDVNs: [
                            '${fromNetwork.requiredDVNs[0]}',
                            '${fromNetwork.requiredDVNs[1]}'
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: ${toNetwork.confirmations ?? 20},
                        requiredDVNs: [
                            '${fromNetwork.requiredDVNs[0]}',
                            '${fromNetwork.requiredDVNs[1]}'
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        }`
                )
        )
        .join(',\n')

    // Generate contracts array
    const contracts = networks.map((network) => `        { contract: ${network.name}Contract }`).join(',\n')

    return `// Generated LayerZero Config

${contractDeclarations}

export default {
    contracts: [
${contracts}
    ],
    connections: [
${connections}
    ],
}
`
}

const networks = mainnetNetworks

function generateConfigFile() {
    const config = generateLzConfig(networks)
    const outputPath = path.join(__dirname, '../layerzero.config.ts')
    fs.writeFileSync(outputPath, config)
    console.log(`LayerZero config generated at: ${outputPath}`)
}

generateConfigFile()
