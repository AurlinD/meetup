import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/BackDrop";

function App() {
  return (
    <div>
      <div>
        <h1>My Todos</h1>
        <Todo text="Learn React" />
        <Todo text="Master React" />
        <Todo text="Explore the React Course" />
        <Modal />
        <Backdrop />
      </div>
    </div>
  );
}

export default App;
