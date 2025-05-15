import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ createTodo }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDownContent = (e) => {
    if (e.keyCode === 13) {
      onSubmit(content);
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    createTodo(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        type="text"
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDownContent}
        placeholder="할 일을 입력하세요."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
