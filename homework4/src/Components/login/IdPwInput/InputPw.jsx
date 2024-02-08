import useCheckedValue from './useCheckedValue';

export default function InputPw() {
  const pwRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
  const { value, checkedValue, handleInput } = useCheckedValue(pwRegex);

  return (
    <>
      <label htmlFor="password" className="sr-only">
        비밀번호
      </label>
      <input
        value={value}
        onChange={handleInput}
        type="password"
        id="password"
        placeholder="비밀번호 입력"
        className="border px-2 py-1"
      />
      {!checkedValue && value && (
        <p className="text-sm text-error">
          최소 8자리 알파벳,숫자,특수문자를 조합해주세요.
        </p>
      )}
    </>
  );
}
