import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './Components/AddTodo';
import Filtre from './Components/Filtre';
import TodoLists from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoLists/>
      <hr/>
      <Filtre/>
    </div>
  );
}

export default App;
