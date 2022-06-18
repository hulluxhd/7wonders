import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
      console.log(isComponentVisible);
    }
  };

  const close = () => {
    setIsComponentVisible(false);
    console.log(isComponentVisible);
  };

  const open = () => {
    setIsComponentVisible(true);
    console.log(ref);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return {
    ref,
    isComponentVisible,
    setIsComponentVisible,
    close,
    open
  };
}
