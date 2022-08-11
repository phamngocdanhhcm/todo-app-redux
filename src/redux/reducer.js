import filterReducer from "../components/Filters/filterReducer";
import todoListReducer from "../components/TodoList/todoReducer";
import { combineReducers } from "redux";
// const initState = {
// 	filters:{
// 		search:'',
// 		status:'all',
// 		priority:[]
// 	},
// 	todoList:[
// 		{id:1,name:"Ngoc Danh",complated:false, priority:"Medium"},
// 		{id:2,name:"Ngoc Ty",complated:false, priority:"Low"},
// 		{id:3,name:"Ngoc Đức",complated:false, priority:"High"},


// 	]
// }
// const rootReducer = (state = initState , action) => {
// 	/* Action là 1 object 
// 		{
// 			type: '',
// 			payload : cập nhật state
// 		}
// 	*/
// 	switch(action.type){
// 		case 'AddTodo':
// 			return {
// 				...state,
// 				todoList:[
// 					...state.todoList,
// 					action.payload
// 				]
// 			}
// 		case 'SearchFilter':
// 			return {
// 				...state,
// 				filters:{
// 					...state.filters,
// 					search: action.payload
// 				}
// 			}
// 		default:
// 			return state
// 	}
// }
//---------------------------------
// const rootReducer = (state = {},action) => {
// 	return {
// 		filters: filterReducer(state?.filters,action),
// 		todoList: todoListReducer(state?.todoList,action)
// 	}
// }
const rootReducer = combineReducers({
	filters:filterReducer,
	todoList:todoListReducer
})

export default rootReducer;