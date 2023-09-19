import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 1220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

export const Title = styled.h1`
  font-size: clamp(20px, 7vw, 40px);
`;

export const Subtitle = styled.h2`
  font-size: clamp(10px, 5vw, 20px);
  font-weight: 100;
`;

export const ContentTitle = styled.div`
  text-align: end;
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;

  @media (max-width: 870px) {
    display: flex;
  }
`;

export const Nav = styled.nav`
  @keyframes show {
    0% {
      height: 0;
    }
    100% {
      height: 100vh;
    }
  }
  display: flex;
  justify-content: space-around;
  width: 50%;
  @media (max-width: 870px) {
    animation: show 0.5s ease-out;
    animation-direction: alternate;
    display: ${(props) => (props.sidebar ? 'flex' : 'none')};
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    top: 0%;
    left: 0;
    height: ${(props) => (props.sidebar ? '100vh' : '0')};
    width: 100vw;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  list-style: none;
  border-radius: 5px;
  padding: 25px;
  &:hover {
    transition: all 0.3s;
    background: #434343;
  }
`;

export const CloseSideBar = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 75px;

  @media (max-width: 870px) {
    display: ${(props) => (props.sidebar ? 'flex' : 'none')};
  }
`;
