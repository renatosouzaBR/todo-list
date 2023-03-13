import styled from 'styled-components'

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
