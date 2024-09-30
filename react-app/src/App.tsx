import Container from "./components/container/container";
import Title from "./components/title/title";
import TodoList from "./components/todo-list/todo-list";
import { TODOS_MOCK } from "./mocks/todo-mock";

const APP_STYLES: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginTop: "2rem",
  gap: "2rem",
};

function App() {
  return (
    <Container>
      <div style={APP_STYLES}>
        <Title />
        <TodoList todos={TODOS_MOCK} />
      </div>
    </Container>
  );
}

export default App;
