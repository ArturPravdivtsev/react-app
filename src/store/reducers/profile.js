import { CHANGE_SHOW_NAME, CHANGE_IS_AUTHED } from '../actions/profile'

const initialState = {
    name: 'Artur',
    age: 24,
    showName: true,
    isAuthed: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SHOW_NAME: {
            return {
                ...state,
                showName: action.payload.showName,
            }
        }
        case CHANGE_IS_AUTHED: {
            return {
                ...state,
                isAuthed: action.payload.isAuthed,
            }
        }
        default:
            return state
    }
}