import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { addNumber, minusNumber, inputSetNumber } from '../../store/modules/number/numberSlice';
import Test from '../Test';

const Main = () => {
  const dispatch = useAppDispatch();

  // selector 같은 경우는 store 내부의 state 가져올 때 쓰임.
  const number = useAppSelector(state => state.number.number);
  const [input, setInput] = useState(0);

  const handleAdd = () => {
    // 스토어 접근해서 액션함수 호출
    dispatch(addNumber());
  };

  const handleMinus = () => {
    // 스토어 접근해서 액션함수 호출
    dispatch(minusNumber());
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(Number(e.target.value));
  };
  const handleClickAddButton = () => {
    // 스토어 접근해서 액션함수 호출
    // 파라미터 같은 경우는 슬라이스에서 action.payload로 관리.
    dispatch(inputSetNumber(input));
  };
  return (
    <div>
      <div>
        <p>{number}</p>
      </div>
      <div>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleMinus}>-1</button>
      </div>

      <input type='text' value={input} onChange={handleChange} />
      <button onClick={handleClickAddButton}>send</button>
    </div>
  );
};

export default Main;
