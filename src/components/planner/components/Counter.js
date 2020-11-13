import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click to update count: {count}</button>
      <Dumb count={count} />
      <Dumb count={count} />
    </>
  );
}

function Dumb(props) {
  return <h2>{props.count}</h2>;
}
