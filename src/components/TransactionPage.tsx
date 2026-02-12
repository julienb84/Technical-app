// UI //
import Input from "./ui/Input";
import { FiSearch } from "react-icons/fi";

// PROJECT COMPONENTS & HOOKS //
import TransactionsDetails from "./TransactionsDetails";
import useDebounce from "../hooks/useDebounce";

// REACT COMPONENTS & HOOKS //
import { useState, useMemo } from "react";

// DATA //
import transactionsTab from "../data/transactions.json";

// TYPES //
import type { Transaction } from "../types/transaction";

// UTILS //
import normalizeString from "../utils/normalizeString";
import toMilliseconde from "../utils/toMilliseconde";

const TransactionsPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(0);

  const transactionsData = transactionsTab as Transaction[];
  const debouncedSearch = useDebounce(search, 600);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    setSearch(value);
  };

  // Transactions filtrées et classées par date
  const filteredTransactionsData = useMemo(() => {
    // Filtre par label (case-insensitive & accented characters insensitive)
    const normalizedSearch = normalizeString(debouncedSearch.trim());
    const filteredData = normalizedSearch
      ? transactionsData.filter((transaction) =>
          normalizeString(transaction.label).includes(normalizedSearch),
        )
      : transactionsData;

    setResults(filteredData.length);

    // Tri par date du plus récent au plus ancien
    const sortedData = [...filteredData].sort((a, b) => b.date - a.date);

    // Regroupement par JOUR
    return sortedData.reduce<Record<string, Transaction[]>>(
      (acc, transaction) => {
        const date = new Date(toMilliseconde(transaction.date));

        // Date par jour (heure locale) pour regrouper toutes les transactions du même jour
        const dateDay = date.toLocaleDateString("fr-CA");

        if (!acc[dateDay]) {
          acc[dateDay] = [];
        }

        acc[dateDay].push(transaction);
        return acc;
      },
      {},
    );
  }, [transactionsData, debouncedSearch]);

  return (
    <div className="min-h-[calc(100dvh-56px)] flex flex-col relative items-center gap-5 pt-10">
      <div className="font-bold">
        <h1 className="text-xl text-brand-800 largephone:text-2xl">
          Lydia{" "}
          <span className="text-brand-500 tracking-wide">payment history</span>
        </h1>
      </div>
      <section className="sticky w-80 top-0 largephone:w-md sm:w-140">
        <div className="relative">
          <FiSearch className="absolute top-2.5 left-2.5 text-brand-800" />
          <Input
            type="text"
            placeholder="Search payment..."
            name="search"
            value={search}
            onChange={handleSearch}
            className="bg-brand-100 pl-8.5 text-brand-800"
          />
        </div>
        {results > 0 && search.length > 0 ? (
          <div className="absolute top-2 right-1 text-[14px] text-brand-800/50 font-semibold tracking-tight">
            {results === 1 ? (
              <p>{`${results} result`}</p>
            ) : (
              <p>{`${results} results`}</p>
            )}
          </div>
        ) : (
          <></>
        )}
      </section>
      <section className="w-dvw">
        <TransactionsDetails data={filteredTransactionsData} />
      </section>
    </div>
  );
};

export default TransactionsPage;
