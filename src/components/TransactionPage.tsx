// UI //
import Input from "./ui/Input";
import { FiSearch } from "react-icons/fi";

// COMPONENTS //
import TransactionsDetails from "./TransactionsDetails";

import { useState } from "react";

// DATA //
import transactionsTab from "../data/transactions.json";

// TYPES //
import type { Transaction } from "../types/transaction";

const TransactionsPage = () => {
  const [search, setSearch] = useState("");

  const typedTransactions = transactionsTab as Transaction[];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    setSearch(value);
  };

  return (
    <div className="min-h-[calc(100dvh-56px)] flex flex-col relative items-center gap-5 pt-10">
      <div className="font-bold">
        <h1 className="text-xl text-brand-800">
          Lydia <span className="text-brand-500">payment history</span>
        </h1>
      </div>
      <section className="sticky w-80 top-0">
        <div className="relative">
          <FiSearch className="absolute top-2 left-2.5" />
          <Input
            type="text"
            placeholder="Search payment..."
            name="search"
            value={search}
            onChange={handleSearch}
            className="bg-brand-100 pl-8.5"
          />
        </div>
      </section>
      <section className="w-dvw pl-3 pr-3">
        <TransactionsDetails data={typedTransactions} search={search} />
      </section>
    </div>
  );
};

export default TransactionsPage;
