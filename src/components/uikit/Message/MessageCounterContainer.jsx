import { useState } from "react";
import { MessageCounter } from "./MessageCounter";

function MessageCounterContainer() {
  const [messageCount, setMessageCount] = useState(0);
  const [messageAlert, setMessageAlert] = useState("");

  const handleIncrement = () => {
    setMessageCount(messageCount + 1);
    setMessageAlert("You have new message");
  };

  const handleDecrement = () => {
    setMessageCount(messageCount - 1);
    setMessageAlert("You don't have new message");
  };

  return (
    <MessageCounter
      onPressDecrement={handleDecrement}
      onPressIncement={handleIncrement}
      labelCount={messageCount}
      labelMessage={messageAlert}
    />
  );
}

export { MessageCounterContainer };
