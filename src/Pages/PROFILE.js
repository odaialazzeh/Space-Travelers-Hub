/* eslint-disable no-unreachable */
import React from 'react';
import { useSelector } from 'react-redux';
import MyProfile from '../component/profile';
import MyRocketsProfile from '../component/rockets-profile';
import MissionProfile from '../component/missionProfile';

const Profile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myReserveRockets = myRockets.rocketsData.filter((rocket) => rocket.reserved);
  const dragons = useSelector((state) => state.dragons);
  const dragonsReserved = dragons.filter((dragon) => dragon.reserved);

  return (
    <>

      <div className="Profile-container">
        <div className="rockets-profile">
          <section className="my-rockets-sec">
            <h2> My Rockets </h2>
            <div className="box-border">
              {myReserveRockets.length > 0 ? myReserveRockets.map((rocket) => (
                <MyRocketsProfile
                  key={rocket.id}
                  rocketName={rocket.name}
                  reserved={!!rocket.reserved}
                  id={rocket.id}
                  URL={rocket.wikipedia}
                />
              )) : <p>You have no reserved rockets</p>}
            </div>
          </section>
        </div>

        <div className="dragons-profile">
          <h2>My Dragons</h2>
          <div className="box-border">
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
        <MissionProfile />
      </div>
    </>
  );
};

export default Profile;
