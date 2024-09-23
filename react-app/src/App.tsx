import Container from "./components/container/container";
import Title from "./components/title/title";
import TodoList from "./components/todo-list/todo-list";

const APP_STYLES: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginTop: "3rem",
  gap: "2rem",
};

function App() {
  return (
    <Container>
      <div style={APP_STYLES}>
        <Title />
        <TodoList />
      </div>
    </Container>
  );
}

export default App;
