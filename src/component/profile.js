import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserve } from '../redux/dragonReducer';

const MyProfile = ({
  id, dragonsName, reserved, infoURL,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="my-dragons">
      <ul>
        <li>
          {dragonsName}

          <button
            type="button"
            className={`${reserved ? 'cancel' : 'reserve'}`}
            onClick={() => dispatch(reserve({ id }))}
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
          </button>
          <a href={infoURL}>Read more</a>
        </li>
      </ul>
    </div>

  );
};

MyProfile.propTypes = {
  dragonsName: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  infoURL: PropTypes.string.isRequired,
};

export default MyProfile;
