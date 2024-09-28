import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterType {
  value: number;
}

const initialCounter: CounterType = {
  value: 0,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, ( ) => {
        console.log("IncrementAsync is pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
  
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = CounterSlice.actions;
export default CounterSlice.reducer;
