import styled from 'styled-components'

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-500']};
    border-radius: 8px;
    padding: 0 1rem;

    font-family: 'Roboto mono', monospace;
    font-size: 10rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const Separator = styled.span`
  background-color: transparent !important;
  color: ${(props) => props.theme['green-700']} !important;
  max-width: 98px;

  display: flex;
  align-items: center;
  justify-content: center;
`
