import React from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missions)
    .filter((mission) => mission.reserved);

  return (
    <div className="missions-profile">
      <h2>My Missions</h2>
      <div className="my-missions">
        { missions.length === 0 && <p>You have no reserved missions</p>}
        {missions.map((mission) => (
         <p key={mission.mission_id} className="reserve-item">{mission.mission_name}</p>
        ))}
      </div>
    </div>
  );
};

export default MissionProfile;
