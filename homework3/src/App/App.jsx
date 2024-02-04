import { useEffect, useRef } from 'react';
import '../../styles/main.css';
import SearchForm from '../components/SearchForm/SearchForm';

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
      <div role="group" className="flex gap-40">
        <div>
          <h3 className="font-semibold">상품목록</h3>
          <ul>
            <li>다들 고생햄수다</li>
            <li>개발 가방 팔아욧</li>
            <li>깜빡하고 3일 열어둔 강냉이</li>
            <li>안터진 포켓베이스 팝니다</li>
            <li>나 개발 잘해 뱃지</li>
            <li>잠이 솔솔 오는 베개</li>
            <li>멋짐 뿜뿜 노랭이</li>
            <li>너무 길어서 바닥을 쓸고다니는 롱코트</li>
            <li>누구나 탐내는 코끼리점퍼</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">유저목록</h3>
          <ul>
            <li>떨어진 김찾기</li>
            <li>피카츄돈까스</li>
            <li>퐈이야!</li>
            <li>애브리바디</li>
            <li>박지인</li>
            <li>이경화</li>
            <li>강진성</li>
            <li>강태욱</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
