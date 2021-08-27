import PropTypes from 'prop-types';

export default function PokemonDetailBottom({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div>{null}</div>
  );
}

PokemonDetailBottom.propTypes = {
  pokemon: PropTypes.object,
};
