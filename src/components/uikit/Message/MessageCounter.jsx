/* eslint-disable react/prop-types */

function MessageCounter({
  labelCount,
  labelMessage,
  onPressIncement,
  onPressDecrement,
}) {
  return (
    <>
      <button onClick={onPressIncement}>+</button>
      <p>{labelCount}</p>
      <p>{labelMessage}</p>
      <button onClick={onPressDecrement}>-</button>
    </>
  );
}

export { MessageCounter };
