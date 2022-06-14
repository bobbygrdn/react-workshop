import React from 'react'

class SingleTodo extends React.Component {
    render() {

        return(
            <h1
            className="todoItem" 
            id={this.id} 
            >{this.props.title}</h1>
        )
        
    }
}

export default SingleTodo