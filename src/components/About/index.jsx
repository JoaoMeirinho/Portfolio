import { Box, ContentImage, Image, TextTitle, TextParagraph } from './styled';
import { Destac } from '../../styles/Globals';
import profile from '../../images/profile.jpg';

export default function About() {
  return (
    <Box>
      <ContentImage>
        <Image src={profile} />
      </ContentImage>
      <ContentImage>
        <TextTitle>
          Quem é João <Destac>Meirinho</Destac>?
        </TextTitle>
        <TextParagraph>
          Formado em Informática para Internet e graduando em Ciências da
          Computação, atualmente estou procurando minha primeira oportunidade
          como desenvolvedor Back-end.
        </TextParagraph> 
        <TextParagraph>
          Procuro colocar meus conhecimentos em
          prática por meio de projetos, como você poderá ver em breve!
        </TextParagraph>
        
        
      </ContentImage>
    </Box>
  );
}
