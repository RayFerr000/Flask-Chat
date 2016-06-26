/*A Generic form that is passed the name of it's input fields through props*/
class Form extends React.Component {
  render() {
    console.log(this.props.labels);
    return (
      <div className="form">
      </div>
    );
  }
}
export default Form;
