import { TextBanner, ButtonCurriculum } from './styled';

import { Title, Text, Space, Destac } from '../../styles/Globals';

import Curriculo from '../../curriculum_joao_meirinho.pdf';

export default function Banner() {
  return (
    <Space heigth="75vh">
      <TextBanner>
        <Title>
          Em <Destac>Breve!</Destac>
        </Title>
        <Text>
          Mas enquanto isso, você já pode fazer o download do meu currículo:
        </Text>
        <ButtonCurriculum
          href={Curriculo}
          download="Curriculo_Joao_Meirinho"
          target="_blank"
          rel="noreferrer"
        >
          BAIXAR CURRÍCULO
        </ButtonCurriculum>
      </TextBanner>
    </Space>
  );
}
