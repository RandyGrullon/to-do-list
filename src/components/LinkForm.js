import React,{ useState, useEffect}  from "react";
import { db } from "../firebase";

const LinkForm = (props) => {
  const Time = new Date();
  const date = Time.toUTCString();
  const initialStateValues = {
    currentId:'',
    todo:'',
    description:'',
    completed:false,
    time: date,
};

    const [todos, setTodos] = useState(initialStateValues);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
       setTodos({...todos, [name]: value, completed: false, time:date})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addOrEditTask(todos);
        setTodos(initialStateValues);
    }

    const getTodoById = async (id) => {
        const doc = await db.collection('todos').doc(id).get();
        setTodos({...doc.data()})
    }

    useEffect(() => {
      if (props.currentId === '') {
          setTodos({...initialStateValues});        
      }else{
        getTodoById(props.currentId);
      }
      setTodos('');
    },[props.currentId]);

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <input
        onChange={handleInputChange} 
          type="text"
          className="form-control"
          placeholder="TODO"
          name="todo"
          value={todos.todo}
        />
      </div>
      <div className="form-group">
          <textarea onChange={handleInputChange} 
          name="description" 
          id="" 
          className="form-control" 
          placeholder="Description" 
          rows="3"
          value={todos.description}
          ></textarea>
      </div>
      <button className="btn btn-primary btn-block">
        Save
        </button>
    </form>
  );
};

export default LinkForm;
