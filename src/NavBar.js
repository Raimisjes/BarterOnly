import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="navbar">
      {
        !localStorage.getItem("token") ?
          <React.Fragment>
            <NavLink
              to="/register"
              exact
              style={{
                color: "blue",
                padding: "20px"
              }}
              activeStyle={{
                color: "red"
              }}
            >
              Register
            </NavLink>

            <NavLink
              to="/login"
              exact
              style={{
                color: "blue",
                padding: "20px"
              }}
              activeStyle={{
                color: "red"
              }}
            >
              Login
            </NavLink>
          </React.Fragment>
          :
          <button onClick={props.handleClick}>Log out</button>
      }

      <NavLink
        to="/product-listings"
        exact
        style={{
          color: "blue",
          padding: "20px"
        }}
        activeStyle={{
          color: "red"
        }}
      >
        Product Listings
      </NavLink>

      <NavLink
        to="/new-product-listing"
        exact
        style={{
          color: "blue",
          padding: "20px"
        }}
        activeStyle={{
          color: "red"
        }}
      >
        Create a Product Listing
      </NavLink>

      <NavLink
        to="/my-product-listings"
        exact
        style={{
          color: "blue",
          padding: "20px"
        }}
        activeStyle={{
          color: "red"
        }}
      >
        My Listings
      </NavLink>

      <NavLink
        to="/matching-listings"
        exact
        style={{
          color: "blue",
          padding: "20px"
        }}
        activeStyle={{
          color: "red"
        }}
      >
        Matching Listings
      </NavLink>
    </div>
  );
};

export default NavBar;
