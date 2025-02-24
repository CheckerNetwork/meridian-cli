import { createContract } from '../index.js'
import pRetry from 'p-retry'

export const removeAdmin = async ({ admin, ...opts }) => {
  const { contractWithSigner } = await createContract(opts)
  console.error(`Removing ${admin} as admin. Please sign on your ledger...`)
  const tx = await contractWithSigner.revokeRole(
    contractWithSigner.DEFAULT_ADMIN_ROLE(),
    admin
  )
  console.log(tx.hash)
  console.log('Awaiting confirmation...')
  await pRetry(() => tx.wait())
}
