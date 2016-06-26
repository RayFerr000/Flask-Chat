import Header from './header.jsx';
import Thread from './thread.jsx';
import InputBox from './input-box.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allMessages :
                [
                    <p>THIS IS AN EXAMPLE OF A MESSAGE</p>,
                    <p>right now they are static</p>,
                    <p>BUT ONCE THE MESSAGE MODEL IS CONNECTED TO A ROUTE</p>,
                    <p>These will be be in the HTTP resonse of the server</p>,
                    <p>WHEN I GO TO THE URL /messages</p>,
                    <p>THIS IS AN EXAMPLE OF A MESSAGE</p>,
                    <p>right now they are static</p>,
                    <p>BUT ONCE THE MESSAGE MODEL IS CONNECTED TO A ROUTE</p>,
                    <p>These will be be in the HTTP resonse of the server</p>,
                    <p>WHEN I GO TO THE URL /messages</p>,
                    <p>THIS IS AN EXAMPLE OF A MESSAGE</p>,
                    <p>right now they are static</p>,
                    <p>BUT ONCE THE MESSAGE MODEL IS CONNECTED TO A ROUTE</p>,
                    <p>These will be be in the HTTP resonse of the server</p>,
                    <p>WHEN I GO TO THE URL /messages</p>,
                    <p>THIS IS AN EXAMPLE OF A MESSAGE</p>,
                    <p>right now they are static</p>,
                    <p>BUT ONCE THE MESSAGE MODEL IS CONNECTED TO A ROUTE</p>,
                    <p>These will be be in the HTTP resonse of the server</p>,
                    <p>WHEN I GO TO THE URL /messages</p>,
                    <p>THIS IS AN EXAMPLE OF A MESSAGE</p>,
                    <p>right now they are static</p>,
                    <p>BUT ONCE THE MESSAGE MODEL IS CONNECTED TO A ROUTE</p>,
                    <p>These will be be in the HTTP resonse of the server</p>,
                    <p>WHEN I GO TO THE URL /messages</p>,
                ]
        };
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="row">
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-8">
                        <Thread allMessages={this.state.allMessages}/>
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
