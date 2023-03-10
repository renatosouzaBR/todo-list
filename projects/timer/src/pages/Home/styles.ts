import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  label,
  span {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};
  }
`

const BaseInput = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0.625rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  &:focus {
    box-shadow: none;
    border-bottom: 1px solid ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }
`

export const ProjectNameInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

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

export const StartCountdownButton = styled.button`
  width: 100%;
  padding: 1.25rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme['green-500']};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-300']};
  }
`
