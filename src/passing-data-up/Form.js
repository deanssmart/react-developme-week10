import React, { Component } from 'react';
import Field from './Field';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {name: "", email: "", telephone: "", dob: "" };

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

        this.setState({name: "", email: "", telephone: "", dob: "" });

        handleSubmit(this.state);
    }


    render() {
        // const { label, name, type } = this.state;
        const { fields } = this.props;

        return(
            <form onSubmit={ this.handleClick } className="container">
                { fields.map((field, i) => (
                    <Field 
                        key={ i }
                        label={ field.label }
                        name={ field.name }
                        type={ field.type }
                        value={ this.state.field }
                        handleChange={ (e) => this.handleChange(e, field.name) }
                    />
                ))}
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Form;
