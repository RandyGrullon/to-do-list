import React, { useEffect } from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";

const Links = () => {
  const addOrEditTask = async (linkObject) => {
    await db.collection("todos").doc().set(linkObject);
    console.log("new task added");
  };

  const getLinks = async () => {
    const querySnapshot = await db.collection("todos").onSnapshot()(querySnapshot)=> {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
    }
   
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <LinkForm addOrEditTask={addOrEditTask} />
      Links
    </div>
  );
};

export default Links;
