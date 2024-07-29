import { useState } from 'react';
import PropTypes from 'prop-types';

const Joke = () => {
///////////////////////////LLAMAR API///////////////////////////////////
  const Button = (props) => {
    return <button onClick={props.callApi}>CARGAR FRASE!</button>;
  };
  //le decimos a React que la prop 'callApi' es una función requerida//
  Button.propTypes = {
    callApi: PropTypes.func.isRequired,
  };
///////////////////////////ACTUALIZA LA FRASE///////////////////////////////////
  const [joke, setJoke] = useState('');

  const fetchApi = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  };
//////////////////////////////////////////////////////////////
  return (
    <div className="joke">
      <h2>{joke}</h2>

      <Button callApi={fetchApi} />
    </div>
  );
};

export default Joke;