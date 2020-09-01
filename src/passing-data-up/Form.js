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
            <form onSubmit={ this.handleClick } className="container">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" className="form-control" onChange={ this.handleName } value={ name } />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" className="form-control" onChange={ this.handleEmail } value={ email } />
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Form;
