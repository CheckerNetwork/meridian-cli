import { createContract } from '../index.js'

export const tick = async opts => {
  const { contractWithSigner } = await createContract(opts)
  console.error('Please sign on your ledger...')
  const tx = await contractWithSigner.tick()
  console.log(tx.hash)
}
