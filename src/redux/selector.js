// import {createSelector} from 'reselect'
import {createSelector} from '@reduxjs/toolkit'

// export const todoListSelector = (state) => 
// {
// 	const searchText = searchTextSelector(state);
// 	const result = state.todoList.filter(x=>{
// 		return x.name.includes(searchText)
// 	})
// 	return result;
// }

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters;

export const todosRemainingSelector = createSelector(todoListSelector,searchTextSelector,
	(todoList,searchText) => {
    console.log("🚀 ~ file: selector.js ~ line 18 ~ searchText", searchText)
    console.log("🚀 ~ file: selector.js ~ line 17 ~ todoList", todoList)
		const resultFilter = todoList?.filter(x=> {
			return x.name.includes(searchText)
		})
		return resultFilter;
	}
)