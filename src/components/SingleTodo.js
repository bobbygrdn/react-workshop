import React from 'react'

class SingleTodo extends React.Component {
    render() {

        return(
            <div>
            <h1 className="title">To-do Item</h1>
            <h1
            className="singleTodo" 
            id={this.props.singleTodo.id} 
            >{this.props.singleTodo.title}</h1>
            </div>
        )
        
    }
}

export default SingleTodo