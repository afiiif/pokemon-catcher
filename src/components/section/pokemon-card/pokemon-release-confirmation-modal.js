import Image from 'next/image';
import PropTypes from 'prop-types';
import { getPokemonImage } from '../../../helpers/pokemon';
import { capitalizeFirstLetter } from '../../../utils/string';
import Modal from '../../common/modal';
import { useModalContext } from '../../wrapper/modal-context';
import { usePokemonStorage } from '../../wrapper/pokemon-storage-context';

export default function PokemonReleaseConfirmationModal({ pokemon, ...modalProps }) {
  const { id, name, nickname, catchedAt } = pokemon;
  const artwork = getPokemonImage(id);

  const finalName = nickname || capitalizeFirstLetter(name);

  const { releasePokemon } = usePokemonStorage();
  const { info } = useModalContext();

  const onRelease = () => {
    releasePokemon(catchedAt);
    modalProps.onRequestClose();
    info('Pokémon Released', `${finalName} has been released.`);
  };

  return (
    <Modal {...modalProps}>
      <div className="text-center">
        <h2 className="font-bold text-gray-900 text-lg">Release Pokémon</h2>
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
        <div className="text-sm text-gray-700">
          Say good bye to <span className="font-semibold">{finalName}</span>?
        </div>
        <div className="flex justify-center pt-6 space-x-2">
          <button type="button" className="btn btn-secondary w-24" onClick={modalProps.onRequestClose}>Cancel</button>
          <button type="button" className="btn btn-primary w-24" onClick={onRelease}>Release</button>
        </div>
      </div>
    </Modal>
  );
}

PokemonReleaseConfirmationModal.propTypes = {
  pokemon: PropTypes.object,
};
