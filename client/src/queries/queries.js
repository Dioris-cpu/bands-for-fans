import { gql } from "apollo-boost";

const getBandsQuery = gql`
  {
    bands {
      name
      id
    }
  }
`;

const getAlbumsQuery = gql`
  {
    albums {
      name
      id
    }
  }
`;

const addAlbumsMutation = gql`
  mutation AddAlbum($name: String!,$released: Number!, $genre: String!, $bandId: ID!) {
    addBook(name: $name, released: $released, genre: $genre, bandId: $bandId) {
      name
      id
    }
  }
`;

const getAlbumQuery = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      released
      genre
      band {
        id
        name
        orgin
        albums {
          name
          id
        }
      }
    }
  }
`;

export { getBandsQuery, getAlbumsQuery, addAlbumsMutation, getAlbumQuery };
