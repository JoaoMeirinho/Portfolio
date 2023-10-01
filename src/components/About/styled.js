import styled from 'styled-components';
import * as colors from '../../config/colors';
import { Title, Text } from '../../styles/Globals';

export const Box = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
  width: 75vw;
  background: ${colors.lightWhite};
  border-radius: 5px;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
`;

export const ContentImage = styled.div`
  width: 35%;
  /* margin: 20px; */
  border-radius: 5px;
  margin: 10px;
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
