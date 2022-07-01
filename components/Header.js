import Link from 'next/Link';

export default (props) => {
  const data = 'props.data';
  const active = props.active;
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/">
            <a className="home">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="about">How does it work?</a>
          </Link>
        </li>
        <li>
          <Link href={`/details`}>
            <a className="details">Details</a>
          </Link>
        </li>
      </ul>

      {/* styles */}
      <style jsx>
        {`
          .navbar {
            padding: 20px 10px 0;
            margin: 0 40px 10px;
            border-bottom: 1px solid black;
          }

          .navbar li {
            font-size: 30px;
            display: inline;
            margin: 0 10px;
          }
          a {
            color: black;
            text-decoration: none;
          }
          a:hover {
            color: grey;
            text-decoration: underline;
          }
          .${active} {
            text-decoration: underline;
          }
        `}
      </style>
      <style global jsx>
        {`
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
          .container {
            max-width: 1400px;
            margin: 25px auto;
            padding: 25px;
            border: 1px solid grey;
          }
        `}
      </style>
    </div>
  );
};
