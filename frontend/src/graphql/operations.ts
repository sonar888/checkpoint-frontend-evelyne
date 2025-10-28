import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
  query Countries {
  countries {
    code
    continent {
      id
      name
    }
    emoji
    id
    name
  }
}
`;

export const GET_ALL_CONTINENTS = gql`
query Continents {
  continents {
    id
    name
  }
}
`;

export const GET_COUNTRY_BY_CODE = gql`
query Country($code: String!) {
  country(code: $code) {
    code
    continent {
      id
      name
    }
    emoji
    id
    name
  }
}
`;

export const GET_CONTINENT_BY_ID = gql`
query Continent($id: ID!) {
  continent(id: $id) {
    id
    name
  }
}
`;

export const ADD_COUNTRY = gql`
mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data)
}
`;

export const ADD_CONTINENT = gql`
mutation AddContinent($data: NewContinentInput!) {
  addContinent(data: $data)
}
`;