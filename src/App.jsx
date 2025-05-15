import "./App.css";
import { useReducer, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const todoIdRef = useRef(3);

  const createTodo = (content) => {
    dispatch({
      type: "CREATE",
      newTodo: {
        id: todoIdRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const updateTodo = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const deleteTodo = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <Header />
      <Editor createTodo={createTodo} />
      <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

function reducer(todos, action) {
  switch (action.type) {
    case "CREATE":
      return [...todos, action.newTodo];
    case "UPDATE":
      return todos.map((todo) => {
        if (todo.id !== action.targetId) {
          return todo;
        }
        return { ...todo, isDone: !todo.isDone };
      });
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.targetId);
  }
}

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "할일 테스트 1",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: "할일 테스트 2",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "할일 테스트 3",
    date: new Date().getTime(),
  },
];
