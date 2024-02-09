import { useState, useEffect } from 'react';
import pb from '../../../api/pocketbase';

export default function useFetch(api) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const targetData = await pb.collection(api).getFullList();
        setData(targetData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [api]);

  return { data, error };
}
