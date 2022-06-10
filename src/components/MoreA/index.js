import React from 'react';
import PropTypes from 'prop-types';
import Com from '../../images/Com.svg';

import { Wrapper,HeaderImg,HeaderContent,HeaderSmallContent,HeaderButton } from './MoreA.styles';

const MoreA = () => (
    <Wrapper>
     <HeaderContent>
         <h1>Want Items At Discount Price?</h1>
          <HeaderSmallContent>just keep on being a regular customer</HeaderSmallContent>
          <HeaderButton>start</HeaderButton>
     </HeaderContent>
     <HeaderImg src={Com} alt='rmdb-logo' />
    </Wrapper>
  );
  
  export default MoreA;
  