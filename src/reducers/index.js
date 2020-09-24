import { combineReducers } from 'redux'
import addGig from './addGig'
import setGigs from './setGigs'

export default combineReducers({
    addGig,
    setGigs
})