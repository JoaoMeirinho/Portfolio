import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 2em;
`;

export const Subtitle = styled.h2`
  font-size: 1.3em;
  font-weight: 100;
`;

export const ContentTitle = styled.div`
  text-align: end;
`;

export const Menu = styled.div`
  font-size: 40px;
  display: none;
  cursor: pointer;

  @media (max-width: 760px) {
    display: flex;
  }
`;

export const Nav = styled.nav`
  @keyframes show {
    0% {
      height: 0;
      top: -100%;
    }
    100% {
      height: 100vh;
      top: 0;
    }
  }
  display: flex;
  justify-content: space-around;
  width: 25%;
  animation: show 0.5s ease-out;
  animation-direction: alternate;
  @media (max-width: 760px) {
    display: ${(props) => (props.sidebar ? 'flex' : 'none')};
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    top: 0%;
    left: 0;
    height: ${(props) => (props.sidebar ? '100vh' : '0')};
    width: 100vw;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: 17% 0;
  list-style: none;
  border-radius: 5px;
  /* line-height: 100%; */
  height: 100%;
  width: 100%;

  &:hover {
    transition: all 0.3s;
    background: #434343;
  }
`;

export const CloseSideBar = styled.div`
  display: none;
  font-size: 40px;
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 35px;

  @media (max-width: 760px) {
    display: ${(props) => (props.sidebar ? 'flex' : 'none')};
  }
`;
