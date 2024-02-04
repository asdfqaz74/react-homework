import { useEffect, useRef } from 'react';
import '../../styles/main.css';
import { SearchForm, SearchList } from '../components';

function App() {
  const firstH2Ref = useRef(null);
  const secondH2Ref = useRef(null);

  useEffect(() => {
    const { current: first } = firstH2Ref;
    const { current: second } = secondH2Ref;

    if (first) {
      first.addEventListener('pointerenter', (e) => {
        e.target.style.backgroundColor = '#ffafaf';
      });
      first.addEventListener('pointerleave', (e) => {
        e.target.style.backgroundColor = '';
      });
    }
    if (second) {
      second.addEventListener('pointerenter', (e) => {
        e.target.style.backgroundColor = '	#7FFFD4';
      });
      second.addEventListener('pointerleave', (e) => {
        e.target.style.backgroundColor = '';
      });
    }
  });

  return (
    <>
      <div role="group" className="min-h-[30vh]">
        <h2 ref={firstH2Ref}>상품을 검색해보세요.</h2>
        <SearchForm initValue={'products'} type={'title'} />
      </div>
      <div role="group" className="min-h-[30vh]">
        <h2 ref={secondH2Ref}>이름을 검색해보세요.</h2>
        <SearchForm initValue={'users'} type={'nickName'} />
      </div>
      <SearchList />
    </>
  );
}

export default App;
