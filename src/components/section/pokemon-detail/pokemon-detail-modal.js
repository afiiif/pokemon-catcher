import Image from 'next/image';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { getPokemonImage } from '../../../helpers/pokemon';
import { capitalizeFirstLetter } from '../../../utils/string';
import Modal from '../../common/modal';
import { usePokemonStorage } from '../../wrapper/pokemon-storage-context';

export default function PokemonDetailModal({ pokemon, onSubmit, ...modalProps }) {
  const { id, name } = pokemon;
  const artwork = getPokemonImage(id);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { pokemonStorage } = usePokemonStorage();
  const pokemonNicknames = pokemonStorage.map(({ nickname }) => nickname.toLowerCase());

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
          <label htmlFor="nickname" className="block pb-1">Give a nickname:</label>
          <input
            type="text"
            id="nickname"
            className="input-text w-52"
            maxLength="24"
            {...register('nickname', {
              required: true,
              validate: (v) => !pokemonNicknames.includes(v.toLowerCase()) || `${v} already exist, use other nickname`,
            })}
          />
          {errors.nickname && (
            <div className="text-red-500 text-xs">{errors.nickname.message || 'Please enter a nickname'}</div>
          )}
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
