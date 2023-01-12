import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const MyProfile = () => {
    const myRockets = useSelector((state) => state.rockets);
    const myReserveRockets = myRockets.rocketsData.filter((rocket) => rocket.reserved);