/* test at bn */
require('log-timestamp')
const { DEPLOYMENT_ACCOUNT_KEY } = require('../lib/env')
const { keyToAccount } = require('../lib/eth_utils')
const deployClaimer = require('../migrations/deploy_claimer')

module.exports = async _ => {
  const owner = keyToAccount(DEPLOYMENT_ACCOUNT_KEY)
  const CLAIMER_VERSION = 'V1'
  await deployClaimer({ exit: false, version: CLAIMER_VERSION })
  const Claimer = await require('../lib/claimer')(CLAIMER_VERSION)

  console.log(await Claimer.estimateGasAndInvokeFrom(owner, 'execute', {
    claims: [
      "0x0d434e7e000000000000000000000000980165226eab8d569640a981c68e04bc44067088000000000000000000000000000000000000000000000000000000000000245e0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000241646d696e203238000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fe35fae41646d696e203239000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fe35fae",
      "0x0d434e7e000000000000000000000000980165226eab8d569640a981c68e04bc4406708800000000000000000000000000000000000000000000000000000000000024620000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000541646d696e203330000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed8bfe41646d696e203331000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed92a341646d696e203332000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed93305553444254430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fee49e05553444554480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fee49e0",
      "0x0d434e7e000000000000000000000000980165226eab8d569640a981c68e04bc440670880000000000000000000000000000000000000000000000000000000000002444000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000015553445045524c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005f9dde60",
      "0x0d434e7e000000000000000000000000980165226eab8d569640a981c68e04bc4406708800000000000000000000000000000000000000000000000000000000000024530000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000141646d696e203233000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fc67301",
      "0x0d434e7e000000000000000000000000980165226eab8d569640a981c68e04bc44067088000000000000000000000000000000000000000000000000000000000000245a0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000441646d696e203234000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fd893c641646d696e203235000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fd89aa741646d696e203236000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fd89bc941646d696e203237000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fd8a29b",
      "0x0d434e7e000000000000000000000000976570852e478361d0ff78a892eb8e45bacc937500000000000000000000000000000000000000000000000000000000000024450000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000341646d696e203230000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fa19c5c41646d696e203138000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fa19a2141646d696e203139000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fa19b26",
      "0x0d434e7e0000000000000000000000008b64673c9a482913a6e2c1298637532947cd96ee00000000000000000000000000000000000000000000000000000000000024620000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000541646d696e203330000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed8bfe41646d696e203331000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed92a341646d696e203332000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed93305553444254430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fee49e05553444554480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fee49e0",
      "0x0d434e7e0000000000000000000000006888ff4be3262f3232e1c022de731680a16ddda700000000000000000000000000000000000000000000000000000000000024620000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000541646d696e203330000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed8bfe41646d696e203331000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed92a341646d696e203332000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed93305553444254430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fee49e05553444554480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fee49e0",
      "0x0d434e7e000000000000000000000000fec2ade141272f5271febadfca5d21ca30fc04a500000000000000000000000000000000000000000000000000000000000024620000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000341646d696e203330000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed8bfe41646d696e203331000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed92a341646d696e203332000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fed9330"
    ]
  }, { gas: 3000000 }, 1.5))
}