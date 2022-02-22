import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return <div className='err'>

<div>
<h1>404 ERROR</h1>

</div>
<h2>we are are sorry</h2>
<NavLink to="/">Back To Homepage</NavLink>
  </div>;
};

export default ErrorPage;
