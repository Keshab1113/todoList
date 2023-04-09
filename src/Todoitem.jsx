import React from 'react';
 const Todoitem = ({todo, onDelete})=>{
    return(
        <div className='Todoitem'>
           {/* <h4 id='sno'>{todo.sno}: </h4>
           <h4 id='todostitle'>{todo.title}</h4>
           <p id='todosdesc'>{todo.desc}</p>
           <button className="btn btn-danger" id='todosbutton' onClick={()=>{onDelete(todo)}}>Delete</button> */}
        
        <table className="table table-dark main_table">
                    <thead>
                        <tr>
                            <th scope="col">{todo.sno}</th>
                            <th scope="col" className='scrool'>{todo.title}</th>
                            <th scope="col" className='scrool'>{todo.desc}</th>
                            <th scope="col"><button className="btn btn-danger" id='todosbutton' onClick={()=>{onDelete(todo)}}>Delete</button></th>
                        </tr>
                    </thead>
                    </table>
                    </div>
    );
}
export default Todoitem;
