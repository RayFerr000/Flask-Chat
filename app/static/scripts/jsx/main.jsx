

class Header extends React.Component {
  render() {
    return <div className="header"></div>;
  }
}

class Thread extends React.Component {
  render() {
    return <div className="thread"></div>;
  }
}

class InputBox extends React.Component {
  render() {
    return (
        <div className="inputBox">
            <input className="input" placeholder="Type your message here"/>
        </div>
    );
  }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="row">
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-8">
                        <Thread/>
                        <InputBox/>
                    </div>
                    <div className="col-sm-2">

                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('main')
);
