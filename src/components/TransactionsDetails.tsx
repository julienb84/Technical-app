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
    <div className="flex flex-col mt-5 largephone:mt-10">
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
            <div className="pl-3 largephone:pl-8 sm:pl-10">
              <p className="text-brand-800 mb-2.5">{formattedDate}</p>
            </div>
            <section className="rounded-xl flex flex-col gap-4 pt-6 pb-6 bg-brand-500/85 pl-2.5 pr-2.5 largephone:pl-8 largephone:pr-8 sm:pl-10 sm:pr-10 sm:gap-6">
              {transactions.map((transaction) => {
                return (
                  <details
                    key={transaction.paymentId}
                    className="group max-w-full bg-white border border-transparent open:border-brand-800/70 open:bg-white open:shadow-xl/20 open:duration-500 pt-2.5 pb-2.5 pl-2 pr-2 rounded-xl not-open:hover:shadow-lg/20 sm:p-5"
                  >
                    <summary className="text-brand-800 text-[18px] flex items-center">
                      <FaChevronRight className="group-open:rotate-90 transition duration-100" />
                      <div className="w-full flex justify-between">
                        <span className="ml-1 line-clamp-1 max-w-48 sm:max-w-80">
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
