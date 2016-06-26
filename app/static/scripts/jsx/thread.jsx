import ThreadMessage from './thread-message.jsx';

class Thread extends React.Component {
  render() {
    return (
        <div className="thread">
            <div className="messages">
                {this.props.allMessages.map(function(message){
                    return <ThreadMessage message={message} />;
                })}
            </div>
        </div>
    );
  }
}
export default Thread;
