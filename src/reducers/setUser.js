const initialState = {}
  
export default function setUser(state = initialState, action) {
      switch (action.type) {
        case 'SET_USER':
          return action.setUser
  
        default:
          return state
      }
}