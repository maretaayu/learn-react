import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 5) {
      navigate("/profile");
    }
  }, [count, navigate]);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

export { Counter };
