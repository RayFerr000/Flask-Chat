class ThreadMessage extends React.Component {
  render() {
    return (
        <div className="message">
            {this.props.message}
        </div>
    );
  }
}
export default ThreadMessage;
