const increment = 'increment';
const decrement = 'decrement';
const reset = 'reset';

export const increment_state = () => ({ type: increment });

export const decrement_state = () => ({ type: decrement });

export const reset_state = (payload) => ({
  type: reset,
  payload,
});

const initial_state = 0;

export default function counter_store(state = initial_state, action) {
  switch (action.type) {
    case decrement:
      return state - 1;
    case increment:
      return state + 1;
    case reset:
      return action.payload;
    default:
      return state;
  }
}
