import { useState, useEffect } from 'react';
import { debounce } from '../../lib/debounce';
/**
 * 검색창 커스텀 훅. 검색창에 쓴 값을 필터링해준다.
 * @param {string} initValue - API(pocketbase)에서 불러올 정보. 예를 들어서 products, user 등..
 * @param {string} type - data에서 불러올 정보. 예를 들어 title, nickName 등...
 * @returns ...props에 들어갈 정보들, 필터링된 키워드
 */
export default function useFormInput(initValue, type) {
  const [data, setData] = useState([]);
  const [filterKeywords, setFilterKeywords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const API_ENDPOINT = `${
    import.meta.env.VITE_PB_API
  }/api/collections/${initValue}/records`;

  // API에서 데이터 가져오기
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(API_ENDPOINT, { signal })
      .then((response) => response.json())
      .then((data) => {
        const keywords = data.items.map((item) => item[type]);
        setData(keywords);
      })
      .catch((error) => console.error(error));

    return () => {
      controller.abort();
    };
  }, [initValue]);

  // 입력에 따른 데이터 필터링
  useEffect(() => {
    const isSearchTermEmpty = searchTerm.trim().length;
    if (isSearchTermEmpty === 0) {
      return setFilterKeywords([]);
    }

    const filtered = data.filter((keyword) => keyword.includes(searchTerm));

    setFilterKeywords(filtered);
  }, [searchTerm]);

  // 검색창에 입력이 발생할 때 실행됨
  const handleData = (e) => {
    setSearchTerm(e.target.value);
  };

  const inputProps = {
    onChange: debounce(handleData, 500),
  };
  return { filterKeywords, inputProps };
}
