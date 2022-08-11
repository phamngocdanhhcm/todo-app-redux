// const initState = {
// 	search : '',
// 	status : 'All',
// 	priority:[]
// }

// const filterReducer = (state = initState,action) => {
// 	switch(action.type){
// 		case 'SearchFilter':
// 			return {
// 				// ...state,
// 				// filters:{
// 					// ...state.filters,
// 					...state,
// 					search: action.payload
// 				// }
// 			}
// 		default:
// 			return state
// 	}
// }	
// export default filterReducer;
//-------------------
import {createSlice} from "@reduxjs/toolkit"

const initState = {
	search : '',
	status : 'All',
	priority:[]
}
export default createSlice({
	name:"filters",
	initialState:initState,
	reducers:{
		SearchFilter:(state,action)=>{
			// Có thể sử dụng mutation => Do có library là 	IMMER trong redux toolkit
			state.search = action.payload 
		} // => {action.type : 'filters/searchFilterChange'}
	}
})

