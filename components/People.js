// Import Link from next
import Link from 'next/link';

// importing react-bootstraps components
import Card from 'react-bootstrap/Card';

export default (props) => {
  const { data, type, state } = props.info;
  if (state) {
    var newData = props.info;

    return (
      <div>
        {' '}
        {Object.keys(newData).map((val, idx) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Body key={idx}>
                <Card.Title>{val.name}</Card.Title>
                <Card.Text>
                  Gender: {val.gender}
                  <br />
                  Height: {val.height}
                  <br />
                  Mass: {val.mass}
                  <br />
                  Hair color: {val.hair_color}
                  <br />
                  Skin color: {val.skin_color}
                  <br />
                  Eye color: {val.eye_color}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      {' '}
      {Object.keys(data).map((val, idx) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Body key={idx}>
              <Card.Title>{data[idx].name}</Card.Title>
              <Link
                href={`/details?type=${type}&name=${data[idx].name}&gender=${data[idx].gender}&height=${data[idx].height}&mass=${data[idx].mass}&hair_color=${data[idx].hair_color}&skin_color=${data[idx].skin_color}&eye_color=${data[idx].eye_color}`}
              >
                <a className="details">
                  See {data[idx].name}'s full description
                </a>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
