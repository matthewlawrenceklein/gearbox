export const addGig = (gig) => {
    return {
      type: 'ADD_GIG',
      addGig : {...setGigs, gig }
    }
}

export const setGigs = (gigs) => {
    return {
      type: 'SET_GIGS',
      setGigs : gigs
    }
}