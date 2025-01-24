import { type FormFieldsProps } from "./../../pages/create-referral-page/create-referral-page.schema";
const initialState: FormFieldsProps[] = [];

import { createSlice } from "@reduxjs/toolkit";

const referralList = createSlice({
  name: "referral_list",
  initialState: initialState,
  reducers: {
    updateData: (state: FormFieldsProps[], action) => {
      return action.payload;
    },
    resetData: () => {
      return initialState;
    },
  },
});

export const { updateData, resetData } = referralList.actions;

export default referralList.reducer;
