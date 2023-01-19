import { gql } from 'apollo-angular'

export const GET_CURRENT_USER = gql`query {
  currentUser {
      id
      name
      wallets {
        id
        amount
        currency
     }
    }
  }
`