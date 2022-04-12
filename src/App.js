import React, { useState } from 'react'
import styledComponents from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { themeDark, myProjects } from './Variables';
import 'bootstrap/dist/css/bootstrap.min.css';
import pixelMe from './Assets/pixel-me.png';
import github from './Assets/github.svg';
import linkedin from './Assets/linkedin.svg';
import instagram from './Assets/instagram.svg';
import './style.css'
import { Link } from "react-scroll";

function App() {
  const [theme] = useState(themeDark);
  const [projects] = useState(myProjects);
  const [activeProject, setActiveProject] = useState(1);
  return (
    <ThemeProvider theme={theme} >
      <Wrapper>
         <Header>
            <NavItem><NavLinks activeClass="active" className='navigation-item ' to="home" spy={true} duration={300} smooth={true} delay={0}>Home</NavLinks></NavItem>
            <NavItem><NavLinks activeClass="active" className='navigation-item' to="about" spy={true} duration={300} smooth={true} delay={0}>About</NavLinks></NavItem>
            <NavItem><NavLinks activeClass="active" className='navigation-item' to="projects" spy={true} duration={300} smooth={true} delay={0}>Projects</NavLinks></NavItem>
            <NavItem><NavLinks activeClass="active" className='navigation-item' to="resume" spy={true} duration={300} smooth={true} delay={0}>Resume</NavLinks></NavItem>
            <NavItem><NavLinks activeClass="active" className='navigation-item' to="contact" spy={true} duration={300} smooth={true} delay={0}>Contact</NavLinks></NavItem>
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
          <WorksBlock id='projects'>
            <WhiteTitle>Projects</WhiteTitle>
            <div className='block-with-my-projects'>
              <Projects>
                {projects.map((project) => (
                  <ProjectBlock key={project.id} className={activeProject === project.id ? 'active-project-name' : ''} onClick={() => setActiveProject(project.id)}>
                    <div>{project.nameProject}</div>
                  </ProjectBlock>
                ))}
              </Projects>
              <ProjectsDescription>
                {projects.map((project) => 
                {
                    if(project.id === activeProject)
                    {
                      return (
                        <ProjectDescription key={project.id}>
                        <div className='text-start'>{project.description}</div>
                        <div className='text-start'>{project.stack}</div>
                      </ProjectDescription>
                    )
                  }
                }
                )}
              </ProjectsDescription>
            </div>
          </WorksBlock>
          <ResumeBlock id='resume'>
            <DarkTitle>Resume</DarkTitle>
          </ResumeBlock>
          <ContactBlock id='contact'>
            <WhiteTitle>Contact</WhiteTitle>
            <UnderTitle>Have you question or proposal to work together</UnderTitle>
            <EmailBlock>
              <NameUser placeholder='Name' type="text"></NameUser>
              <EmailUser placeholder='Email' type="email"></EmailUser>
              <TextMessage placeholder='Your Message' type="text"></TextMessage>
              <SendButton>Send</SendButton>
            </EmailBlock>
            <SocialBlock>
              <SocialLink href="">
                <SocialIcon src={github}></SocialIcon>
              </SocialLink>
              <SocialLink href="">
                <SocialIcon src={instagram}></SocialIcon>
              </SocialLink>
              <SocialLink href="">
                <SocialIcon src={linkedin}></SocialIcon>
              </SocialLink>
            </SocialBlock>
            <NamePrivicy>Oleksandr Portianko ©2022</NamePrivicy>
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
  justify-content: center;
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
  flex-direction: column;
  align-items: center;
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
  text-transform: uppercase;
  color: ${props => props.theme.colorText};
  border-bottom: 3px solid ${props => props.theme.colorText};
  border-radius: 5px;
`

const DarkTitle = styledComponents.div`
  width: 250px;
  height: 55px;
  text-align: center;
  font-size: 2.5rem;
  text-transform: uppercase;
  color: ${props => props.theme.backgroundColor};
  border-bottom: 4px solid ${props => props.theme.backgroundColor};
  border-radius: 5px;
`

const Projects = styledComponents.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 50px;
  flex-wrap: wrap;
`

const ProjectBlock = styledComponents.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  background-color: transparent;
  color: ${props => props.theme.colorText};
  transition: all 1s ease-in-out;
  padding: 5px 5px;
  cursor: pointer;
  border-left: 3px solid ${props => props.theme.colorText};
  &:hover {
    transition: all 1s ease-in-out;
    background-color: ${props => props.theme.colorText};
    color: ${props => props.theme.backgroundColor};
  }
  &.active-project-name {
     border-left: 3px solid ${props => props.theme.focusText};
     background-color: ${props => props.theme.colorText};
     color: ${props => props.theme.backgroundColor};
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

const NamePrivicy = styledComponents.div`
  font-size: 1rem;
  color: ${props => props.theme.focusText};
  margin-top: 30px;
`

const EmailBlock = styledComponents.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 98%;
  margin: 80px 0;
  align-items: end;
`

const NameUser = styledComponents.input`
  width: 100%;
  height: 30px;
  border: 1px solid ${props => props.theme.colorText};
  background-color: transparent;
  margin-top: 10px;
  color: ${props => props.theme.colorText};
  padding-left: 10px;
  transition: all 1s ease-in-out;
  &:focus {
    border: 1px solid ${props => props.theme.focusText};
    border-radius: 0px;
    transition: all 1s ease-in-out;
  }
`

const EmailUser = styledComponents.input`
  width: 100%;
  height: 30px;
  border: 1px solid ${props => props.theme.colorText};
  background-color: transparent;
  margin-top: 10px;
  color: ${props => props.theme.colorText};
  padding-left: 10px;
  transition: all 1s ease-in-out;
  &:focus {
    border: 1px solid ${props => props.theme.focusText};
    border-radius: 0px;
    transition: all 1s ease-in-out;
  }
`

const TextMessage = styledComponents.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid ${props => props.theme.colorText};
  background-color: transparent;
  margin-top: 10px;
  color: ${props => props.theme.colorText};
  transition: all 1s ease-in-out;
  padding-left: 10px;
  resize: none;
  &:focus {
    border: 1px solid ${props => props.theme.focusText};
    border-radius: 0px;
    transition: all 1s ease-in-out;
  }
`

const SendButton = styledComponents.button`
  width: 100px;
  height: 40px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colorText};
  color: ${props => props.theme.colorText};
  font-size: 1rem;
  font-family: 'Raleway';
  margin-top: 5px;
  transition: all 1s ease-in-out;
  &:hover {
    border: 1px solid ${props => props.theme.colorText};
    background-color: ${props => props.theme.colorText};
    color: ${props => props.theme.backgroundColor};
    transition: all 1s ease-in-out;
    border-radius: 0px;
    font-weight: 500;
  }
`

const SocialBlock = styledComponents.div`
  width: 100%;  
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
  background-color: ${props => props.theme.colorText};
  padding: 40px 0;
`

const SocialLink = styledComponents.a`
  width: 40px;
  height: 40px;
  margin: 0 5px;
`

const SocialIcon = styledComponents.img`
  width: 100%;
  height: 100%;
  filter: invert(6%) sepia(10%) saturate(7205%) hue-rotate(197deg) brightness(100%) contrast(104%);
  transition: all 0.7s ease-in-out;
  &:hover {
    transition: all 0.7s ease-in-out;
    filter: invert(16%) sepia(91%) saturate(7080%) hue-rotate(0deg) brightness(96%) contrast(114%);
  }
`

const UnderTitle = styledComponents.div`
  color: ${props => props.theme.colorText};
  font-size: 1rem;
  text-align: center;
  width: 100%;
  margin-top: 30px;
`

const ProjectsDescription = styledComponents.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: 50px;
`

const ProjectDescription = styledComponents.div`
  padding-left: 10px;
`