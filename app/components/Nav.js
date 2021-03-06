var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
        <NavLink activeClassName='active' to='/Battle'>
          Battle
        </NavLink>
        <NavLink activeClassName='active' to='/Popular'>
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
