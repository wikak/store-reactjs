import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Buttons'
export default class Navbar extends Component {
    render = () => {
        return (
          <NavWrapper className="navbar navbar-expand-lg navbar-dark bg-dark px-sm-5">
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
          </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
  .nav-link {
    text-transform: capitalize;
  }
`
