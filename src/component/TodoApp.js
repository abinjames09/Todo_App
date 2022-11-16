import React, { Component } from 'react'
import "./TodoApp/TodoApp.css";

export default class TodoApp extends Component {

  state={
    input: "",
    items: []
  };
  handlechange = (event) =>{
    this.setState({
      input: event.target.value
    });
    
  };
  storeItems = event=>{
    event.preventDefault();
    const { input } = this.state;
   
    this.setState({
      items: [...this.state.items, input],
      input: ""
    });


  };

  deleteItem = key =>{
  const allItems = this.state.items;

  allItems.splice(key, 1);
  this.setState({
    items:allItems
  })

  };

  render() {
    const { input,items }= this.state;
    console.log(items);
    return (
      <div className='todo-container'>
        
        <form className='input-section' onSubmit={this.storeItems}>
        <h1>TodoApp</h1>
            <input type="text" value={input} onChange={this.handlechange}  placeholder='Enter items.......'/>
           
        </form>
        <ul>
            {items.map((data, index) =>(
              <li key={index}>{data}<i onClick={() => this.deleteItem(index)} class="fa-regular fa-trash-can"></i></li>
            ))}
           
        </ul>
      </div>
    )
  }
}
