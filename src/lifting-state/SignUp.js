import React, { Component } from 'react';
import Password from './Password';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = { inputPassword: "", inputConfirm: "" };

        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handlePassword(e) {
        this.setState({ inputPassword: e.currentTarget.value });
    }

    handleConfirm(e) {
        this.setState({ inputConfirm: e.currentTarget.value });
    }

    valid() {
        const { minimumLength } = this.props
        const { inputPassword, inputConfirm } = this.state;

        return inputPassword === inputConfirm && inputPassword.length > minimumLength ? "" : "red";         
    }

    render() {
        const { inputPassword, inputConfirm } = this.state;

        return(
            <>
                <Password 
                    label="Password"
                    value={ inputPassword } 
                    handleChange={ this.handlePassword } 
                    colour={ this.valid() }
                />
                <Password 
                    label="Confirm"
                    value={ inputConfirm } 
                    handleChange={ this.handleConfirm } 
                    colour={ this.valid() }                   
                />
            </>
        );
    }
}

export default SignUp;