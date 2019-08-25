import { combineReducers } from 'redux';
import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from '../actions/actions'

const { SHOW_ALL } = VisibilityFilters;

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
}

/*
* The reducer take oldState and an action and create
* a new state /!\ NO MUTATE BUT CREATE NEW OBJECT /!\
* Just remember to never assign to anything inside
* the state unless you clone it first
*/

function todos( state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		default:
			return state;
	}
}

/*
* we split todoApp and todos and we just give a slice of the state for
* todos (add_todos). It's called Reducer Composition
*/


// function todoApp(state = initialState, action) {
//
// 	switch(action.type) {
// 		case SET_VISIBILITY_FILTER:
// 			return Object.assign({}, state, {
// 				visibilityFilter: action.filter
// 			})
// 		case ADD_TODO:
// 			return Object.assign({}, state, {
// 				todos: todos(state.todos, action)
// 			})
// 		default:
// 			return state
// 	}
// 	return state;
// }

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
})


export default todoApp;
