export interface CurrentUser {
  id: string,
  name: string,
  wallets:Wallet[]
}

export interface Wallet {
  id: string,
  amount: number,
  currency: number
}