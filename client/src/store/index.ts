// import { createStore, applyMiddleware } from "redux";
// import { createSlice, configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";

// export const configureStore = () => {
//   // const store = createStore(rootReducer, initialState, enhancers);
//   const store = createStore(rootReducer, applyMiddleware(...middlewares));
//   return store;
// };

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/";

export default configureStore({
  reducer: reducer,
});
