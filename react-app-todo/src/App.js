import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    this.state = {
      isLoading: true,
      todos: [],
      text: ''
    }
    super();
    this.path = 'http://localhost:3002';
  }
  getTodos = () => {
    axios.get(`${this.path}/todos`).then((res) => {
      this.setState({
        isLoading: false,
        todos: res.data.todo
      })
    }).catch((error) => {
      this.setState({
        isLoading: false
      })
    })
  }
  componentDidMount() {
    this.getTodos();
  }

  onInputHandlder = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  onDeleteTodo = (id) => {
    axios.delete(`${this.path}/todo/${id}`)
      .then((res) => {
        console.log(res);
        this.getTodos();
      })
  }
  addTodo = () => {
    if (!this.state.text) return;
    axios.post(`${this.path}/todo`, {
      todo: this.state.text
    })
      .then((res) => {
        console.log(res);
        this.getTodos();
        this.setState({
          text: ''
        })
      })
      .catch(e => console.log(e));
  }
  renderList = (todos) => {
    if (todos.length === 0) {
      return <h1>Todo list is empty</h1>
    }
    return <ul>
      {todos.map((obj) => {
        return <li key={obj._id}>
          {obj.todo}
          <button onClick={() => { this.onDeleteTodo(obj._id) }}>Delete</button>
        </li>
      })}
    </ul>
  }
  render() {
    if (this.state.isLoading) return <div className="loader" />
    return (
      <div className="App">
        {this.renderList(this.state.todos)}
        <div>
          <input onChange={this.onInputHandlder} value={this.state.text} />
          <button onClick={this.addTodo}>Add Todo</button>
        </div>
      </div>
    );
  }
}

export default App;
