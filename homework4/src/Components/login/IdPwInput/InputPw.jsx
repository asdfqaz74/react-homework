import { elementType, func, string } from 'prop-types';

export default function InputPw({ value, onChange, children }) {
  return (
    <>
      <label htmlFor="password" className="sr-only">
        비밀번호
      </label>
      <input
        value={value}
        onChange={onChange}
        type="password"
        id="password"
        placeholder="비밀번호 입력"
        className="border px-2 py-1"
      />
      {children}
    </>
  );
}

InputPw.propTypes = {
  value: string,
  onChange: func,
  // children: elementType,
};
