/* eslint-disable react/prop-types */
import "./Button.css";

// cara 2 destructuring
function Button({ label, variant = "primary", onClick }) {
  return (
    <button onClick={onClick} className={`btn ${variant}`}>
      {label}
    </button>
  );
}

export { Button };
