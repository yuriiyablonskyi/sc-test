import styled from 'styled-components'
import Box from './Box'
import Input from './Input'

const StyledButton = styled.button`
  border-radius:25px;
  background-color:#2E3B7E;
  padding:8px 14px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  &:hover {
    background-color:#464e79;
  }
  @media${({ theme }) => theme.tablet} {
    padding:0;
    background-color: transparent;
    &:hover {
    background-color:transparent;
    }
  }
`

const StyledText = styled.span`
  color: white;
  @media${({ theme }) => theme.tablet} {
   display: none;
  }
`

const StyledSpan = styled.span`
  color:#2E3B7E;
  border-radius:50%;
  background-color: white;
  font-size: 35px;
  display: inline-block;
  height: 44px;
  width: 44px;
  line-height: 1.2;
  margin-left: 17px;
  @media${({ theme }) => theme.tablet} {
    margin-left: 6px;
  }
`

const CreateTask = () => (
  <Box $background='#99C0F0'>
    <Input placeholder='Write something here...' />
    <StyledButton>
      <StyledText>Add task</StyledText>
      <StyledSpan>+</StyledSpan>
    </StyledButton>
  </Box>
)

export default CreateTask