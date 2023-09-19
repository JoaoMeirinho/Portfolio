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
} from './style';
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
          <Link>menu</Link>
          <Link>menu</Link>
          <Link>menu</Link>
        </Nav>
      </Content>
    </Container>
  );
}
