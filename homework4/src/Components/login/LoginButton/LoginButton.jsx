import { func } from 'prop-types';

export default function LoginButton({ onClick }) {
  return (
    <button
      type="submit"
      className="w-full bg-[#8B4513] rounded-sm text-background py-1 font-semibold"
      onClick={onClick}
    >
      로그인
    </button>
  );
}

LoginButton.propTypes = {
  onClick: func,
};
