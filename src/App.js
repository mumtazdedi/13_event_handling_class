import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Input from './components/Input';
import Todo from './components/Todo';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  handleDelete = (id) => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  addTodo = (newTodo) => {
    const newTodoData = { ...newTodo };

    this.setState({ todos: [...this.state.todos, newTodoData] });
  }

  handleCheck = (id) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
    console.log("Success Check id = " + id)
  }

  render() {
    return (
      <>
        <Title />
        <Input todos={this.state.todos} addTodo={this.addTodo} />
        {
          this.state.todos.map((todo, index) => {
            return <Todo key={index} todo={todo} handleDelete={this.handleDelete} handleCheck={this.handleCheck} />
          })
        }
      </>
    )

  };
}

export default App;
