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
    toggleMobileNav: (state, action: PayloadAction<boolean>) => {
      state.openNav = action.payload;
    },
  },
});

export const { toggleMobileNav } = mobileNavSlice.actions;

export default mobileNavSlice.reducer;
