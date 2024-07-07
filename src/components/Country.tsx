import { ICountry } from "../interfaces/ICountry";

interface CountryProps {
  country: ICountry;
}

export function Country(props: CountryProps) {
    return (
        <div>
            <h3>{ props.country.name }</h3>
            <p><strong>Capital</strong>: { props.country.capital }</p>
            <img src={ props.country.flag } alt={ props.country.name } />
        </div>  
    )
}
