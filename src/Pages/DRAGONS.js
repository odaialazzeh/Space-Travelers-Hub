import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragons } from '../redux/dragonReducer';
import Dragon from '../component/dragon';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragonDetails = useSelector((state) => state.dragons);
  useEffect(() => {
    if (!dragonDetails.length) dispatch(getDragons());
  }, [dispatch, dragonDetails]);

  return (
    <>
      {dragonDetails.map((dragon) => (
        <Dragon
          key={dragon.id}
          dragonsName={dragon.name}
          imgURL={dragon.flickr_images}
          description={dragon.description}
          type={dragon.type}
          reserved={!!dragon.reserved}
          id={dragon.id}
        />
      ))}
    </>
  );
};

export default Dragons;
