import transport from '../../services/transport'
import { API_URL } from '../../constants'

export const SET_NEWS_LIST = 'NEWS::SET_NEWS_LIST'
export const SET_ERROR_STATUS = 'NEWS::SET_ERROR_STATUS'
export const SET_LOADING_STATUS = 'NEWS::SET_LOADING_STATUS'
export const SET_IDLE_STATUS = 'NEWS::SET_IDLE_STATUS'

export const setErrorStatus = () => ({ type: SET_ERROR_STATUS })

export const setLoadingStatus = () => ({ type: SET_LOADING_STATUS })

export const setIdleStatus = () => ({ type: SET_IDLE_STATUS })

export const setNewsList = (newsList) => ({
    type: SET_NEWS_LIST,
    payload: {
        newsList,
    },
})

export const fetchNews = () => {
    return async (dispatch, getState) => {
        dispatch(setLoadingStatus())
        try {
            const { data } = await transport.get(API_URL)
            dispatch(setIdleStatus())
            dispatch(setNewsList(data))
        } catch (error) {
            console.error('error', error)
            dispatch(setErrorStatus())
        }
    }
}