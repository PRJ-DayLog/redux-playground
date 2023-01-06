import './App.css';
import { useState } from 'react';
import { Action, legacy_createStore as createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const reducer = (currentState: any, action: Action): { number: number } => {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  if (action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
};

const store = createStore(reducer);

const App = () => {
  const [number, setNumber] = useState(1);

  return (
    <div className='container'>
      <h1>Root</h1>
      <div className='grid'>
        <Provider store={store}>
          <Left1 number={number}></Left1>
          <Right1 onIncrease={() => setNumber(prev => prev + 1)}></Right1>
        </Provider>
      </div>
    </div>
  );
};

export default App;

const Left1 = (props: { number: number }) => {
  return (
    <div>
      <h1>Left1 : {props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  );
};
const Left2 = (props: { number: number }) => {
  return (
    <div>
      <h1>Left2 : {props.number}</h1>
      <Left3 number={props.number}></Left3>
    </div>
  );
};
const Left3 = (props: { number: number }) => {
  //@ts-ignore
  const number = useSelector(state => state.number);

  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
};
const Right1 = (props: { onIncrease: () => void }) => {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onIncrease={() => props.onIncrease()}></Right2>
    </div>
  );
};
const Right2 = (props: { onIncrease: () => void }) => {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 onIncrease={() => props.onIncrease()}></Right3>
    </div>
  );
};
const Right3 = (props: { onIncrease: () => void }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input
        type='button'
        value='+'
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      />
    </div>
  );
};
