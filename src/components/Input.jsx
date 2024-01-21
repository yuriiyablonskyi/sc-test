import styled from 'styled-components'

const StyledInput = styled.input`
  padding:9px 16px;
  color: inherit;
  font: inherit;
  border-radius:25px;
  border: none;
  outline: none;
  width: ${({ $width }) => $width};
  
  @media${({ theme }) => theme.tablet} {
    padding:5px 8px;
  }
`

const Input = (props) => (
  <StyledInput {...props} />
)

export default Input