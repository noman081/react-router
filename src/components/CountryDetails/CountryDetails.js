import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]));
    }, []);
    const { name, flags, population, region, subregion, area } = country;
    const imgUrl = flags?.png;
    return (
        <div>
            <h1 className='text-4xl'>Hello {countryName}!</h1>

            <img className='mx-auto' src={imgUrl} alt="" />
            <h3 className="text-4xl mb-2 font-bold">{name?.common}</h3>
            <h3 className="text-2xl mb-2">Area: {area}</h3>
            <h3 className="text-2xl mb-2">Population: {population}</h3>
            <h3 className="text-2xl mb-2">Region: {region}</h3>
            <h3 className="text-2xl mb-2">Sub-region: {subregion}</h3>
        </div>
    );
};

export default CountryDetails;