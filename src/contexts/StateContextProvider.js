import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const StateContext = createContext();

export default function StateContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async url => {
    setLoading(true);
    console.log(url);
    const options = {
      method: 'GET',
      url: `https://google-search3.p.rapidapi.com/api/v1${url}&num=40`,
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'US',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        // 'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        console.log(response);
        setResults(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);

//url: `https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk`,
