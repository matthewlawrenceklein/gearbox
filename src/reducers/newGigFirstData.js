const initialState = {}
  
export default function newGigFirstData(state = initialState, action) {
      switch (action.type) {
        case 'NEW_GIG_FIRST_DATA':
          return action.newGigFirstData
        default:
          return state
      }
}