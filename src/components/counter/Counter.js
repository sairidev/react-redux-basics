import { useState } from 'react';
import { connect } from 'react-redux';
import {
  decrement_state,
  increment_state,
  reset_state,
} from '../../reducers/counter';
import './counter.css';

function Counter({ increment, decrement, reset, state }) {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div id='counter'>
      <h2>{state}</h2>
      <span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </span>
      <br />
      <span>
        <input type='text' onChange={handleChange} />
        <button onClick={() => reset(value)}>Set Value</button>
      </span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment_state()),
  decrement: () => dispatch(decrement_state()),
  reset: (payload) => dispatch(reset_state(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
