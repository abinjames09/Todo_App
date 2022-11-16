import React, { Component } from 'react'
import "./TodoApp/TodoApp.css";

export default class TodoApp extends Component {
  render() {
    return (
      <div className='todo-container'>
        
        <form className='input-section'>
        <h1>TodoApp</h1>
            <input type="text" placeholder='Enter items.......'/>
           
        </form>
        <ul>
            <li>Items</li>
        </ul>
      </div>
    )
  }
}
