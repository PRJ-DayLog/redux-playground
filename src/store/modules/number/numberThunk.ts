import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 각각의 api들을 별도로 관리하는 함수들의 집합
export const loadNumber = createAsyncThunk(
  // 액션 이름 규칙 === 리듀서이름/함수이름
  'number/loadNumber',
  async () => {
    const response = await axios.get(`url`);

    return response.data; // 리턴값이 배열형식이다. 라고 가정
  },
);

// 숫자를 보낸다.
export const sendNumber = createAsyncThunk('number/sendNumber', async (param: number) => {
  const response = await axios.post(`url`, {
    number: param,
  });

  return response.data;
});
