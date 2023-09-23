import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
export default createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,700;1,100&display=swap'); */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

body {
  background-color: ${colors.lightDark};
  color: #ffffff;
  text-align: -webkit-center;
}
a {
  text-decoration: none;
}
a,
button {
  cursor: pointer;
}
li {
  list-style: none;
}
`;
// export const Container = styled.section`
//   max-width: 360px;
//   background: #fff;
//   margin: 30px auto;
//   padding: 30px;
//   border-radius: 4px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// `;
