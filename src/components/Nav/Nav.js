import React from 'react';

const Nav = ({ changeRoute, currentRoute }) => {
  if (currentRoute === 'Register') {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => changeRoute('SignIn')}
          className='f3 link dim black underline pa3 pointer'
        >
          Sign In
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => changeRoute('SignIn')}
          className='f3 link dim black underline pa3 pointer'
        >
          Sign Out
        </p>
      </nav>
    );
  }
};

export default Nav;
