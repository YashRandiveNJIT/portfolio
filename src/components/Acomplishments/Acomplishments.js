import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Projects' },
  { number: 5, text: 'Tech. Experiences', },
  { number: 20, text: 'Technologies', },
  { number: 15, text: 'Courses and Certifications', }
];

const Acomplishments = () => (
  <Section id="accomplishments">
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxNum>{card.text}</BoxNum>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
