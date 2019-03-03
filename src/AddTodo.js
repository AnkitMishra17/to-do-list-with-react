import React, {Component} from 'react'

class Addtodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) =>{
    this.setState({
      content : e.target.value
    })
  }
  handleClick = (e) =>{
    e.preventDefault();
    this.props.AddTodos(this.state);
  }
  render() {
    return(
      <div className='jumbotron mt-5'>
        <form>
        <label> Add New Todo:</label>
        <input type='text' onChange={this.handleChange} className='form-control w-50'/><br/>
        <button onClick={this.handleClick} className='btn btn-primary mt-2'>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default Addtodo;
