import {useEffect} from 'react';

const useOnEscPress = (
  isOpen: boolean,
  handler: () => void
) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleESC = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler();
      }
    };

    document.addEventListener('keydown', handleESC);

    return () => document.removeEventListener('keydown', handleESC);
  }, [isOpen, handler]);
};

export default useOnEscPress;
