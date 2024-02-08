/**
 * 인풋값에 들어갈 값을 유효성 검사해주는 커스텀 훅(Hook).
 * @param {string} handleInput - onChange에 들어갈 값
 * @param {string} checkedId - input
 */
function useCheckedValue(email, checkedId, handleInput) {
  const [email, setEmail] = useState('');
  const [checkedId, setCheckedId] = useState(false);

  const handleInput = (e) => {
    // email 인풋값
    const { value } = e.target;
    setEmail(value);

    // 정규식 검사
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidId = regex.test(value);
    setCheckedId(isValidId);
  };
}
