import React, { Component } from 'react';
import Square from './Square';

class Squares extends Component {
    constructor(props) {
        super(props);

        this.state = { selected: 1 };

    }

    render() {
        const { selected } = this.state;
        const { colour } = this.props;

        return(
            <>
                <Square 
                    colour={ colour }
                    selected={ selected === 1 }
                    handleClick={ () => this.setState({ selected: 1 })} />
                <Square 
                    colour={ colour }
                    selected={ selected === 2 }
                    handleClick={ () => this.setState({ selected: 2 })} /> 
            </>
        );
    }
}

export default Squares;