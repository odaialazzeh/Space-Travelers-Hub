import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const MyProfile = () => {
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