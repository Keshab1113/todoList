import React from 'react'
import Todoitem from './Todoitem';
const Todos=(props) =>{
  return (
        <div className="container">
            <h2 id='mainheading'><b>ToDos List</b></h2>
            <table className="table table-dark main_table">
                    <thead>
                        <tr>
                            <th scope="col">Sl No</th>
                            <th scope="col">Item</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    </table>
            {props.todos.length===0? 
                <table className="table table-dark main_table">
                <tbody id="tableBody">
                        <tr>
                            <th scope="row">1</th>
                            <td>This is your item list</td>
                            <td>This is your description list</td>
                            <td><button className="btn btn-primary">Delete</button></td>
                        </tr>
                    </tbody>
                    </table>
                     : 
            props.todos.map((todo)=>{
                return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
            }
        </div>
  );
}
export default Todos;




































{/* <div className="container my-4">
            <h2 className="text-center" id='mainheading'><b>ToDos List</b></h2>
            <form>
            <div className="form-group">
                <label for="title" className='sizebarao'>Title</label>
                <input type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your personal details with anyone
                    else.</small>
            </div>
            <div className="form-group">
                <label for="description" className='sizebarao'>Description</label>
                <input type="text" className="form-control" id="description"/>
            </div>
            <button type="submit" id="add" className="btn btn-primary">Add Todo</button>
            <button  id="clear" className="btn btn-primary">Clear All</button>
            </form>
            <div id="items" className="my-4">
                <h2>The List</h2>
                <table className="table table-dark main_table">
                    <thead>
                        <tr>
                            <th scope="col">Sl No</th>
                            <th scope="col">Item</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <tr>
                            <th scope="row">1</th>
                            <td>This is your item list</td>
                            <td>This is your description list</td>
                            <td><button className="btn btn-primary">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  ) */}