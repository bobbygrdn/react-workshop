import React from 'react';
import Todos from './components/Todos';
import Loading from './components/Loading'
import SingleTodo from './components/SingleTodo'
import Button from './components/Button'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todos: null,
      singleTodo: null,
      loading: true,
      loadingMessage: 'App is loading...',
    }
  }
   
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => this.setState({todos: data, loading: false}))
  }
 
  render() {

    const click = () => {
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

    // Ternary operator method which checks the value of singleTodo state and renders the singleTodo component if true
    return (this.state.singleTodo ? 
  
      <div>
      <SingleTodo singleTodo={this.state.singleTodo} />
      <Button click={click} />
      </div>
  
    :
  
      <div>
      <h1 className="title">To-do List</h1>
      <Todos todos={this.state.todos} setSingleTodo={setSingleTodo}/>
      </div>
    );

  }
}

export default App;
