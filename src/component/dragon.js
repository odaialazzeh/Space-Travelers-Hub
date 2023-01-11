import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserve } from '../redux/dragonReducer';

const Dragon = ({
  dragonsName, imgURL, description, type, reserved, id,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="dragon-container">
      <img src={imgURL} alt={dragonsName} />
      <div className="dragon">
        <h2>{dragonsName}</h2>
        {reserved ? (
          <p>
            <span> Reserved </span>
            {description}
          </p>
        ) : (
          <p>
            {description}
          </p>
        )}
        <h4>
          Type:
          <span>{type}</span>
        </h4>
        <button
          type="button"
          className={`${reserved ? 'cancel' : 'reserve'}`}
          onClick={() => dispatch(reserve({ id }))}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
        </button>
      </div>
    </div>

  );
};
Dragon.propTypes = {
  dragonsName: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Dragon;
