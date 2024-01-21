import styled from 'styled-components'
import CreateTask from './components/CreateTask'
import TaskItem from './components/TaskItem'

const data = ['qui ullam ratione quibusdam voluptatem quia omnis', 'illo expedita consequatur quia in', 'quo adipisci enim quam ut ab', 'molestiae perspiciatis ipsa', 'illo est ratione doloremque quia maiores aut', 'vero rerum temporibus dolor', 'ipsa repellendus fugit nisi', 'et doloremque nulla', 'repellendus sunt dolores architecto voluptatum', 'ab voluptatum amet voluptas']

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px; 
  padding: 32px 20px;
  @media${(media) => media.tablet} {
    padding: 15px;
  }
`

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 730px; 
`

const UserName = styled.h2`
  font-size:40px;
  font-weight:700;
  @media${(media) => media.tablet} {
    font-size:20px;
  }
`

const Title = styled.h1`
  font-size:48px;
  text-align:center;
  font-weight:700;
  margin-bottom:24px;
  @media${(media) => media.tablet} {
    font-size:24px;
  }
`

const App = () => (
  <AppWrapper>
    <UserName>Hi, Alex</UserName>

    <AppContainer>
      <Title>To do list</Title>
      <CreateTask />
      {data.map(task => (
        <TaskItem value={task} />
      ))}
    </AppContainer>
  </AppWrapper>
)

export default App
