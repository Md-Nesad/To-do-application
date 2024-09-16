import React from 'react'
import { TiDelete } from "react-icons/ti";

export default function Todo({item, deleteItem, index}) {
  return (
    <div>
      <ul className='mt-2'>
        <li className='todo-item'>{item} <TiDelete className='icon' onClick={e=> {
          deleteItem(index)
        }}/></li>
      </ul>
    </div>
  )
}
