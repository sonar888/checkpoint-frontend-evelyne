import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import CountryCard from "./CountryCard";
import Form  from "./form/Form";
import { useGetAllCountriesQuery } from "../generated/graphql-types";


export function PageLayout() {
  const {data, loading, error} = useGetAllCountriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;



  return (
    <body>
      <Header />
      <main>
        <Outlet />
        <Form />

        <div> 
          {data?.getAllCountries.map((country)=> {
            return (
              <CountryCard name={country.name} code={country.code} hasFlag={country.code ? true : false} />

            )
          })}
        </div>

        

      </main>
    </body>
  );
}
