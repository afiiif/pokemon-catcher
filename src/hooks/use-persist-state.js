import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/web-storage';

export default function usePersistState(key, initialState, onChange = () => { }) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const savedValue = getLocalStorage(key);
    if (typeof savedValue !== 'undefined') setState(savedValue);
  }, []);

  const setStateAndStorage = (newState) => {
    setState(newState);
    setLocalStorage(key, newState);
    onChange(newState);
  };

  return [state, setStateAndStorage];
}
