import React from 'react';
import PropTypes from 'prop-types';

const Dragon = ({
  dragonsName, imgURL, description, type,
}) => (
  <div className="dragon-container">
    <img src={imgURL} alt={dragonsName} />
    <div className="dragon">
      <h2>{dragonsName}</h2>
      <div>
        <p>{description}</p>
        <h4>
          Type:
          <span>{type}</span>
        </h4>
      </div>
    </div>
  </div>

);
Dragon.propTypes = {
  dragonsName: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Dragon;
