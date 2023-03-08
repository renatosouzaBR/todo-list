import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      height: 3rem;
      width: 3rem;
      color: ${(props) => props.theme['gray-100']};

      display: flex;
      align-items: center;
      justify-content: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }

    a:hover {
      border-bottom-color: ${(props) => props.theme['green-500']};
    }

    a.active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`
