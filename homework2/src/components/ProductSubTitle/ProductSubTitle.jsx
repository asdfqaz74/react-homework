import { timeAgo } from '../../lib/utils';

export default function ({ time }) {
  return (
    <div className="text-sm text-Contents-contentTertiary font-normal sm:text-lg mb-1">
      <span>동네 </span>
      <span>{timeAgo(time)}</span>
    </div>
  );
}
