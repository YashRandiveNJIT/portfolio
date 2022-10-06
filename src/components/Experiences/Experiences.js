import React from 'react';
import { DiJira } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Hr } from './ExperiencesStyles';


const Experiences = () => (
    <Section id="exp">

        <SectionTitle>Professional Experiences</SectionTitle>
        <SectionText>
            I have Interened in several start-ups and MNCs at various Software Development positions
        </SectionText>
        <List>
            <ListItem>
                <DiJira size="4rem" />
                <ListContainer>
                    <ListTitle>GEP Global</ListTitle>
                    <ListParagraph>
                        July 2022 - Current <br />
                        Software Developer<br />
                        <Hr />
                        <br />
                        .NET Core 6, Angular 14, Microservices, AI/ML, Camunda BPM, MongoDB, Elastic Search
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiJira size="4rem" />
                <ListContainer>
                    <ListTitle>MeetMeFit</ListTitle>
                    <ListParagraph>
                        January 2020 - Current <br />
                        Founder and Software Developer<br />
                        <Hr />
                        <br />
                        Flutter, Dart, Firebase, GCP, Node.js, MERN
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiJira size="4rem" />
                <ListContainer>
                    <ListTitle>CodeReal Education</ListTitle>
                    <ListParagraph>
                        January 2020 - December 2021 <br />
                        Founder, Developer and Educator<br />
                        <Hr />
                        <br />
                        MERN, Python
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiJira size="4rem" />
                <ListContainer>
                    <ListTitle>Personalytics</ListTitle>
                    <ListParagraph>
                        June 2020 - November 2020 <br />
                        Intern Data Scientist<br />
                        <Hr />
                        <br />
                        Python, AI/ML
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiJira size="4rem" />
                <ListContainer>
                    <ListTitle>KServe BPO Pvt. Ltd.</ListTitle>
                    <ListParagraph>
                        July 2019<br />
                        Software Development Intern<br />
                        <Hr />
                        <br />
                        .NET Core 3.1
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
        <SectionDivider />
    </Section>
);

export default Experiences;
