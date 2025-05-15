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

  return (
    <div className="App">
      <Header />
      <Editor createTodo={createTodo} />
      <List todos={todos} />
    </div>
  );
}

export default App;

function reducer(todos, action) {
  switch (action.type) {
    case "CREATE":
      return [...todos, action.newTodo];
    case "UPDATE":
      return [...todos];
    case "DELETE":
      return [...todos];
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
