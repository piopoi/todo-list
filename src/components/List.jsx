import "./List.css";
import { useState } from "react";
import Todo from "./Todo";

const List = ({ todos }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const onChangeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value.toLowerCase());
  };

  return (
    <div className="List">
      <input
        type="text"
        onChange={onChangeSearchKeyword}
        placeholder="검색어를 입력하세요."
      />
      {todos
        .filter((todo) => todo.content.toLowerCase().includes(searchKeyword))
        .sort((a, b) => b.id - a.id)
        .map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })}
    </div>
  );
};

export default List;
