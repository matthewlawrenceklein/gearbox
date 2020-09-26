const initialState = []
  
export default function setCollections(state = initialState, action) {
      switch (action.type) {
        case 'SET_COLLECTIONS':
          return action.setCollections
  
        default:
          return state
      }
}