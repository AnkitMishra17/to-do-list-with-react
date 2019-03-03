import React, { Component } from 'react';
import Todos from './todos';
import Addtodo from './AddTodo';
class App extends Component {
    state ={
      todos:[
        {id:1, content:'Play FIFA'},
        {id:2, content:'Play some more FIFA'}
      ]
    }
    deletetodo = (id) =>{
      console.log(id);
      const todos1 = this.state.todos.filter(todo =>{
        return todo.id !== id
      });
      this.setState({
        todos: todos1
      })
    }
    AddTodo = (newtodo) => {
      newtodo.id = Math.random();
      let todos = [...this.state.todos,newtodo];
      this.setState({
        todos
      })
    }

  render() {
    return (
      <div className="App">
        <h3 className="display-4 d-flex justify-content-center bg-primary" >Your-Todo-List</h3>
        <Todos Todos={this.state.todos} Deletetodo={this.deletetodo}/>
        <Addtodo AddTodos = {this.AddTodo}/>
      </div>
    );
  }
}

export default App;
