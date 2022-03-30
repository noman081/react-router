import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <h1 className="text-4xl">Welcome to our world! {countries.length}</h1>
            {
                countries.map(country => <Link key={country.cca3} className='text-blue-500 mr-4' to={`/country/${country.name.common}`}>{country.name.common}</Link>)
            }
        </div>
    );
};

export default Countries;