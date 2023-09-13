import "./button-std.css";

export default function ButtonStd({ children, handleClick, options }) {
  const classOptions = options
    ? options.map((option) => option.concat("-button-std")).join(" ")
    : "";

  return (
    <button className={`button-std ${classOptions}`} onClick={handleClick}>
      {children}
    </button>
  );
}
