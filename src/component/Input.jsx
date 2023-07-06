import "./Input.css";
function Input(props) {
  return (
    <input
      type={props.type}
      onChange={props.onChange}
      className="input"
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
