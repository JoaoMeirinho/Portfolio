import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Space = styled.section`
  position: absolute;
  right: 0;
  left: 0;
  height: ${({ heigth }) => heigth || '50vh'};
  min-height: 300px;
  max-height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TextBanner = styled.div`
  /* width: 45%; */
  max-height: 100%;
  padding: 20px;
  justify-content: start;
  align-items: center;
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

export const Destac = styled.span`
  background: ${colors.yellow};
  padding: 5px;
  border-radius: 5px;
  margin: 0 10px;
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
