import React from 'react'

class TodoItem extends React.Component {
    render () {

        const handleSetSingleTodo = (e) => {
            this.props.setSingleTodo(e)
        }
        
        return(
            <h1
            className="todoItem" 
            id={this.id} 
            onClick={handleSetSingleTodo}
            >{this.props.elem.title}</h1>
        )
    }
}

export default TodoItem