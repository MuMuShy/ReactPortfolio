import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        學習的過程就是不斷的Try Error，堅持到底就會有所成長。
      </SectionText>
      { <Button onClick={()=>window.open('https://mumu.tw/', '_blank')}>Mumu程式外包</Button> }
    </LeftSection>
  </Section>
);

export default Hero;