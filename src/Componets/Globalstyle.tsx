import { createGlobalStyle } from 'styled-components';


const Globalstyle = () => {
  return (
    <GlobalStyles/>
  )
}

export default Globalstyle


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    margin-top: 50px;
    display: grid;
    place-items: center;
    background: #000000;
}
`;