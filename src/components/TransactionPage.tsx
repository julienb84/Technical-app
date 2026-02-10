import Input from "./ui/Input";

import { useState } from "react";

// icons //
import { FiSearch } from "react-icons/fi";

//   type,
//   placeholder,
//   name,
//   value,
//   onChange,
//   className,

const TransactionsPage = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    setSearch(value);
  };

  return (
    <div className="min-h-[calc(100dvh-56px)] flex flex-col relative items-center gap-5 pt-10 ">
      <div className="font-bold">
        <h1 className="text-xl text-brand-800">
          Lydia <span className="text-brand-500">paiement history</span>
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
      <section className="min-h-300 bg-brand-500"></section>
    </div>
  );
};

export default TransactionsPage;
