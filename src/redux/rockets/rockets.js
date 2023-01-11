import FetchRocketsData from '../API/rocketAPI';

const GET_ROCKETS_REQUEST = 'space-travellers/rockets/GET_REQUEST';
const GET_ROCKETS_SUCCESS = 'space-travellers/rockets/GET_SUCESS';
const GET_ROCKETS_FAIL = 'space-travellers/rockets/GET_FAIL';
const RESERVE_ROCKET = 'space-travellers/rockets/RESERVE_ROCKET';

const initialState = {
  rocketsData: [],
  error: '',
  load: false,
};

const getRocketRequest = () => ({
  type: GET_ROCKETS_REQUEST,
});

const getRocketSuccess = (rocketsData) => ({
  type: GET_ROCKETS_SUCCESS,
  payload: rocketsData,
});

const getRocketFail = (error) => ({
  type: GET_ROCKETS_FAIL,
  payload: error,
});

export function getRockets() {
  return (dispatch) => {
    dispatch(getRocketRequest());
    FetchRocketsData()
      .then((data) => {
        const rocketinfo = data.map((uniData) => ({
          id: uniData.rocket_id,
          name: uniData.rocket_name,
          desc: uniData.description,
          image: uniData.flickr_images[0],
          reserved: false,
        }));
        dispatch(getRocketSuccess(rocketinfo));
      })
      .catch((error) => {
        dispatch(getRocketFail(error.message));
      });
  };
}
