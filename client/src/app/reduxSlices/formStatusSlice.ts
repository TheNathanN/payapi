import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormStatusState {
  submitting: boolean;
  status: undefined | boolean;
}

const initialState: FormStatusState = {
  submitting: false,
  status: undefined,
};

export const formStatusSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    toggleSubmitting: (state, action: PayloadAction<boolean>) => {
      state.submitting = action.payload;
    },
    setFormStatus: (state, action: PayloadAction<undefined | boolean>) => {
      state.status = action.payload;
    },
  },
});

export const { toggleSubmitting, setFormStatus } = formStatusSlice.actions;

export default formStatusSlice.reducer;
