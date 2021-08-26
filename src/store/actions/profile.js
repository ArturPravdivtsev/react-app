export const CHANGE_SHOW_NAME = 'PROFILE::CHANGE_SHOW_NAME'
export const CHANGE_IS_AUTHED = 'PROFILE::CHANGE_IS_AUTHED'

export const changeShowName = (showName) => ({
    type: CHANGE_SHOW_NAME,
    payload: {
        showName,
    },
})

export const changeIsAuthed = (isAuthed) => ({
    type: CHANGE_IS_AUTHED,
    payload: {
        isAuthed,
    },
})