// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancer = composeWithDevTools();
// const store = createStore(rootReducer,composedEnhancer);

// // const store = createStore(rootReducer,initValue,enhancer);
// // Các Reducer : là 1 function cập nhật các state
// // initValue : Set các giá trị state ban đầu
// // enhancer : Là chỗ chứa các middleware như saga hoặc thunk

// export default store;

///-----------
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/filterReducer";
import todoListReducer from "../components/TodoList/todoReducer";

const store = configureStore({
	reducer:{
		filters:filterReducer.state,
		todoList:todoListReducer.state
	}
})
export default store; 