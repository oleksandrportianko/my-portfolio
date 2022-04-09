import React, { useEffect } from 'react'
import styledComponents from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { themeWhite, themeDark } from './ColorsVariables';
import './style.css'
import darkTheme from './Images/dark-theme.svg';
import whiteTheme from './Images/white-theme.svg';

function App() {
  const [theme, setTheme] = React.useState(themeWhite);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'themeWhite') {
      setTheme(themeWhite);
    } else {
      setTheme(themeDark);
    }
  }, [])

  const changeThemeColor = () => {
    localStorage.setItem('theme', theme.backgroundColor === themeWhite.backgroundColor  ? 'themeDark' : 'themeWhite');
    const currentTheme =  localStorage.getItem('theme');
    if (currentTheme === 'themeWhite') {
      setTheme(themeWhite);
    }
    else { 
      setTheme(themeDark);
    }
  }

  return (
    <ThemeProvider theme={theme} >
      <Wrapper>
          <Header>
            <HeaderText>Portfolio</HeaderText>
            <ChangeColor onClick={() => changeThemeColor()}>
              {
                localStorage.getItem('theme') === 'themeDark' ? 
                <ImgThemeDark src={darkTheme} /> : 
                <ImgThemeWhite src={whiteTheme} /> 
              }
            </ChangeColor>
          </Header>
          <FirstBlock>
            <FirstBlockText>
              Hey my name is Oleksandr, I am a frontend developer.
            </FirstBlockText>
          </FirstBlock>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styledComponents.div`
  width: 100%;
  height: 100vh;
  font-size: 1rem;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.colorText};
`;

const Header = styledComponents.div`
  width: 100vw;
  height: 50px;
  font-size: 1rem;
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styledComponents.div`
  font-size: 1.3rem;
  color: ${props => props.theme.colorText};
  font-weight: bold;
  margin-left: 10px;
`

const ChangeColor = styledComponents.button`
  color: ${props => props.theme.colorText};
  margin-right: 10px;
  border: none;
  background-color: transparent;
  font-size: 1.125rem;
  display: flex;
  &:hover {
    color: ${props => props.theme.focusTextButton};
  }
`

const FirstBlock = styledComponents.div`
  width: 100vw;
  height: 200px;
  background-color: ${props => props.theme.colorText};
  color: ${props => props.theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`

const FirstBlockText = styledComponents.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`

const ImgThemeDark = styledComponents.img`
  height: 30px;
  width: 30px;
  filter: invert(99%) sepia(39%) saturate(4619%) hue-rotate(168deg) brightness(122%) contrast(104%);
`

const ImgThemeWhite = styledComponents.img`
  height: 30px;
  width: 30px;
  filter: invert(6%) sepia(19%) saturate(5693%) hue-rotate(208deg) brightness(90%) contrast(104%);;
`