import axios from "axios";
import React from "react";

function Note(props) {

  const status = props.status;

  function handleClick() {
    props.onDelete(props.id);
    window.location.reload();
  }

  const handleUpdate = async(e) => {
    try { 
      const newStatus = status === 'incomplete' ? 'completed' : 'incomplete';
      await axios.patch(`http://localhost:8800/api/tasks/${e.target.value}`, {status: newStatus});
      window.location.reload();
    }
      catch(err) {
        console.log(err);
      }
   
  }

  return (
    <div className="note">
    <input type="checkbox" name="checkbox" value={props.id} onChange={handleUpdate}></input>
      <h1 style={{ textDecoration: status === 'completed' ? 'line-through' : 'none' }}>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
