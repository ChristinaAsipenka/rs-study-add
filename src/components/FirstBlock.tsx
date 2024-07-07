import { useState } from "react";
import { ICountry } from "../interfaces/ICountry";
import axios from "axios";

export function FirstBlock({ sendDataToParent }) {
  const [searchString, setSearchString] = useState('')

  const[countries, setCountries] = useState<ICountry[]>([]);

  async function fetchCountries() {
    const baseUrl = "https://freetestapi.com/api/v1/countries";
    const url = baseUrl + (searchString.length >0 ? "?search="+searchString : "?limit=10")
    const response = await axios.get<ICountry[]>(url)
    setCountries(response.data)
  }

  sendDataToParent(countries)
  return (
    <div>
      <h1>First Block</h1>
      <input
      type="text" 
      placeholder="Type country name ...." 
      value={searchString} 
      onChange={(e) => setSearchString(e.target.value) }
      />
      <button onClick={fetchCountries}>Search</button>
    </div>
  );
}
