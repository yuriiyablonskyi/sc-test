import styled from 'styled-components'

const StyledBox = styled.div`
  padding: 24px;
  border-radius: 25px;
  background-color: ${({ $background }) => $background};
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  
  @media${({ theme }) => theme.tablet} {
    padding: 6px 10px;
  }
`


const Box = (props) => (
  <StyledBox {...props} />
)

export default Box