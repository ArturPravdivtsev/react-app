import { CHANGE_SHOW_NAME } from '../actions/profile'

const initialState = {
    name: 'Artur',
    age: 24,
    showName: true
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SHOW_NAME: {
            return {
                ...state,
                showName: action.payload.showName,
            }
        }
        default:
            return state
    }
}