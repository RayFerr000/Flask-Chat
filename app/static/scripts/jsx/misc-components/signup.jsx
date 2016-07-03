class Signup extends React.Component {
    render() {
      if (this.props.isHidden) return(<div></div>);
      return (
        <div className="signup">
            <div className='row'>
                <div className='col-sm-6 inputField'>
                    <label>Email</label>
                    <input></input>
                </div>
                <div className='col-sm-6 inputField'>
                    <label>Username</label>
                    <input></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6 inputField'>
                    <label>Password</label>
                    <input></input>
                </div>
                <div className='col-sm-6 inputField'>
                    <label>Confirm Password</label>
                    <input></input>
                </div>
            </div>
            <button className="btn white" >Submit</button>
        </div>
      );
    }
}
export default Signup;
