// Imports
import Link from 'next/Link';
import fetch from 'isomorphic-unfetch';
// Importing a header tag to add the script for bootstrap
import Head from 'next/head';
// importing react-bootstraps components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// importing the components
import Header from '../components/Header.js';
import Films from '../components/Films.js';
import People from '../components/People.js';
import Planets from '../components/Planets.js';
import Species from '../components/Species.js';
import Vehicles from '../components/Vehicles.js';
import Starships from '../components/Starships.js';

// Importing hooks
import { useState } from 'react';

// creating function for a fetching data from the api
export const getIinitialProps = async (type) => {
  // fetching the data
  const res = await fetch(`https://swapi.dev/api/${type}/`);
  const data = await res.json();

  // returning the data
  return data.results;
};

export default () => {
  // creating states/ hooks
  const [type, setType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  // creating a funciton to handle the form submit on the home page
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    if (type === '') {
      return setErrorMessage('Please select a type');
    }

    const newData = await getIinitialProps(type);
    setLoading(false);
    setData(newData);
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <div>
        <Header active="home" data={data} />

        <div className="container">
          <div className="form">
            <form>
              <label htmlFor="type">
                Choose the type of information you want:{' '}
              </label>
              <select
                id="type"
                name="type"
                onChange={(e) => setType(e.target.value)}
              >
                <option>Select a type...</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
              </select>
              <div className="errorValidation">{errorMessage}</div>
              <button onClick={handleSubmit}>Submit</button>
            </form>
          </div>
          {loading && <div className="loading">Fetching data...</div>}
          {data && (
            <div className="output">
              {console.log(data)}
              {type === 'planets' && (
                <Planets info={{ data: data, type: type, state: false }} />
              )}
              {type === 'starships' && (
                <Starships info={{ data: data, type: type, state: false }} />
              )}
              {type === 'vehicles' && (
                <Vehicles info={{ data: data, type: type, state: false }} />
              )}
              {type === 'people' && (
                <People info={{ data: data, type: type, state: false }} />
              )}
              {type === 'films' && (
                <Films info={{ data: data, type: type, state: false }} />
              )}
              {type === 'species' && (
                <Species info={{ data: data, type: type, state: false }} />
              )}

              <p>
                You have selected <span className="selectedType">{type}</span>.
                Head over to the{' '}
                <Link href="/details">
                  <a>details page</a>
                </Link>{' '}
                for more information!
              </p>
            </div>
          )}
        </div>
        <style jsx>{`
          form {
            display: flex;
            flex-direction: column;
            text-align: center;
          }
          form * {
            margin: 2px 0;
            padding: 5px;
          }
          .form {
            width: 400px;
            margin: auto;
          }
          .errorValidation {
            color: red;
          }
          .selectedType {
            font-weight: bold;
            font-size: 18px;
          }
          .output {
            margin-top: 30px;
            padding: 10px;
            display: grid;
            grid-template-colums: 300px 300px 300px 300px;
          }
          a {
            color: black;
          }
          a:hover {
            color: grey;
            text-decoration: underline;
          }
          .loading {
            margin: 20px 0 0;
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
};
