import { useEffect, useState } from 'react';
import useModal from './use-modal';

export default function useCatchPokemon() {
  const [isShowPokeballButton, setIsShowPokeballButton] = useState(true);
  const [isThrowingPokeball, setIsThrowingPokeball] = useState();

  const modal = useModal();

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
    handleThrowPokeball,
    modalProps: {
      ...modal.props,
      onAfterClose: () => {
        setIsThrowingPokeball(false);
        setIsShowPokeballButton(true);
      },
    },
  };
}
