import { useState } from 'react';

export default function InputId() {
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

  return (
    <>
      <label htmlFor="email" className="sr-only">
        이메일
      </label>
      <input
        value={email}
        onChange={handleInput}
        type="email"
        id="email"
        placeholder="이메일 입력"
        className="border px-2 py-1"
      />
      {!checkedId && email && (
        <p className="text-sm text-error">이메일을 올바르게 입력해주세요.</p>
      )}
    </>
  );
}

// 이메일 정규식
// ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
