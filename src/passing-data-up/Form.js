import React, { Component } from 'react';
import Field from './Field';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = { name: "", email: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e, field) {
        let change = {}
        change[field] = e.currentTarget.value;
        this.setState(change);
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
                <Field 
                    label={ 'Name' }
                    name={ 'name' }
                    type={ 'text' }
                    value={ name }
                    handleChange={ (e) => this.handleChange(e, 'name') } 
                />
                <Field 
                    label={ 'email' }
                    name={ 'email' }
                    type={ 'email' }
                    value={ email } 
                    handleChange={ (e) => this.handleChange(e, 'email') }
                />                
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Form;
