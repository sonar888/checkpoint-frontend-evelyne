export function useGetAllCountriesQuery(
  baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>
) {
  return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(
    GetAllCountriesDocument,
    baseOptions
  );
}