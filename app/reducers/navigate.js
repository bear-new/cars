import { NAVIGATE } from '../constants/ActionTypes'

const initialState = {
	type: 'home'
}

export default function navigates(state = initialState, action) {
	switch (action.type) {
		case NAVIGATE:
			return {
	          	type: action.status
	        }
		default:
  		return state;
	}
}

