export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFE650] h-screen gap-40">
      <form method="post">
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="email" className="sr-only">
            이메일
          </label>
          <input
            value={'asdf'}
            type="email"
            id="email"
            placeholder="이메일 입력"
            className="border px-2 py-1"
          />
          <label htmlFor="password" className="sr-only">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호 입력"
            className="border px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#8B4513] rounded-sm text-background py-1 font-semibold"
        >
          로그인
        </button>
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
