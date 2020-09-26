const initialState = []
  
export default function addCollection(state = initialState, action) {
      switch (action.type) {
        case 'ADD_COLELCTION':
          return action.addCollection
  
        default:
          return state
      }
}