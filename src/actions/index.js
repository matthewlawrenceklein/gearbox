export const addGig = (gig) => {
    return {
      type: 'ADD_GIG',
      addGig : {...setGigs, gig }
    }
}

export const newGigFirstData = (data) => {
  return {
    type: 'NEW_GIG_FIRST_DATA',
    newGigFirstData : data
  }
}


export const setGigs = (gigs) => {
    return {
      type: 'SET_GIGS',
      setGigs : gigs
    }
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    setUser : user
  }
}

export const addCollection = (collection) => {
  return {
    type: 'ADD_COLLECTION',
    addCollection : [...addCollection, collection]
  }
}

export const setCollections = (collections) => {
  return {
    type: 'SET_COLLECTIONS',
    setCollections : collections
  }
}