import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CounterComponent() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count > 5) {
      navigate("/profile");
    }
  }, [count, navigate]);

  return (
    <div className="flex">
      <button onClick={handleDecrement}>-</button>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export { CounterComponent };
