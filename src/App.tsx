import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch('../stat/stat.json');
    //   const jsonData = await response.json();
    //   console.log(jsonData);
    //   setData(jsonData);
    // };

    // fetchData();
    fetch('./stat.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then((data) => {
        // Process the JSON data
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
      });
  }, []);
  return <div>{data}</div>;
}
