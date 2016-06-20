import Header from './header.jsx';
import Thread from './thread.jsx';
import InputBox from './input-box.jsx';

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
