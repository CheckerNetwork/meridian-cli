import { createContract } from '../index.js'
import { formatEther } from 'ethers'

export const availableBalance = async opts => {
  const { contract } = createContract(opts)
  console.log(formatEther(await contract.availableBalance()), 'FIL')
  process.exit(0)
}
