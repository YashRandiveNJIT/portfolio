import React from 'react';
import { DiFirebase, DiReact, DiZend, DiMongodb, DiAws, DiCode, DiDart, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the Web Development, App Development and Data Science Domain.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React, Flutter, Angular 14, XML(Android), HTML and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="4rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Python, Java, Dart, JS, C, C++, C#, ASP.NET(Framework), Node.js, Kotlin, Redux and Swift
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MYSQL, Oracle SQL, MongoDB, Firestore and Elastic Search
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="4rem" />
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Google Cloud Platform(GCP, includes Firebase) and AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="4rem" />
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Predictive Modeling, Time-Series Forecasting using AR, MA, ARMA and ARIMA models, Scipy, Scikitlearn, OpenCV, Matplotlib, Pandas, R, Tensorflow and Keras
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="4rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma and AdobeXD
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
