import Header from '../components/Header.js';
import Films from '../components/Films.js';
import People from '../components/People.js';
import Planets from '../components/Planets.js';
import Species from '../components/Species.js';
import Vehicles from '../components/Vehicles.js';
import Starships from '../components/Starships.js';
import { withRouter } from 'next/router';

const details = withRouter((props) => {
  const type = props.router.query.type;
  if (type === 'planets') {
    var data = {};
  }
  if (type === 'starships') {
    var data = {};
  }
  if (type === 'vehicles') {
    var data = {};
  }
  if (type === 'people') {
    var newData = {
      name: props.router.query.name,
      gender: props.router.query.gender,
      height: props.router.query.height,
      mass: props.router.query.mass,
      hair_color: props.router.query.hair_color,
      skin_color: props.router.query.skin_color,
      eye_color: props.router.query.eye_color
    };

    var name = props.router.query.name;
    console.log(name);
  }
  if (type === 'films') {
    var data = {};
  }

  if (type === 'species') {
    var data = {};
  }
  console.log(type);
  return (
    <div>
      <Header active="details" />
      {type === 'planets' && (
        <Planets info={{ data: newData, type: type, state: true }} />
      )}
      {type === 'starships' && (
        <Starships info={{ data: data, type: type, state: true }} />
      )}
      {type === 'vehicles' && (
        <Vehicles info={{ data: data, type: type, state: true }} />
      )}
      {type === 'people' && (
        <People info={{ data: newData, type: type, state: true }} />
      )}
      {type === 'films' && (
        <Films info={{ data: data, type: type, state: true }} />
      )}
      {type === 'species' && (
        <Species info={{ data: data, type: type, state: true }} />
      )}
      <style jsx>{`
        .container {
          margin: auto;
          text-align: center;
          word-wrap: normal;
        }
      `}</style>
    </div>
  );
});

export default details;
