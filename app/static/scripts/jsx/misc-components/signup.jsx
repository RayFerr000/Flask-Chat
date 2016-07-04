class Signup extends React.Component {

    validateAndSubmit = () => {
        const email = this.refs.email,
              username = this.refs.username,
              password = this.refs.password,
              confirmPassword = this.refs.confirm;

        this.validateInputs(email, username, password, confirmPassword);

        if (email.className !== 'red' && username.className !== 'red' && password.className !== 'red' && confirmPassword.className !== 'red') {
                this.props.signupUser(email.value, username.value, password.value);
            }
    }

    validateInputs = (email, username, password, confirmPassword) => {
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        email.className = (!re.test(email.value)) ? 'red' : '';
        username.className = (username.value.length === 0) ? 'red' : '';
        password.className = (password.value.length === 0 || password.value !== confirmPassword.value) ? 'red' : '';
        confirmPassword.className = (password.value.length === 0 || password.value !== confirmPassword.value) ? 'red' : '';
    }

    render() {
      return (
        <div className={(this.props.isHidden) ? 'hide' : 'signup' }>
            <div className='row'>
                <div className='col-sm-6 inputField'>
                    <label>Email</label>
                    <input ref="email"></input>
                </div>
                <div className='col-sm-6 inputField'>
                    <label>Username</label>
                    <input ref="username"></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6 inputField'>
                    <label>Password</label>
                    <input ref="password" type="password"></input>
                </div>
                <div className='col-sm-6 inputField'>
                    <label>Confirm Password</label>
                    <input ref="confirm" type="password"></input>
                </div>
            </div>
            <button className="btn white" onClick={this.validateAndSubmit}>Submit</button>
        </div>
      );
    }
}
export default Signup;
