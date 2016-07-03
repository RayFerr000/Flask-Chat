class Login extends React.Component {
    render() {
      if (this.props.isHidden) return(<div></div>);
      return (
        <div className="login">
            <div className='row'>
                <div className='col-sm-6 inputField'>
                    <label>Email or Username</label>
                    <input></input>
                </div>
                <div className='col-sm-6 inputField'>
                    <label>Password</label>
                    <input></input>
                </div>
            </div>
            <button className="btn white">Submit</button>
        </div>
      );
    }
}
export default Login;
