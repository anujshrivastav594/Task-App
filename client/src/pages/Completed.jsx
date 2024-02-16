import React from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import useFetch from "../hooks/useFetch";
function Completed() {

  const {data} = useFetch(
    `http://localhost:8800/api/tasks/complete`
    );
  const notes = data;
  const addNote = async(newNote) => {
    try {
      await axios.post("http://localhost:8800/api/tasks/", newNote);
 
  } catch (err) {
    console.log(err);
  }
  }

  const deleteNote = async(id) => {
    try {
      await axios.delete(`http://localhost:8800/api/tasks/${id}`);
    
  } catch (err) {
    console.log(err);
  }
  }
  
  return (
    data && <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            status={noteItem.status}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );

}

export default Completed;
