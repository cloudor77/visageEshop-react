import classes from "./ErrorWarnings.module.css";

const ErrorWarnings = (props) => {
  return <div className={classes.warning}>{props.children}</div>;
};

export default ErrorWarnings;
