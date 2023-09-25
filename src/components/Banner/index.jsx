import { TextBanner, ButtonCurriculum, Svg } from './styled';

import { Title, Text, Space, Destac } from '../../styles/Globals';

import Curriculo from '../../curriculum_joao_meirinho.pdf';

import SvgVector from '../../images/code_thinking.svg';

export default function Banner() {
  return (
    <Space heigth="75vh">
      <TextBanner>
        <Title align="start">
          Seu <Destac>Próximo</Destac> Desenvolvedor Web!
        </Title>
        <Text align="start">
          Faça já o <Destac>Download</Destac> do meu currículo para mais
          informações sobre mim!
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
      {/* <TextBanner> */}
      <Svg src={SvgVector} />
      {/* </TextBanner> */}
    </Space>
  );
}
