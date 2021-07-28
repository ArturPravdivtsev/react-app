export const CHANGE_SHOW_NAME = 'PROFILE::CHANGE_SHOW_NAME'

export const changeShowName = (showName) => ({
    type: CHANGE_SHOW_NAME,
    payload: {
        showName,
    },
})