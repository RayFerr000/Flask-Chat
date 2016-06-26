import Signup from './misc-components/signup.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayForm: false };
    }

    displayForm = () =>{
        this.setState({displayForm: true});
    }

    render() {
        console.log(this.state.displayForm);
        return (
            <div className={(this.state.displayForm)? 'header-extended' : 'header'}>
              <button className="btn btn-default right-margin" onClick={this.displayForm}>Sign Up</button>
              {/*<Signup/>*/}
              <button className="btn btn-default">Login</button>
            </div>
         );
    }
}
export default Header;
