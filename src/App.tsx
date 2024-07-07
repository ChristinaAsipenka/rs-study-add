import { useState } from "react";
import "./App.css";
import { FirstBlock } from "./components/FirstBlock";
import { SecondBlock } from "./components/SecondBlock";

import { ICountry } from "./interfaces/ICountry";

function App() {


const [countries, setCountries] = useState<ICountry[]>([]);

function handleDataFromChild(countries: ICountry[]) {
  setCountries(countries);
}

  return (
    <div>
      <FirstBlock sendDataToParent={ handleDataFromChild }/>
      <SecondBlock countries={countries}/>
    </div>
  );
}

export default App;
