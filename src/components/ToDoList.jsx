import React, { useState } from 'react';
import Form from './Form';
import Todo from './Todo';

export default function todolist() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (newElement) => {
    setListTodo([...listTodo, newElement])
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo]);
  }
  return (
    <div className='w-[600px] bg-blue-950 mt-20 p-8 rounded-md'>
      <Form addTodoList = {addList}/>
      {listTodo.map((listItem, i)=>{
        return(
          <Todo key={i} item={listItem} index={i} deleteItem={deleteListItem}/>
        )
      })}
    </div>
  )
}
