import { createContract } from '../index.js'

export const setNextRoundLength = async ({ blocks, ...opts }) => {
  const { contract, contractWithSigner } = await createContract(opts)
  console.log(`setting next round length to ${blocks} blocks`)
  console.log(`current value: ${await contract.nextRoundLength()} blocks`)

  console.error('Please sign on your ledger...')
  const tx = await contractWithSigner.setNextRoundLength(blocks)
  console.log(tx.hash)
  console.log('Awaiting confirmation...')
  await tx.wait()
}
