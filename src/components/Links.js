import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";

const Links = () => {
  const [todos, setTodos] = useState([]);

  const addOrEditTask = async (linkObject) => {
    await db.collection("todos").doc().set(linkObject);
  };

  const getLinks = async () => {
    db.collection("todos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTodos(docs);
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <LinkForm addOrEditTask={addOrEditTask} />
      <div className="col-md-16">
        {todos.map((todo) => (
          <div className="card mb-2">
            <div className="card-body">
              <h4>{todo.todo}</h4>
              <p>{todo.description}</p>
              <p>{todo.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
