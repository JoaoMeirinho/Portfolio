import styled from 'styled-components';
import * as colors from '../../config/colors';
import { Title, Text } from '../../styles/Globals';

export const Box = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px;
  width: 75vw;
  background: transparent;
  border: 2px solid ${colors.yellow};
  border-radius: 5px;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
`;

export const Card = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
  width: 35vw;
  min-width: 100px;
  background: transparent;
  border: 2px solid ${colors.lightWhite};
  border-radius: 5px;
  &:hover {
    /* background: ${colors.yellow}; */
    border: 2px solid ${colors.yellow};
    box-shadow: 0px 0px 27px 0px rgba(255, 211, 0, 1);
    transition: all 0.3s;
  }
  /* @media (max-width: 1100px) {
    flex-direction: column-reverse;
  } */
`;

export const ContentImage = styled.div`
  width: 45%;
  /* margin: 20px; */
  border-radius: 5px;
  margin: 15px;
  @media (max-width: 1100px) {
    width: 75%;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const TextTitle = styled(Title)`
  font-size: clamp(20px, 7vw, 30px);
`;

export const TextParagraph = styled(Text)`
  font-size: clamp(15px, 2.5vw, 20px);
`;
