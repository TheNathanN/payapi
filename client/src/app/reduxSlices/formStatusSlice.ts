import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormStatusState {
  submitting: boolean;
}

const initialState: FormStatusState = {
  submitting: true,
};

export const formStatusSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    toggleSubmitting: (state, action: PayloadAction<boolean>) => {
      state.submitting = action.payload;
    },
  },
});

export const { toggleSubmitting } = formStatusSlice.actions;

export default formStatusSlice.reducer;
