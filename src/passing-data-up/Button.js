import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = { clicked: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { handleUpdate } = this.props;
        const { clicked } = this.state;

        let value = clicked + 1

        this.setState({ clicked: value });

        handleUpdate(value);
        
    }
   

    render() {
        return(
            <button
                className={ "btn btn-primary" }
                onClick={ this.handleClick }>
                Click Me!
            </button>
        );
    }
}

export default Button;
