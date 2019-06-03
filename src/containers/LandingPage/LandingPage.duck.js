import { convertUnitToSubUnit, unitDivisor } from '../../util/currency';
import config from '../../config';
import { addMarketplaceEntities } from '../../ducks/marketplaceData.duck';

// ================ Action types ================ //
export const SEARCH_LISTINGS_REQUEST = 'app/SearchPage/SEARCH_LISTINGS_REQUEST';
export const SEARCH_LISTINGS_SUCCESS = 'app/SearchPage/SEARCH_LISTINGS_SUCCESS';


// ================ Reducer ================ //

const initialState = {
    pagination: null,
    searchParams: null,
    searchInProgress: false,
    searchListingsError: null,
    currentPageResultIds: [],
    searchMapListingIds: [],
    searchMapListingsError: null,
  };
  
  const resultIds = data => data.data.map(l => l.id);
  
  const listingPageReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
      case SEARCH_LISTINGS_SUCCESS:{
        console.log('searchListingsSuccess')
        return {
          ...state,
          currentPageResultIds: resultIds(payload.data),
          pagination: payload.data.meta,
          searchInProgress: false,
        };
    }
      default:
        return state;
    }
  };
  
  export default listingPageReducer;


// ================ Action creators ================ //
export const searchListingsRequest = searchParams => ({
    type: SEARCH_LISTINGS_REQUEST,
    payload: { searchParams },
});

export const searchListingsSuccess = response => ({
    type: SEARCH_LISTINGS_SUCCESS,
    payload: { data: response.data },
});

export const searchListings = searchParams => (dispatch, getState, sdk) => {
    dispatch(searchListingsRequest(searchParams));
  
    return sdk.listings
      .query()
      .then(response => {
        console.log('response', response)
        dispatch(addMarketplaceEntities(response));
        dispatch(searchListingsSuccess(response));
        return response;
      })
      .catch(e => {
        // dispatch(searchListingsError(storableError(e)));
        throw e;
      });
  };