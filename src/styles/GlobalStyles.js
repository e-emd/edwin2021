import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
 
 body{
     width: 100%;
     background-color: #000;
     color: #fff;
 }

 a {
  text-decoration: none;
  color: #fff;
}
`;

export default GlobalStyles;
