import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider></SectionDivider>
      <SectionTitle main>Projects</SectionTitle>
      <SectionText>一些有趣的專案分享</SectionText>
      <GridContainer>
        {projects.map(({id,image,title,description,tags,source,visit})=>(
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr></Hr>
              <CardInfo>{description}</CardInfo>
              <br></br>
              <div>
                <TitleContent>技術</TitleContent>
                <TagList>
                  {tags.map((tag,i)=>(
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit} target={'_blank'}>Code</ExternalLinks>
                <ExternalLinks href={source} target={'_blank'}>Demo</ExternalLinks>
              </UtilityList>
            </TitleContent>
          </BlogCard>
        ))}
      </GridContainer>
  </Section>
);

export default Projects;