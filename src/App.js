import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Article from "./Article";
import Container from "./Container";
import Main from "./Main";
import Buttons from "./Buttons";

const tasks = [
  { id: 1, content: "przejść na reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań"></Header>
      <Main>
        <Article
          title="Dodaj nowe zadanie"
          body={<Form></Form>}
        >
        </Article>
        <Article
          title="Lista zadań"
          body={
            <List
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
            >
            </List>
          }
          extraButtons={
            <Buttons
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
            >
            </Buttons>
          }
        >
        </Article>
      </Main>
    </Container>
  );
}

export default App;