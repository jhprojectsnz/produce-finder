import "./button-std.css";

export default function ButtonStd({
  children,
  appearance,
  handleClick,
  options,
}) {
  const classOptions = options
    ? options.map((option) => option.concat("-button-std")).join(" ")
    : "";

  return (
    <button
      className={`button-std ${appearance}-button-std ${classOptions}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
