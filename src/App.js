import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Todo from './components/Todo'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid';
import About from './components/pages/About'


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      todo :[]
    }
  }

  markComplete = (id)=>
  {
    // console.log("from app js",id);
    this.setState({
      todo: this.state.todo.map(todo=>{
        if(todo.id === id)
        {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = (id) =>
  {
    this.setState({
      todo: [...this.state.todo.filter(todo => todo.id !== id )]
    })
  }

  addTodo=(title) =>
  {
    const newTodo={
      id:uuid.v4(),
      title:title,
      completed:false
    }
    this.setState({todo:[...this.state.todo,newTodo]});
  }

  componentDidMount()
  {
    
  }
  
  render(){
    return(
      <Router>
      <div>
      <Header />
      <Route exact path='/' render={props => (
        <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
      <Todo todo={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>
      )} />

      <Route path='/about' component={About}/>
      
      </div>
      </Router>
    );
  }
}

export default App;
