import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type Folder = {
  id: string;
  name: string;
  subfolders: Folder[];
  parentId: string | null;
};

function App() {
  const [count, setCount] = useState<number>(0);

  // folder structure test
  const rootFolder: Folder = {
    id: "1",
    name: "Cognitive Science",
    subfolders: [],
    parentId: null,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Button onClick={() => setCount((count) => count + 1)}>
        amount of times: {count}
      </Button>
      <h1 className="text-4xl font-bold text-gray-800 mb-6 absolute top-8 left-1/2 transform -translate-x-1/2">
        leo says something gay counter
      </h1>
    </div>
  );
}

export default App;


