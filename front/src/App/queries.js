import { gql } from '@apollo/client';

const GET_RESPOSITORIES_QUERY = gql`
  query GetRepositoriesUser($owner: String!) {
    user(login: $owner) {
      repositories(first: 100) {
        nodes {
          id
          name
          url
        }
      }
    }
  }
`;

export { GET_RESPOSITORIES_QUERY };
