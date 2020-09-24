const initialState = {}
  
export default function addGig(state = initialState, action) {
      switch (action.type) {
        case 'ADD_GIG':
          return action.addGig
  
        default:
          return state
      }
}