import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { TypeAnimation } from 'react-type-animation';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <TypeAnimation
          sequence={[
            'Hi, I\'m Yash', // Types 'One'
            4000,
            '',
            500,// Types 'Three' without deleting 'Two'
            () => {
              console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
        // style={{ fontSize: '2em' }}
        />

      </SectionTitle>
      <br />
      <SectionText>
        A Full-Stack Software Developer with experience in Software Development and Data Science.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/yash-randive-3379a5156/'}>Learn More</Button>
      {/* TODO: Change Button Callback Link */}


    </LeftSection>
  </Section>
);

export default Hero;