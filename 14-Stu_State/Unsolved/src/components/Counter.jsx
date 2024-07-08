import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// export default is used to export a single class, function or primitive from a script file.
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // useState is a Hook that lets you add React state to function components. It accepts an argument which is the initial state and returns an array of two items. The first item is the current state value and the second is a function that lets you update it.
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // This function is called when the increment button is clicked. It increments the count by 1.
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // This function is called when the decrement button is clicked. It decrements the count by 1.
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* The props count, handleIncrement and handleDecrement are getting passed to CardBody */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
