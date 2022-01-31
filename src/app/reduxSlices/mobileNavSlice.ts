import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MobileNavState {
  openNav: boolean;
}

const initialState: MobileNavState = {
  openNav: false,
};

export const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.openNav = action.payload;
    },
  },
});

export const { toggle } = mobileNavSlice.actions;

export default mobileNavSlice.reducer;
