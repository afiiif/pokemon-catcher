import Image from 'next/image';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { capitalizeFirstLetter } from '../../../utils/string';
import Modal from '../../common/modal';

export default function PokemonDetailModal({ pokemon, onSubmit, ...modalProps }) {
  const { id, name } = pokemon;
  const artwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const { register, handleSubmit } = useForm();

  return (
    <Modal {...modalProps}>
      <div className="text-center">
        <h2 className="font-bold text-gray-900 text-lg">{capitalizeFirstLetter(name)} Caught!</h2>
        <div className="mx-auto max-w-[200px] py-3">
          <Image
            src={artwork}
            alt={name}
            width={768}
            height={768}
            quality={1}
            className="drop-shadow-md"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nickname" className="block pb-1">Give a nickname?</label>
          <input type="text" id="nickname" className="input-text w-52" maxLength="24" {...register('nickname')} />
          <div className="flex justify-center pt-6 space-x-2">
            <button type="button" className="btn-secondary w-24" onClick={modalProps.onRequestClose}>Release</button>
            <button type="submit" className="btn-primary w-24">Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

PokemonDetailModal.propTypes = {
  pokemon: PropTypes.object,
  onSubmit: PropTypes.func,
};
