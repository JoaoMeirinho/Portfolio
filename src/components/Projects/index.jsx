import { Box,Card, ContentImage, Image, TextTitle, TextParagraph } from './styled';
import { Destac } from '../../styles/Globals';
import profile from '../../images/profile.jpg';

export default function Projects() {
  return (
    <>
    <TextTitle>
        <Destac>Projetos</Destac>
    </TextTitle>
    <Box>
      <Card>
       
        <ContentImage>
          <Image src={profile} />
        </ContentImage>
        <TextTitle>Xadrez Console</TextTitle>
          <TextParagraph>
            Formado em Informática para Internet e graduando em Ciências da
            Computação, atualmente estou procurando minha primeira oportunidade
            como desenvolvedor Back-end. Procuro colocar meus conhecimentos em
            prática por meio de projetos, como você poderá ver em breve!
          </TextParagraph>
      </Card>
      <Card>
       
        <ContentImage>
          <Image src={profile} />
        </ContentImage>
        <TextTitle>Xadrez Console</TextTitle>
          <TextParagraph>
            Formado em Informática para Internet e graduando em Ciências da
            Computação, atualmente estou procurando minha primeira oportunidade
            como desenvolvedor Back-end. Procuro colocar meus conhecimentos em
            prática por meio de projetos, como você poderá ver em breve!
          </TextParagraph>
      </Card>
    </Box>
    </>
  );
}
