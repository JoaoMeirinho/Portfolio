import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

export default createGlobalStyle`
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

export const Title = styled.h1`
  text-align: center;
  font-size: clamp(40px, 8vw, 60px);
`;

export const Text = styled.p`
  margin-top: 30px;
  text-align: center;
  font-size: clamp(15px, 3vw, 25px);
  font-weight: 200;
`;

export const Space = styled.section`
  position: absolute;
  right: 0;
  left: 0;
  z-index: -1;
  height: ${({ heigth }) => heigth || '50vh'};
  min-height: 300px;
  max-height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Destac = styled.span`
  background: ${colors.yellow};
  padding: 5px;
  border-radius: 5px;
`;
// export const Container = styled.section`
//   max-width: 360px;
//   background: #fff;
//   margin: 30px auto;
//   padding: 30px;
//   border-radius: 4px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// `;
