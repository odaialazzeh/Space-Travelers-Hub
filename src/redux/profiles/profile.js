const PROFILE_FETCH_SUCCESS = 'FETCH_SUCCESS';
const PROFILE_FETCH_FAILURE = 'PROFILE_FETCH_FAILURE';

const initState = {
  profile: {},
  loading: false,
  error: '',
};

export function getProfile() {
  return {
    type: PROFILE_FETCH_SUCCESS,
    payload: {},
  };
}

export default function reducer(state = initState, action) {
  switch (action.payload) {
    case PROFILE_FETCH_SUCCESS:
      return {
        profile: action.payload,
      };
    case PROFILE_FETCH_FAILURE:
      return {
        error: 'Unable to fetch',
      };
    default:
      return {
        profile: state,
      };
  }
}
