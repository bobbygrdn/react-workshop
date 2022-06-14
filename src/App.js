import React from 'react';
import Todos from './components/Todos';
import Loading from './components/Loading'
import SingleTodo from './components/SingleTodo'
import Button from './components/Button'

class App extends React.Component {
  constructor(props) {
    super(props);

    // state you should have
    // todos
    // singleTodo
    // loading
    // loadingMessage = 'app is loading...' -> pass as props to loading component.
    
    this.state = {
      todos: null,
      singleTodo: null,
      loading: true,
      loadingMessage: 'App is loading...',
    }
  }
   
  // Components
    // 1. Todos
    // 2. TodoItem
    // 3. SingleTodo (single highlighted todo)
    // 4. Loading Component
    // 5. Button component - FOR THE BACK BUTTON

  // Functionality
    // Ability to set a single todo (click event on a todo)
    // Back buttons should make single todo state null. 


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => this.setState({todos: data, loading: false}))
  }
  // 1. Use componentDidMount to make an api call to https://jsonplaceholder.typicode.com/todos/
  // 2. The app should show all todos in a list.
  // 3. Show a loading component while making api calls
  // 4. Show a single todo when it is clicked on.
  // 5. Have a back button that changes the singleTodo state back to null.


  // When clicking on a single todo, should make API call to https://jsonplaceholder.typicode.com/todos/ID, 
  // get the id from the event object that is created. 

  // If loading, render loading component with loading message passed in as props.

  // Conditionaly render Todos -> TodoItem or singleTodo

  render() {

    const Click = () => {
      this.setState ({singleTodo: null})
    }

    const setSingleTodo = (e) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.id}`)
      .then(response => response.json())
      .then(data => this.setState({singleTodo: data}))
    }

    if(this.state.loading === true) {
      return (
        <div className="loading" >
          <Loading loadingMessage={this.state.loadingMessage}/>
        </div>
      )
    }
    if(this.state.singleTodo !== null){
      return (
        <div>
        <SingleTodo singleTodo={this.state.singleTodo} />
        <Button Click={Click} />
        </div>
      )
    } else {
      return (
        <div>
        <h1 className="title">To-do List</h1>
        <Todos todos={this.state.todos} setSingleTodo={setSingleTodo}/>
        </div>
      )
    }
  }
}

export default App;
