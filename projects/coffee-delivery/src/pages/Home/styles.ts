import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 90rem;

    padding: 2rem 10rem;

    img {
      height: 2.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        background-color: ${(props) => props.theme['purple-100']};
        border-radius: 6px;
        padding: 0.5rem;

        font-size: 0.875rem;
        color: ${(props) => props.theme['purple-900']};

        svg {
          color: ${(props) => props.theme['purple-400']};
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        padding: 0.5rem;

        background-color: ${(props) => props.theme['yellow-100']};
        color: ${(props) => props.theme['yellow-900']};
        border: none;

        position: relative;

        span {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 100%;
          background-color: ${(props) => props.theme['yellow-900']};

          font-size: 0.75rem;
          font-weight: 700;
          color: ${(props) => props.theme.white};

          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
        }
      }
    }
  }
`

export const WelcomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  background-image: url('src/assets/background.svg');
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  max-width: 90rem;
  padding: 5rem 10rem;

  img {
    height: 22.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-900']};
      line-height: 1.3;
    }

    span {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-800']};
    }

    div {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 1.25rem;

      div {
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;

        span {
          flex: 1;
          flex-wrap: wrap;
          font-size: 1rem;
          line-height: 1.3;
          color: ${(props) => props.theme['base-700']};
        }

        div {
          width: 2rem;
          height: 2rem;
          border-radius: 100%;
          background-color: ${(props) => props.theme['yellow-900']};

          display: flex;
          align-items: center;
          justify-content: center;

          color: ${(props) => props.theme.white};
        }
      }
    }
  }
`
