// const initState = 
// 	[
		// {id:1,name:"Ngoc Danh",complated:false, prioriry:"Medium"},
		// {id:2,name:"Ngoc Ty",complated:false, prioriry:"Low"},
		// {id:3,name:"Ngoc Đức",complated:false, prioriry:"High"},
// 	]

// const todoListReducer = (state = initState , action) => {
// 	/* Action là 1 object 
// 		{
// 			type: '',
// 			payload : cập nhật state
// 		}
// 	*/
// 	switch(action.type){
// 		case 'AddTodo':
// 			return [
// 				// ...state,
// 				// todoList:[
// 					// ...state.todoList,
// 					...state,
// 					action.payload
// 				// ]
// 			]
// 		default:
// 			return state
// 	}
// }
// export default todoListReducer;
//-----
import { createSlice } from "@reduxjs/toolkit";
const initState = 
	[
		{id:1,name:"Ngoc Danh",complated:false, prioriry:"Medium"},
		{id:2,name:"Ngoc Ty",complated:false, prioriry:"Low"},
		{id:3,name:"Ngoc Đức",complated:false, prioriry:"High"},
	]

export default createSlice({
	name:"todoList",
	initialState:initState,
	reducers: {
		AddTodo:(state,action) => {
			state.push(action.payload)
		}
	}
})