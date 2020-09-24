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