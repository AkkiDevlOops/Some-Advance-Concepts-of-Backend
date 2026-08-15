import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../functions/todo/todo';

const todos = () => {
    const todos = useSelector(state=> state.todo);
    const dispatch = useDispatch();

  return (<>
  <h1>todos List</h1>
      <div className='flex items-center justify-center'>
        <div className='text-center'>
        
        </div>
        <div className='grid grid-cols-1'>
         {todos.map((todo)=>(
            <li  className='border rounded-2xl list-none m-2 w-sm' key={todo.id}>
            {todo.text}
            <button className='font-bold p-3 text-cyan-300' onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
            </li>
           
          
 
         ))}
         </div>
    </div>
    </>

  )
}

export default todos