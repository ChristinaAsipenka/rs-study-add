import { ICountry } from "../interfaces/ICountry";
import { Country } from "./Country";

interface CountryProps {
  countries: ICountry[];
}

export function SecondBlock(props: CountryProps) {
  return (
    <div>
      <h2>Second Block</h2>
      { props.countries.map((country, index) => <Country country={country} key={index}/>) }
    </div>
  );
}
