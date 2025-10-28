import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import CountryCard from "./CountryCard";
import Form  from "./form/Form";
import {use}


export function PageLayout() {
  return (
    <body>
      <Header />
      <main>
        <Outlet />
        <Form />

        <div> 
          {data.map((country)=> {
            return (
              <CountryCard name={country.name} code={country.cod} hasFlag={country.code ? true : false} />

            )
          })}
        </div>

        

      </main>
    </body>
  );
}
