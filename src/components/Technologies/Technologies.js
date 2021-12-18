import React from 'react';
import { DiFirebase, DiReact, DiUnitySmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br></br>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      擅長技術與經歷
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br></br>
            React.js<br></br>
            PixiJS<br></br>
            TypeScirpt
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br></br>
            Node.js <br></br>
            FireBase<br></br>
            MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUnitySmall size="3rem"></DiUnitySmall>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Experience with <br></br>
            Unity
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
