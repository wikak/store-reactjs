import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import logo from '../logo.svg'
import styled from 'styled-components'
export default class Navbar extends Component {
    render = () => {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-sm-5">
            <Link to='/'>
              {/*https://image.flaticon.com/icons/svg/126/126122.svg*/}
              <img src={logo} alt="my store"  className="navbar-brand"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to='/' className="nav-link">Products</Link>
                </li>
              </ul>
              <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                  <span className="mr-2">
                    <FontAwesomeIcon icon={faCartPlus} /> my cart
                  </span>
                </ButtonContainer>
              </Link>
            </div>
          </nav>
        )
    }
}
const ButtonContainer = styled.button`
text-transform: capitalize;
font-size:1.4rem;
background-color:transparent;
border-radius: 25px;
padding: 0.2rem 0.5rem;
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover {
  background:var(--lightBlue);
  color:var(--mainBlue)
}
&:focus {
  outline: none
}
`;
