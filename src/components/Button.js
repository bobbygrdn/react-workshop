import React from 'react'

class Button extends React.Component {

    render() {

        const handleClick = () => {
            this.props.click()
        }

        return (
            <button className="button" onClick={handleClick}>Home</button>
        )
    }
}

export default Button