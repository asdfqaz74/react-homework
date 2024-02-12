import { useEffect, useState } from 'react';

export default function useGetStorage() {
  const [storageId, setStorageId] = useState(null);
  // 로컬스토리지에서 내 아이디 정보 가져오기
  useEffect(() => {
    const storage = localStorage.getItem('pocketbase_auth');
    if (storage) {
      const parsedStorage = JSON.parse(storage);
      if (parsedStorage.model.id) {
        setStorageId(parsedStorage.model.id);
      }
    }
  }, []);
  console.log(storageId);

  return storageId;
}
