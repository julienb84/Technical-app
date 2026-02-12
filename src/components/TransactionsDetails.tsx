// UI //
import { FaChevronRight } from "react-icons/fa";
import Badge from "./ui/Badge";

// TYPES //
import type { Transaction } from "../types/transaction";

// REACT COMPONENTS & HOOKS //
import { useMemo } from "react";

// UTILS //
import toMilliseconde from "../utils/toMilliseconde";

interface TransactionsDetailsProps {
  data: Transaction[];
  search: string;
}

const TransactionsDetails = ({ data, search }: TransactionsDetailsProps) => {
  const groupedByDate = useMemo(() => {
    // Filtre par label (case-insensitive)
    const normalizeString = (value: string) => {
      const normValue = value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return normValue;
    };
    const normalizedSearch = normalizeString(search.trim());
    const filteredData = normalizedSearch
      ? data.filter((transaction) =>
          transaction.label.toLowerCase().includes(normalizedSearch),
        )
      : data;

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
  }, [data, search]);

  return (
    <div className="flex flex-col mt-10">
      {Object.entries(groupedByDate).map(([dateDay, transactions]) => {
        const formattedDate = new Date(dateDay).toLocaleDateString("en-EN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        const formattedFullDate = new Date(dateDay).toLocaleDateString(
          "fr-FR",
          {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          },
        );
        return (
          <div key={dateDay} className="mb-6">
            {" "}
            <p className="text-brand-800">{formattedDate}</p>
            <section className="rounded-s flex flex-col gap-4 pt-3">
              {transactions.map((transaction) => {
                return (
                  <details
                    key={transaction.paymentId}
                    className="group max-w-full bg-brand-200/40 border border-transparent open:border-brand-800/50 open:bg-white open:shadow-md open:duration-500 p-2.5 rounded-xl not-open:hover:shadow-lg/20"
                  >
                    <summary className="text-brand-800 text-[18px] flex items-center">
                      <FaChevronRight className="group-open:rotate-90 transition duration-100" />
                      <div className="w-full flex justify-between">
                        <span className="ml-1 line-clamp-1 w-48">
                          {transaction.label}
                        </span>
                        <span>{transaction.amount}</span>
                      </div>
                    </summary>
                    <div className="pl-1.5 mt-2.5 flex flex-col gap-6">
                      <section className="text-brand-800/60 *:font-semibold">
                        <p>SENDER</p>
                        <div className="text-brand-500/70 flex flex-col mt-1.5">
                          <p>
                            Name :{" "}
                            <span className="text-brand-500">{`${transaction.firstname} ${transaction.lastname}`}</span>
                          </p>
                          <p>
                            ID :{" "}
                            <span className="text-brand-500">
                              {transaction.memberId}
                            </span>
                          </p>
                        </div>
                      </section>
                      <section className="text-brand-800/60 *:font-semibold">
                        <p>RECEIVER</p>
                        <div className="text-brand-500/70 flex flex-col mt-1.5">
                          <p>
                            Name :{" "}
                            <span className="text-brand-500">
                              {transaction.receiverLastname
                                ? `${transaction.receiverFirstname} ${transaction.receiverLastname}`
                                : `${transaction.receiverFirstname}`}
                            </span>
                          </p>
                        </div>
                      </section>
                      <section className="text-brand-800/60 *:font-semibold">
                        <p>PAYMENT</p>
                        <div className="text-brand-500/70 flex flex-col mt-1.5">
                          <p className="text-brand-800/60">
                            {transaction.label}
                          </p>
                          <p>
                            Type :{" "}
                            <span className="text-brand-500">
                              {transaction.transactionType.split("_").join(" ")}
                            </span>
                          </p>
                          <p>
                            ID :{" "}
                            <span className="text-brand-500">
                              {transaction.paymentId}
                            </span>
                          </p>
                          <p>
                            Date :{" "}
                            <span className="text-brand-500">
                              {formattedFullDate}
                            </span>
                          </p>
                        </div>
                      </section>
                      <Badge
                        variant={transaction.status}
                        status={transaction.status}
                      />
                      {transaction.statusErrorDisplay && (
                        <p className="text-brand-800 font-bold">
                          {transaction.statusErrorDisplay}
                        </p>
                      )}
                    </div>
                  </details>
                );
              })}
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionsDetails;
