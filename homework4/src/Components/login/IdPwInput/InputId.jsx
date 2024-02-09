export default function InputId({ value, onChange, children }) {
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
      {children}
    </>
  );
}
