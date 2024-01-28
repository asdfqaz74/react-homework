import { StateDone, StateReservation } from './State';

export default function ProductState({ state }) {
  let currentState;
  switch (state) {
    case 'done':
      currentState = <StateDone />;
      break;

    case 'reservation':
      currentState = <StateReservation />;
      break;

    default:
      currentState = null;
      break;
  }

  return <>{currentState}</>;
}
