const initialState = []
  
export default function setGigs(state = initialState, action) {
      switch (action.type) {
        case 'SET_GIGS':
          return action.setGigs
  
        default:
          return state
      }
}