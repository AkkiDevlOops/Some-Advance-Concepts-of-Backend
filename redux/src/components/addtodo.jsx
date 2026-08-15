import React, { useState } from 'react'
import { addTodo } from '../functions/todo/todo'
import { useDispatch } from 'react-redux'



const addtodo = () => {

  const [text, settext] = useState("");
  const Dispatch = useDispatch();

  const handleSubmit = (e)=>{
  e.preventDefault();
  Dispatch(addTodo(text));
  settext("");

  }
    
  return (
    <div className='grid grid-cols-1 p-5'>
      <div><h1 className='text-center'>Add todo</h1></div>
    <form className='' onSubmit={handleSubmit}>   
    <input
     className='border rounded-2xl p-2 text-center text-cyan-300'
     placeholder='add your todo here'
     value={text || ""}
      onChange={(e)=>{settext(e.target.value)}}
      ></input>
      <div className='p-3'>
    <button className='border border-2 rounded-2xl p-2' type='submit' >Add Todo</button>
    </div>
    </form>
    </div>
  )
}

export default addtodo