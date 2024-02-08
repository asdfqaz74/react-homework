import { exact, string, func, bool } from 'prop-types';

export default function InputId({ value, onChange, checkedValue }) {
  return (
    <>
      <label htmlFor="email" className="sr-only">
        이메일
      </label>
      <input
        value={value}
        onChange={onChange}
        type="email"
        id="email"
        placeholder="이메일 입력"
        className="border px-2 py-1"
      />
      {!checkedValue && value && (
        <p className="text-sm text-error">이메일을 올바르게 입력해주세요.</p>
      )}
    </>
  );
}

InputId.propTypes = exact({
  value: string.isRequired,
  onChange: func.isRequired,
  checkedValue: bool.isRequired,
});
