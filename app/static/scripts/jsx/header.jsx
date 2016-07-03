import Signup from './misc-components/signup.jsx';
import Login from './misc-components/login.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            extendHeader: false,
            displaySignupForm: false,
            displayLoginForm: false
        };
    }

    displayForm = (formToDisplay, formToHide) => {
        const obj = {};
        if (this.state[formToHide] === true) {
            obj[formToHide] = false;
            obj[formToDisplay]= true;
            obj.extendHeader = true;
        } else if (this.state[formToDisplay] === true) {
            obj.extendHeader = !this.state.extendHeader;
        } else {
            obj[formToDisplay] = true;
            obj.extendHeader = true;
        }
        this.setState(obj);
    }

    render() {
        let headerClass = 'header';
        if (this.state.extendHeader && this.state.displaySignupForm) {
            headerClass = 'header-extended-large';
        } else if (this.state.extendHeader && this.state.displayLoginForm) {
            headerClass = 'header-extended-medium';
        }
        return (
            <div className={headerClass}>
                <button className="btn white right-margin" onClick={this.displayForm.bind(this, 'displaySignupForm','displayLoginForm')}>Sign Up</button>
                <button className="btn  white" onClick={this.displayForm.bind(this, 'displayLoginForm','displaySignupForm')}>Login</button>
                <Login  isHidden={!this.state.displayLoginForm}/>
                <Signup isHidden={!this.state.displaySignupForm}/>
            </div>
         );
    }
}
export default Header;
