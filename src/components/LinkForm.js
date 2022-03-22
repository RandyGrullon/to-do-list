import React,{ useState}  from "react";

const LinkForm = (props) => {

    const initialStateValues = {
        todo:'',
        description:''
    };

    const [todos, setTodos] = useState(initialStateValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
       setTodos({...todos, [name]: value})
       
    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(todos);
        props.addOrEditTask(todos);
        setTodos({...initialStateValues});
    }
  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text  bg-grey">
          <i className="material-icons">add</i>
        </div>

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

      <button className="btn btn-primary btn-block">save</button>
    </form>
  );
};

export default LinkForm;
