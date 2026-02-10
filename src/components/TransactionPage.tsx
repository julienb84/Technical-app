import Input from "./ui/Input";

import { useState } from "react";

// icons //

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
    <div className="min-h-[calc(100dvh-56px)] flex flex-col items-center gap-5 pt-10">
      <div className="font-bold">
        <h1 className="text-xl text-brand-800">
          Lydia <span className="text-brand-500">paiement history</span>
        </h1>
      </div>
      <div className="sticky w-80">
        <Input
          type="text"
          placeholder="Search payment..."
          name="search"
          value={search}
          onChange={handleSearch}
          className="bg-brand-100 pl-10"
        />
      </div>
    </div>
  );
};

export default TransactionsPage;
