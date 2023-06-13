import { createSlice } from '@reduxjs/toolkit';
const initialState={
    like: 0,
    love: 0
  }
const countSlice = createSlice({
  name: 'count',
   initialState,
  reducers: {
    LikeIncrement: (state, action) => {
      state.like += 1;
    },
    LikeDecrement:(state,action)=>{
        state.like-=1;
    },
    LoveIncrement: (state, action) => {
        state.love += 1;
      },
      LoveDecrement:(state,action)=>{
          state.love-=1;
      },
  }
});

export const {LoveDecrement,LoveIncrement,LikeDecrement,LikeIncrement  } = countSlice.actions;
export default countSlice.reducer;
