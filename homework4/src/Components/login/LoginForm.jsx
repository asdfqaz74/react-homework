import InputId from './IdPwInput/InputId';
import InputPw from './IdPwInput/InputPw';
import useCheckedValue from './IdPwInput/useCheckedValue';
import LoginButton from './LoginButton/LoginButton';

export default function LoginForm() {
  useCheckedValue;
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFE650] h-screen gap-40">
      <form method="post">
        <div className="flex flex-col gap-1 mb-3">
          <InputId />
          <InputPw />
        </div>
        <LoginButton />
        <div className="flex gap-2 mt-4">
          <input type="checkbox" name="remember" id="remember" className="" />
          <label htmlFor="remember">Remember me</label>
        </div>
      </form>
      <button
        type="button"
        className="bg-[#ffff] px-20 py-1 rounded-sm font-semibold"
      >
        계정 생성하기
      </button>
    </div>
  );
}
