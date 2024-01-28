import { comma } from '../../lib/utils';

export default function ProductPrice({ price }) {
  return (
    <div className="text-base font-semibold leading-normal sm:text-xl">
      <span>{comma(price)}원</span>
    </div>
  );
}
