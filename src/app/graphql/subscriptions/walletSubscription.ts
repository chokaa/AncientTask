import { gql } from 'apollo-angular'

export const WALLET_UPDATE = gql`subscription OnUpdateWallet {
    updateWallet {
      wallet {
        id
        amount
        name
      }
    }
  }
`