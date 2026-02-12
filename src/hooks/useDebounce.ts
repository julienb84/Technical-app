// REACT HOOKS //
import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number) => {
  const [isDebounced, setIsDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDebounced(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return isDebounced;
};

export default useDebounce;
