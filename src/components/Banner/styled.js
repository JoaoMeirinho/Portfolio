import styled from 'styled-components';
import * as colors from '../../config/colors';

export const TextBanner = styled.div`
  /* width: 45%; */
  max-height: 100%;
  padding: 20px;
  justify-content: start;
  align-items: center;
`;

export const ButtonCurriculum = styled.a`
  display: inline-block;
  margin-top: 30px;
  font-size: clamp(15px, 2vw, 40px);
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
