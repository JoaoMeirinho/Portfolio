import styled from 'styled-components';
import { Text } from '../../styles/Globals';
import { lightDark, lightWhite, yellow } from '../../config/colors';

export const Box = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export const TextFooter = styled(Text)`
  font-weight: 500;
`;
