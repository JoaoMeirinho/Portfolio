import { Title, Space, Destac } from '../../styles/Globals';
import { TextFooter, Box } from './styled';

export default function Footer() {
  return (
    <Box>
      <TextFooter>
        Todos os direitos reservados,{' '}
        <Destac>{new Date().getFullYear()}</Destac>
      </TextFooter>
    </Box>
  );
}
