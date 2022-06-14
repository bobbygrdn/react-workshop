import React from 'react'

class SingleTodo extends React.Component {
    render() {

        return(
            <div>
            <h1
            className="todoItem" 
            id={this.props.id} 
            >{this.props.title}</h1>
            </div>
        )
        
    }
}

export default SingleTodo