import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/web-storage';

export default function usePersistState(key, initialState, onChange = () => { }) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(getLocalStorage(key));
  }, []);

  const setStateAndStorage = (newState) => {
    setState(newState);
    setLocalStorage(key, newState);
    onChange(newState);
  };

  return [state, setStateAndStorage];
}
