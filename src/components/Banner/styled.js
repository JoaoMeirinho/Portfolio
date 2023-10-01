import styled from 'styled-components';
import * as colors from '../../config/colors';

export const TextBanner = styled.div`
  /* width: 45%; */
  margin: 0 1%;
  max-height: 100%;
  padding: 20px;
  justify-content: start;
  align-items: center;
  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const ButtonCurriculum = styled.a`
  display: inline-block;
  /* margin-top: 30px; */
  font-size: clamp(15px, 1.5vw, 25px);
  background: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  font-weight: 400;

  &:hover {
    background: ${colors.yellow};
    border: none;
    box-shadow: 0px 0px 27px 0px rgba(255, 211, 0, 1);
    transition: all 0.3s;
  }
`;

export const Svg = styled.img`
  width: 40%;
  margin: 0 2%;
  @media (max-width: 1100px) {
    display: none;
  }
`;
