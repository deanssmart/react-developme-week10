import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = { name: "", email: "" };

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleName(e) {
        this.setState({ name: e.currentTarget.value });
    }

    handleEmail(e) {
        this.setState({ email: e.currentTarget.value });
    }

    handleClick(e) {
        e.preventDefault();
        const { handleSubmit } = this.props;

        this.setState({ name: "", email: "" });

        handleSubmit(this.state);
    }


    render() {
        const { name, email } = this.state;


        return(
            <form className="form-group">
                <label className="lead" htmlFor="name">Name</label>
                <input 
                    id="name"
                    type="text"
                    className="form-control"
                    onChange={ this.handleName }
                    value={ name }
                />
                <label className="lead" htmlFor="email">email</label>
                <input 
                    id="email"
                    type="email"
                    className="form-control"
                    onChange={ this.handleEmail }
                    value={ email }
                /> 
                <button
                    className={ "btn btn-primary" }
                    onClick={ this.handleClick }>
                    Submit
                </button>                               
            </form> 
        );
    }
}

export default Form;
