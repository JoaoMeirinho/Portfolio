import { useState } from 'react';
import {
  Container,
  Title,
  Subtitle,
  Content,
  ContentTitle,
  Menu,
  Nav,
  Link,
  CloseSideBar,
} from './styled';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>João Meirinho</Title>
          <Subtitle>Web Developer</Subtitle>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSideBar} />
        </Menu>
        <Nav sidebar={sidebar}>
          <CloseSideBar onClick={showSideBar} sidebar={sidebar}>
            <FaTimes />
          </CloseSideBar>
          <li>
            <Link>Início</Link>
          </li>
          <li>
            <Link>Projetos</Link>
          </li>
          <li>
            <Link>Habilidades</Link>
          </li>
          <li>
            <Link>Contatos</Link>
          </li>
        </Nav>
      </Content>
    </Container>
  );
}
