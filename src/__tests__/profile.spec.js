import profile, { initialState } from '../store/reducers/profile'
import { CHANGE_SHOW_NAME, CHANGE_IS_AUTHED } from '../store/actions/profile'

describe('profile reducer', () => { //  describe - группировка для наших тестов новостного редьюсера
  const initialState = {
    name: 'Artur',
    age: 24,
    showName: true,
    isAuthed: false,
  }

  it('CHANGE_IS_AUTHED', () => {
    const action = {
      type: CHANGE_IS_AUTHED,
      payload: {
        isAuthed: true
      }
    }

    expect(profile(initialState, action)).toEqual({
      ...initialState,
      isAuthed: true,
    })
  })

  it('CHANGE_SHOW_NAME', () => {
    const action = {
      type: CHANGE_SHOW_NAME,
      payload: {
        showName: false
      }
    }

    expect(profile(initialState, action)).toEqual({
      ...initialState,
      showName: false,
    })
  })
})