import React from 'react';
import Com from '../../images/Com.svg';

import { Wrapper,AboutSection,AboutImage } from './About.styles';

const About = () => (
      <Wrapper>
          <AboutSection>
              <h3>Want To Know More About Us?</h3>
              <h4>contact us:</h4>
              <p>WhatsApp: +2347068282923</p>
              <p>Facebook: Balogun Hakeem</p>
              <p>LinkedIn: Balogun Precious</p>
          </AboutSection>
          <AboutImage src={Com} alt="juls"/>
      </Wrapper>
);

export default About;