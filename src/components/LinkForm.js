import React,{ useState, useEffect}  from "react";

const LinkForm = () => {

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
        console.log(todos);
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
        />
      </div>

      <div className="form-group">
          <textarea onChange={handleInputChange} name="description" id="" className="form-control" placeholder="Description" rows="3"></textarea>
      </div>

      <button className="btn btn-primary btn-block">save</button>
    </form>
  );
};

export default LinkForm;
