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
  dragonsName: PropTypes.string,
  imgURL: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  reserved: PropTypes.bool,
  id: PropTypes.string,
};

Dragon.defaultProps = {
  reserved: false,
  id: null,
  dragonsName: null,
  imgURL: null,
  type: null,
  description: null,
};

export default Dragon;
