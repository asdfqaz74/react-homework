import { useState } from 'react';
import { string, bool, func, exact } from 'prop-types';

/**
 * 인풋값에 들어갈 값을 유효성 검사해주는 커스텀 훅(Hook).
 * @param {string} Regex - 정규식 설정(아이디/비밀번호)
 * @returns {object} 훅에서 반환하는 객체
 * - `value` : 사용자 입력값을 저장.
 * - `checkedValue` : 입력값이 주어진 정규식(Regex)에 부합하는지 여부를 나타내는 boolean 값.
 * - `handleInput` : 입력 필드의 onChange 이벤트를 처리하는 함수.
 */
function useCheckedValue(Regex) {
  const [value, setValue] = useState('');
  const [checkedValue, setCheckedValue] = useState(false);

  const handleInput = (e) => {
    // 인풋값 설정
    const { value } = e.target;
    setValue(value);

    // 정규식 검사
    const regex = Regex;
    const isValid = regex.test(value);
    setCheckedValue(isValid);
  };

  return { value, checkedValue, handleInput };
}

useCheckedValue.propTypes = exact({
  value: string.isRequired,
  checkedValue: bool.isRequired,
  handleInput: func.isRequired,
});

export default useCheckedValue;
