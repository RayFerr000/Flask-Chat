 class Input extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = this.props.label;
        this.state = {
            error: false,
            value: ''
        };
    }
    // Check if the input can be a valid email
    vaildateEmail = () => {
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(this.state.value)) {
            this.enableError();
            return false;
        }
        return true;
    }
    isValidLength = () => {
        if (this.state.value.length < this.props.minLength) {
            this.enableError();
            return false;
        }
        return true;
    }
    validateInput = () => {
        if (this.props.name === 'email') {
            return this.vaildateEmail()
        }
        if (this.props.minLength) {
            return this.isValidLength();
        }
    }
    isValidInput = () => {
        return !this.state.error;
    }
    onInputFocus = (e) => {
        if (this.state.error) this.setState({error: false});
    }

    getInputValue = () => {
        return this.state.value;
    }

    enableError = () => {
        this.setState({error:true});
    }
    // only update to display a validation error
    shouldComponentUpdate = (nextProps, nextState) => {
        return (nextState.error !== this.state.error);
    }
    render() {
      return (
        <div className="inputField">
            <label>{this.props.label}</label>
            <input
                className={this.state.error ? 'red' : ''}
                type={this.props.name}
                name={this.props.name}
                onFocus={this.onInputFocus}
                onBlur={this.validateInput}
                onChange={(e) => this.setState({value: e.target.value})}>
            </input>
        </div>
      );
    }
}
export default Input;
