import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div className="h-screen flex items-center justify-center bg-blue-500">
        <h1 className="text-4xl font-bold text-white"> </h1>
      </div>
    </>
  );
}


