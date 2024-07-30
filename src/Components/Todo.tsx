import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteIndividualTodo } from "../features/todo/todoSlice";

export const Todo = () => {
  const [inputData, setInputData] = useState();

  const tasks = useSelector((state) => state.todo.allTodos);
  console.log(tasks, "tttttttt");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(inputData));
    setInputData("");
  };

  const handleDelete = (id) => {
    dispatch(deleteIndividualTodo(id));
  };

  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {tasks.map((item) => {
          return (
            <ul key={item.id}>
              <li>id:{item.id}</li>
              <li>title:{item.title}</li>
              {/* <li>content:{item.content}</li> */}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
