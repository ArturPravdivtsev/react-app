const initialState = [
    {
        id: 0,
        name: 'Test1'
    },
    {
        id: 1,
        name: 'Test2'
    },
    {
        id: 2,
        name: 'Test3'
    }
]

export default function chatsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}