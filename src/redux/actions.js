const addTodo = "AddTodo"
const searchFilter = "SearchFilter"

const addTodoAction = {
	type: addTodo,
	payload : null
}	

// Action Creator
export const addTodoCreator = (data) => {
	return {
		type: addTodo,
		payload: data
	}
}

export const searchFilterChange = (data) => {
	return {
		type: searchFilter,
		payload: data
	}
}