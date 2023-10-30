import React from 'react';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div>
      <h2>Conteúdo do Corpo</h2>
      <Outlet />
    </div>
  );
};

export default Body;
