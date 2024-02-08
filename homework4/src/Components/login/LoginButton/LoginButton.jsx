import useFetch from './useFetch';

export default function LoginButton() {
  const api = '/api/collections/users/records';
  const users = useFetch(api);
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <button
      type="submit"
      className="w-full bg-[#8B4513] rounded-sm text-background py-1 font-semibold"
      onClick={handleClick}
    >
      로그인
    </button>
  );
}
