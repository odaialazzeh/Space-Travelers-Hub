import React from 'react';
import { useSelector } from 'react-redux';
import MyProfile from '../component/profile';

const Profile = () => {
  const dragons = useSelector((state) => state.dragons);
  const dragonsReserved = dragons.filter((dragon) => dragon.reserved);
  return (
    <>
      <div className="Profile-container">
        <div className="dragons-profile">
          <h2>My Dragons</h2>
          {dragonsReserved.length > 0 ? dragonsReserved.map((dragon) => (
            <MyProfile
              key={dragon.id}
              dragonsName={dragon.name}
              reserved={!!dragon.reserved}
              id={dragon.id}
              infoURL={dragon.wikipedia}
            />
          )) : <p>You have no reserved dragons</p>}
        </div>
      </div>
    </>
  );
};

export default Profile;
