import React from 'react';

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar{' '}
          <span className="badge rounded-pill bg-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
