import React from 'react';
import Refund from '../../images/Refund.svg';

import { Wrapper,HeaderImg,HeaderContent,HeaderSmallContent,HeaderButton } from './Header.styles';

const Header = () => (
    <Wrapper>
     <HeaderContent>
         <h1>Every Purchase Will Be Made With Pleasure</h1>
          <HeaderSmallContent>just buy whatever you need here,it's all available,thanks.</HeaderSmallContent>
          <HeaderButton>start</HeaderButton>
     </HeaderContent>
     <HeaderImg src={Refund} alt='rmdb-logo' />
    </Wrapper>
  );

  export default Header;