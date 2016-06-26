import Form from './form.jsx';
class Signup extends React.Component {
    render() {
      const FORM_INPUT_LABELS = ['Email','Username','Password','Confirm Password'];
      return (
        <div className="signup">
            <Form labels={FORM_INPUT_LABELS} />
        </div>
      );
    }
}
export default Signup;
