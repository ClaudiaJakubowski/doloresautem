// Web3/Provider related
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { Contract } from 'web3-eth-contract'
import { TransactionReceipt } from 'web3-core'

import { CSSObject } from 'styled-components'

export interface WraptorComponentProps {
  type: 'ETH' | 'TOKEN'
  provider: Web3
  contractAddress: string
  userAddress: string
  // style
  customStyle?: CSSObject
  buttonLabels?: {
    showAllowance: string
    showBalance: string
    approve: string
    wrap?: string
    unwrap?: string
  }
  tokenDisplay?: {
    name: string
    symbol: string
    decimals: string | number
  }
  fixedNumberAmount?: number
  header?: string | Function
}

export interface WraptorParams {
  provider?: Web3
  contractAddress?: string
  userAddress?: string
}

export interface Wraptor {
  contract?: Contract
  tokenDisplay: { name?: string; symbol?: string; decimals?: string }
  userBalanceWei: string
  userAllowanceWei: string
  getBalance: () => Promise<void>
  getAllowance: () => Promise<void>
  getTokenDisplay: () => Promise<void>
  approve: ({ spenderAddress, amount }: { spenderAddress?: string; amount: string }) => Promise<TransactionReceipt>
}

export interface EthWraptor extends Wraptor {
  wrap: ({ amount }: { amount: string }) => Promise<TransactionReceipt>
  unwrap: ({ amount }: { amount: string }) => Promise<TransactionReceipt>
}

export interface TargetValueInterface {
  target: { value: string }
}

export { Contract, TransactionReceipt, AbiItem }
