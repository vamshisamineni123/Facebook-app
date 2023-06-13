import { configureStore } from '@reduxjs/toolkit'
import LikeReducer from '../src/reducers/LikeSlice'

export const store = configureStore({
  reducer: {
        likelove:LikeReducer
  },
})