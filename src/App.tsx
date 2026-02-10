import Header from "./components/Header";
import TransactionsPage from "./components/TransactionPage";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <TransactionsPage />
    </>
  );
}

export default App;
