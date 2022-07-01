import Header from '../components/Header.js';

export default () => {
  return (
    <div>
      <Header active="about" />
      <div className="container">
        <p>This is a stars wars api.</p>
        <br />

        <h4>
          Have you have had questions about the star wars universe? Have you
          ever wanted to build your own universe with its own lore but simply
          can't think of names and details for your planets and characters? Are
          you a big star wars fan and want to base your made up universe on the
          famous franchise?
        </h4>
        <br />
        <h3>
          <u>Well, now you can!</u>
        </h3>
        <br />

        <h5>How do it work?</h5>
        <p>
          Simply select the type of information you want (i.e. If you want
          people, select people. If you want starship names, select starships)
          from the <em>'type'</em> dropdown and then select a random number
          between 1 and 100 to return a random set of information about the type
          of starwars information you want. Sounds simple enough, no?
        </p>
        <br />

        <p>
          Heres an example: <br />I want to name one of my characters, therefore
          I'll select people and a random number (3), hit enter and let the
          website do the rest!
        </p>
        <br />
        <p>
          Wow, just like that you have all the information to design your
          character based on the star wars franchise! So cool right?
        </p>
        <br />
        <h4>
          Go ahead and have fun using the <em>Star Wars API</em>!
        </h4>
      </div>
      <style jsx>{`
        .container {
          width: 600px;
          text-align: center;
          word-wrap: normal;
        }
      `}</style>
    </div>
  );
};
