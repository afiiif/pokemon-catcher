import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { useModalContext } from '../components/wrapper/modal-context';
import useModal from './use-modal';

export default function useCatchPokemon() {
  const [isShowPokeballButton, setIsShowPokeballButton] = useState(true);
  const [isThrowingPokeball, setIsThrowingPokeball] = useState();

  const { push } = useRouter();

  const modal = useModal();
  const modalGlobal = useModalContext();

  const handleThrowPokeball = () => {
    setIsThrowingPokeball(true);
  };

  const catchPokemon = () => {
    const isCatched = Math.random() < 0.5;
    if (isCatched) {
      modal.open();
      return;
    }
    setIsThrowingPokeball(false);
    setIsShowPokeballButton(true);
  };

  const successNotificationBody = (
    <>
      You can see your pokémon on{' '}
      <button
        type="button"
        className="link"
        onClick={() => { push('/my-pokemons'); modalGlobal.close(); }}
      >My Bag
      </button>
      {' '}menu.
    </>
  );

  const closeModal = (isSaved) => {
    modal.close();
    if (isSaved) {
      modalGlobal.success(
        'Pokémon Saved',
        successNotificationBody,
      );
    }
  };

  useEffect(() => {
    let timeoutSpin;
    let timeoutThrow;
    if (isThrowingPokeball) {
      timeoutSpin = setTimeout(() => {
        setIsShowPokeballButton(false);
      }, 1800);
      timeoutThrow = setTimeout(() => {
        catchPokemon();
      }, 5600);
    }
    return () => {
      clearTimeout(timeoutSpin);
      clearTimeout(timeoutThrow);
    };
  }, [isThrowingPokeball]);

  return {
    isThrowingPokeball,
    isShowPokeballButton,
    modalProps: {
      ...modal.props,
      onAfterClose: () => {
        setIsThrowingPokeball(false);
        setIsShowPokeballButton(true);
      },
    },
    closeModal,
    handleThrowPokeball,
  };
}
