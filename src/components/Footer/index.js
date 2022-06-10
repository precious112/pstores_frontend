import React from 'react';
import { Icon } from '../Item/Item.styles';

import {Footers,Wrapper,Row,Col, Li,H,U,Icons } from './Footer.styles';

const Footer = () => (
    <Footers>
     <Wrapper>
         <Row>
             <Col>
             <H>Our Company</H>
             <U>
                 <Li>about us</Li>
                 <Li>our services</Li>
                 <Li>affliate program</Li>
             </U>
             </Col>
             <Col>
             <H>Get Help</H>
             <U>
                 <Li>FAQ</Li>
                 <Li>shipping</Li>
                 <Li>returns</Li>
             </U></Col>
             <Col>
             <H>Follow us</H>
             <Icons>
             <i class="fab fa-facebook-f"></i>
             </Icons>
             <Icons>
             <i class="fab fa-twitter"></i>
             </Icons>
             <Icons>
             <i class="fab fa-instagram"></i>
             </Icons>
             </Col>
         </Row>
     </Wrapper>
    </Footers>
  );

  export default Footer;