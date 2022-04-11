import React, { useState } from 'react'
import styledComponents from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { themeDark } from './Variables';
import pixelMe from './Assets/pixel-me.png';
import './style.css'

function App() {
  const [theme] = useState(themeDark);
  const [activeNav, setActiveNav] = useState('home');

  return (
    <ThemeProvider theme={theme} >
      <Wrapper>
          <Header>
            <NavItem onClick={() => setActiveNav('home')} href='#home' className={activeNav === 'home' ? 'active-nav' : '' }>Home</NavItem>
            <NavItem onClick={() => setActiveNav('about')} href='#about' className={activeNav === 'about' ? 'active-nav' : '' }>About</NavItem>
            <NavItem onClick={() => setActiveNav('works')} href='#works' className={activeNav === 'works' ? 'active-nav' : '' }>Works</NavItem>
            <NavItem onClick={() => setActiveNav('resume')} href='#resume' className={activeNav === 'resume' ? 'active-nav' : '' }>Resume</NavItem>
            <NavItem onClick={() => setActiveNav('contact')} href='#contact' className={activeNav === 'contact' ? 'active-nav' : '' }>Contact</NavItem>
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
          </WorksBlock>
          <ResumeBlock id='resume'>
            <WhiteTitle>Resume</WhiteTitle>
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
  height: 500px;
  color: ${props => props.theme.colorText};
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 60px;
`

const AboutBlock = styledComponents.div`
  background-color: ${props => props.theme.colorText};
  color: ${props => props.theme.backgroundColor};
  text-align: center;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`

const WorksBlock = styledComponents.div`
  background-color: ${props => props.theme.backgroundColor};
  text-align: center;
  width: 100%;
  height: 1200px;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`

const ResumeBlock = styledComponents.div`
  background-color: ${props => props.theme.backgroundColor};
  text-align: center;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`

const ContactBlock = styledComponents.div`
  background-color: ${props => props.theme.backgroundColor};
  text-align: center;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`

const NavItem = styledComponents.a`
  margin-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${props => props.theme.colorText};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${props => props.theme.focusText};
  }
  &.active-nav {
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
