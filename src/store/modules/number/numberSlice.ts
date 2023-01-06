import { createSlice } from '@reduxjs/toolkit';
import { loadNumber, sendNumber } from './numberThunk';

// 슬라이스 생성 규칙

// 1. initialState ( 초기 state값들 선언 ) : 타입은 무조건 명시해줘야 해요. 나중에
const initialState: any = {
  number: 0,
  isLoding: false,
  isFinished: false,
  isError: '',
  data: [],

  // 로그인
  // 사용자가 id, pw 기입하고 send
  // 로그인 api 호출 -> fulfilled 라우팅 시키면서 userSlice의 user state에 response값 저장.

  // data : {
  //     userId: "",
  //     userNickName: "",
  // },
  // isLoading: false,
  // isFinished: true,

  // Promise 객체의 리턴 애들
  // pending,--> 데이터 받아오는 중. ( 호출 -> 로딩 )
  // fulfilled, --> 데이터 받아옴 200ok
  // rejected --> 데이터 받아오는 중 실패
};

// Slice 생성 -> slice는 기능별로 하나씩. 사실상 slice.ts 파일은 기능별 한개.
const numberSlice = createSlice({
  name: 'number',
  initialState,

  // api 제외한 내부적으로 state 업데이트 할 액션들 === reducers
  reducers: {
    // 내부적
    addNumber: state => {
      state.number = state.number + 1;
    },
    minusNumber: state => {
      state.number = state.number - 1;
    },
    inputSetNumber: (state, action) => {
      state.number = action.payload;
    },
  },

  // api thunk를 활용해서 가져오는 action 함수
  extraReducers: builder => {
    // pending === 호출 -> 응답 직전까지
    builder.addCase(loadNumber.pending, (state, action) => {
      state.isLoading = true;
      state.isFinished = false;
    });
    // fulfilled === 호출 후 응답 Ok
    builder.addCase(loadNumber.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    // rejected === 호출 후 응답 실패
    builder.addCase(loadNumber.rejected, (state, action) => {
      state.isError = action.payload;
    });
    // pending === 호출 -> 응답 직전까지
    builder.addCase(sendNumber.pending, (state, action) => {
      state.isLoading = true;
      state.isFinished = false;
    });
    // fulfilled === 호출 후 응답 Ok
    builder.addCase(sendNumber.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    // rejected === 호출 후 응답 실패
    builder.addCase(sendNumber.rejected, (state, action) => {
      state.isError = action.payload;
    });
  },
});

export const { addNumber, minusNumber, inputSetNumber } = numberSlice.actions;
export default numberSlice.reducer;
