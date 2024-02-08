import { useState, useEffect } from 'react';

useState;

export default function useFetch(api) {
  const END_POINT = `${import.meta.env.VITE_PB_URL}${api}`;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(END_POINT, { signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (!(error instanceof DOMException)) {
          setError(error);
        }
      });

    return () => {
      controller.abort();
    };
  }, [END_POINT, setData]);

  return data, error;
}
