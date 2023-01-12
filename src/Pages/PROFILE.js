/* eslint-disable no-unreachable */
import React from 'react';
import { useSelector } from 'react-redux';
import MyProfile from '../component/profile';
import '../component/my-profile/profile.css';

const Profile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myReserveRockets = myRockets.rocketsData.filter((rocket) => rocket.reserved);

  const handleReservations = () => {
    if (myReserveRockets.length) {
      return myReserveRockets.map((rocket) => (
        <p key={rocket.id} className="my-rocket">
          {rocket.name}
        </p>
      ));
    }
    return <h2>No Reserved Rockets</h2>;
  };
  return (
    <div className="profile">
      <section className="my-rockets-sec">
        <h3 className="my-heading"> My Rockets </h3>
        <div className="my-rockets">{handleReservations()}</div>
      </section>
    </div>
  );
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
