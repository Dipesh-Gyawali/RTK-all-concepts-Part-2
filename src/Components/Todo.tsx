import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addTodo,
  deleteIndividualTodo,
  edit,
} from "../features/todo/todoSlice";

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [editTodo, setEditTodo] = useState({});

  const tasks = useSelector((state) => state.todo.allTodos);
  console.log(tasks, "tttttttt");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTodo.id) {
      const updatedTask = tasks.map((a) => {
        if (a.id === editTodo.id) {
          return {
            ...a,
            id: editTodo.id,
            title: inputData,
          };
        }
        return a;
      });

      dispatch(edit(updatedTask));
      setInputData("");
    } else {
      dispatch(addTodo(inputData));
      setInputData("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteIndividualTodo(id));
  };

  const handleEdit = (id) => {
    const edit = tasks.find((a) => a.id === id);
    setEditTodo(edit);
    setInputData(editTodo.title);
    console.log(editTodo, "editTodo: id ra title xa");
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
              <button onClick={() => handleEdit(item.id)}>Edit</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
