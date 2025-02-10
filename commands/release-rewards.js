import { createContract } from '../index.js'
import pRetry from 'p-retry'

export const releaseRewards = async opts => {
  const { contractWithSigner } = await createContract(opts)
  console.error('Please sign on your ledger...')
  const tx = await contractWithSigner.releaseRewards()
  console.log(tx.hash)
  console.log('Awaiting confirmation...')
  await pRetry(() => tx.wait())
  console.log('Rewards released')
}
