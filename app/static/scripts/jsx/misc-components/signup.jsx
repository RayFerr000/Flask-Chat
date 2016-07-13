import Input from './input.jsx';
class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    submitSignup = () => {
        if (this.refs.password.getInputValue() !== this.refs.password_confirm.getInputValue()) {
            this.refs.password_confirm.enableError();
        }
        if (this.refs.email.isValidInput() && this.refs.username.isValidInput()) {
            console.log("CAN SUBMIT THIS");
        }
    }
    render() {
      return (
        <div className={(this.props.isHidden) ? 'hide' : 'signup' }>
            <div className='row'>
                <div className='col-sm-6'>
                    <Input ref="email" name="email" label={'Email'} />
                </div>
                <div className='col-sm-6' >
                    <Input ref="username" name="username" label="Username" minLength={5}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <Input ref="password" name="password" label="Password" minLength={5}/>
                </div>
                <div className='col-sm-6 inputField'>
                    <Input ref="password_confirm" name="password" label="Confirm Password" minLength={5}/>
                </div>
            </div>
            <button className="btn white" onClick={this.submitSignup}>Submit</button>
        </div>
      );
    }
}
export default Signup;
