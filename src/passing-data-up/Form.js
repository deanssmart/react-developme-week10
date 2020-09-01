import React, { Component } from 'react';
import Field from './Field';

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
            <form onSubmit={ this.handleClick } className="container">
                <Field label={ 'name' } name={ 'name' } type={ 'text' } value={ name } handleChange={ this.handleName } />
                <Field label={ 'email' } name={ 'email' } type={ 'email' } value={ email } handleChange={ this.handleEmail } />                
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Form;
