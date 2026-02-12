// UI //
import { FaChevronRight } from "react-icons/fa";
import Badge from "./ui/Badge";

// TYPES //
import type { Transaction } from "../types/transaction";

interface Props {
  data: Record<string, Transaction[]>;
}

const TransactionsDetails = ({ data }: Props) => {
  const results = Object.keys(data).length;

  return (
    <div className="flex flex-col mt-5">
      {results === 0 && (
        <div className="flex justify-center text-xl text-brand-800/60 font-bold italic tracking-wider">
          <p>No payment found...</p>
        </div>
      )}
      {Object.entries(data).map(([dateDay, transactions]) => {
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
            <p className="text-brand-800 mb-2.5">{formattedDate}</p>
            <section className="rounded-xl flex flex-col gap-4 pt-4 pb-4 bg-brand-500/85 pl-2.5 pr-2.5">
              {transactions.map((transaction) => {
                return (
                  <details
                    key={transaction.paymentId}
                    className="group max-w-full bg-white border border-transparent open:border-brand-800/50 open:bg-white open:shadow-md open:duration-500 p-2.5 rounded-xl not-open:hover:shadow-lg/20"
                  >
                    <summary className="text-brand-800 text-[17px] flex items-center">
                      <FaChevronRight className="group-open:rotate-90 transition duration-100" />
                      <div className="w-full flex justify-between">
                        <span className="ml-1 line-clamp-1 max-w-48">
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
