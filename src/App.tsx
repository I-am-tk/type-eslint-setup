import { useState, useEffect } from 'react';

function getValue(a: number) {
  return a;
}

function App() {
  const [a] = useState(0);
  useEffect(() => {
    getValue(a);
  }, []);

  return <div>This is App</div>;
}

export default App;
