import React, { useState } from 'react'
import styledComponents from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { themeDark } from './Variables';
import pixelMe from './Assets/pixel-me.png';
import './style.css'
import { Link } from "react-scroll";

function App() {
  const [theme] = useState(themeDark);

  return (
    <ThemeProvider theme={theme} >
      <Wrapper>
          <Header>
            <NavItem><NavLinks activeClass="active" to="home" spy={true} duration={300} smooth={true} delay={0}>Home</NavLinks></NavItem>
            <NavItem><NavLinks activeClass="active" to="about" spy={true} duration={300} smooth={true} delay={0}>About</NavLinks></NavItem>
            <NavItem><NavLinks activeClass="active" to="works" spy={true} duration={300} smooth={true} delay={0}>Works</NavLinks></NavItem>
            <NavItem><NavLinks activeClass="active" to="resume" spy={true} duration={300} smooth={true} delay={0}>Resume</NavLinks></NavItem>
            <NavItem><NavLinks activeClass="active" to="contact" spy={true} duration={300} smooth={true} delay={0}>Contact</NavLinks></NavItem>
          </Header>
          <HomeBlock id='home'>
            <TextBlock>
              <Phrase>Hi, my name is</Phrase>
              <MyName>Oleksandr Portianko</MyName>
              <Phrase>I'm a frontend web developer</Phrase>
            </TextBlock>
            <PixelMe src={pixelMe}></PixelMe>
          </HomeBlock>
          <AboutBlock id='about'>
            <DarkTitle>About</DarkTitle>
          </AboutBlock>
          <WorksBlock id='works'>
            <WhiteTitle>Works</WhiteTitle>
            <Projects>
              <ProjectBlock>OMS</ProjectBlock>
              <ProjectBlock>SKUDrop</ProjectBlock>
              <ProjectBlock>Natus Vincere</ProjectBlock>
              <ProjectBlock>Real</ProjectBlock>
              <ProjectBlock>Barcelona</ProjectBlock>
              <ProjectBlock>OMS</ProjectBlock>
              <ProjectBlock>SKUDrop</ProjectBlock>
              <ProjectBlock>Natus Vincere</ProjectBlock>
              <ProjectBlock>Real</ProjectBlock>
              <ProjectBlock>Barcelona</ProjectBlock>
            </Projects>
          </WorksBlock>
          <ResumeBlock id='resume'>
            <DarkTitle>Resume</DarkTitle>
          </ResumeBlock>
          <ContactBlock id='contact'>
            <WhiteTitle>Contact</WhiteTitle>
          </ContactBlock>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styledComponents.div`
  width: 100%;
  height: 100vh;
  font-size: 1rem;
  color: ${props => props.theme.colorText};
`;

const Header = styledComponents.div`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-bottom: 2px solid ${props => props.theme.focusText};
`;

const HomeBlock = styledComponents.div`
  width: 100%;
  color: ${props => props.theme.colorText};
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 50px;
`

const AboutBlock = styledComponents.div`
  background-color: ${props => props.theme.colorText};
  color: ${props => props.theme.backgroundColor};
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`

const WorksBlock = styledComponents.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.colorText};
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
`

const ResumeBlock = styledComponents.div`
  background-color: ${props => props.theme.colorText};
  color: ${props => props.theme.backgroundColor};
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`

const ContactBlock = styledComponents.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.colorText};
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`

const NavItem = styledComponents.a`
  margin-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${props => props.theme.colorText};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.focusText};
  }
  &.active {
    transition: color 1.5s;
    color: ${props => props.theme.focusText};
  }
`

const Phrase = styledComponents.div`
  font-size: 1rem;
  font-family: 'Raleway';
  font-style: italic;
`

const PixelMe = styledComponents.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${props => props.theme.colorText};
`

const MyName = styledComponents.div`
  font-size: 3rem;
  font-family: 'Raleway';
  font-weight: bold;
`

const TextBlock = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WhiteTitle = styledComponents.div`
  width: 250px;
  height: 55px;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.colorText};
  border-bottom: 7px solid ${props => props.theme.colorText};
  border-radius: 5px;
`

const DarkTitle = styledComponents.div`
  width: 250px;
  height: 55px;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.backgroundColor};
  border-bottom: 7px solid ${props => props.theme.backgroundColor};
  border-radius: 5px;
`

const Projects = styledComponents.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
  flex-wrap: wrap;
`

const ProjectBlock = styledComponents.div`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.theme.colorText};
  color: ${props => props.theme.backgroundColor};
  transition: all 1s ease-in-out;
  margin: 15px 15px;
  &:hover {
    margin-bottom: 25px;
    transition: all 1s ease-in-out;
  }
`

const NavLinks = styledComponents(Link).attrs(() => ({
  activeClass: 'active',
  }))`
  color: ${props => props.theme.colorText};
  transition: all 1s ease-in-out;
  &.active {
    color: ${props => props.theme.focusText};
    transition: all 1s ease-in-out;
    border-bottom: 1px solid ${props => props.theme.focusText};
  }
`;
