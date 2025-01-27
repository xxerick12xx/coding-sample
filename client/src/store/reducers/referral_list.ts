import { type FormFieldsProps } from "./../../pages/create-referral-page/create-referral-page.schema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type dataProps = FormFieldsProps & { id: number };
type initialStateProps = {
  data: dataProps[];
};

const initialState: initialStateProps = {
  data: [],
};

const referralList = createSlice({
  name: "referral_list",
  initialState: initialState,
  reducers: {
    updateData: (
      state: initialStateProps,
      action: PayloadAction<dataProps[]>
    ) => {
      state.data = action.payload;
    },
    resetData: (state: initialStateProps) => {
      state.data = initialState.data;
    },
  },
});

export const { updateData, resetData } = referralList.actions;

export default referralList.reducer;
