import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const basURL = 'https://api.spacexdata.com/v3/dragons';

const GET_DRAGONS = 'DragonStore/Dragon/GET_DRAGONS';

export const getDragons = createAsyncThunk(
  GET_DRAGONS,
  async () => {
    const response = await fetch(basURL);
    return response.json();
  },
);

const initialState = [];

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserve: (state, action) => state.map((dragon) => {
      if (dragon.id !== action.payload.id) {
        return dragon;
      }
      return { ...dragon, reserved: !dragon.reserved };
    }),

  },
  extraReducers: (builder) => {
    builder.addCase(getDragons.fulfilled, (state, action) => action.payload);
  },
});
export const { reserve } = dragonSlice.actions;
export default dragonSlice.reducer;
