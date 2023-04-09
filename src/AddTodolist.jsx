import React, { Component, useState } from 'react'

export const AddTodolist=({addTodo})=> {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description cannot be Empty");
    }
    else{
    addTodo(title, desc);
    setTitle("");
    setDesc("");
    }
  }
    return (
        <div className="container my-4">
            <h2 className="text-center" id='mainheading2'><b>Add ToDo</b></h2>
            <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="title" className='sizebarao'>Todo Title</label>
                <input type="text" value={title}
                onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
                <label htmlFor="desc" className='sizebarao'>Todo Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
            </div>
            <button type="submit" id="add" className="btn">Add Todo</button>
            {/* <button  id="clear" className="btn btn-primary">Clear All</button> */}
            </form>
      </div>
    )
}

export default AddTodolist