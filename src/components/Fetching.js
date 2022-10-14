import React, { useEffect, useState } from "react";
import "./Fetching.css";

const Fetching = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((response) => setCountries(response));
  }, []);

  return (
    <>
      <h1>COUNTRY INFO</h1>
      {countries.map((country) => {
        return (
          <div className="common" key={country.name.common}>
            {country.name.common}
            <table className="table">
              <thead className="thead">
                <tr className="tr">
                  <th className="th">CAPITAL : {country.capital}</th>
                  <th>REGION : {country.region}</th>
                  <th>POPULATION : {country.population}</th>

                  <th>
                    <p className="flags">
                      <img src={country.flags.png} alt={country.name.common} />
                      <img
                        className="coatOfArms"
                        src={country.coatOfArms.png}
                        alt={country.name.common}
                      />
                    </p>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default Fetching;
