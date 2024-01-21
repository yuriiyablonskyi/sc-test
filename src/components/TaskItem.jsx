import styled from 'styled-components'
import { RiCheckboxCircleLine } from 'react-icons/ri'
import { FaRegTrashCan } from 'react-icons/fa6'
import { BsPencil } from 'react-icons/bs'
import Box from './Box'
import Input from './Input'


const StyledButton = styled.button`
  background-color: white;
  border-radius: 50%;
  padding: 7px;
  border: none;
  display: flex;
  cursor: pointer;
`

const TaskItem = ({ value }) => (
  <Box $background='#CAE2FF'>
    <RiCheckboxCircleLine size='2.3em' fill='#75CE73' />
    <Input placeholder={value} $width='75%' />
    <StyledButton>
      <BsPencil size='1.6em' fill='#A089FE' />
    </StyledButton>

    <StyledButton>
      <FaRegTrashCan size='1.6em' fill='#ED6666' />
    </StyledButton>
  </Box>
)

export default TaskItem