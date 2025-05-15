import "./Todo.css";

const Todo = ({ id, isDone, content, date }) => {
  return (
    <div className="Todo">
      <input type="checkbox" checked={isDone} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default Todo;
