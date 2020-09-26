import { combineReducers } from 'redux'
import addGig from './addGig'
import setGigs from './setGigs'
import newGigFirstData from './newGigFirstData'
import setUser from './setUser'
import addCollection from './addCollection'
import setCollections from './setCollections'

export default combineReducers({
    addGig,
    setGigs,
    newGigFirstData,
    setUser,
    addCollection,
    setCollections
})