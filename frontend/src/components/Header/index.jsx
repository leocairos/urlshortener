/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { HeaderContainer, Logo } from './styles';
import Icon from '../../assets/icon.png';

function Header(props) {
  return (
    <HeaderContainer>
      <Logo src={Icon} alt="URL Shortener" />
      <h1>URL Shortener</h1>
      <p>{props.children}</p>
    </HeaderContainer>
  );
}

export default Header;
