'use client';

import Cookies from 'js-cookie';
import React, { useCallback, useEffect } from 'react';

import myServerAction from '../actions/myServerAction';

const Client = () => {
    useEffect(() => {
        Cookies.set('myCookieName', 'some-value')
    }, []);

    const handleClick = useCallback(() => {
        myServerAction().then((res) => {
            console.log(res);
        });
    }, []);

  return (
    <div>
      <h1>Client</h1>
      <button style={{
        backgroundColor: 'gray',
        color: 'white',
        padding: '10px'
        }} onClick={handleClick} type="button">call my server action</button>
    </div>
  );
};

export default Client;