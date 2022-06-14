import React from 'react';
import TodoItem from './TodoItem'

class Todos extends React.Component {
    render() {
        return(
            this.props.todos.map((elem, index) => {
               return <TodoItem elem={elem} key={index} setSingleTodo={this.props.setSingleTodo} />
            })
        )
    }
}

export default Todos