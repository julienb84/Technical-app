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
          <div
            key={dateDay}
            className="mb-6 sm:pl-10 sm:pr-10 md:pl-14 md:pr-14 xl:pl-24 xl:pr-24 2xl:pl-52 2xl:pr-52"
          >
            {" "}
            <div className="pl-3 mb-2.5 largephone:pl-8 largephone:mb-3 sm:pl-4 sm:mb-4 md:mb-7 md:pl-6 lg:wrapper1 lg:mb-7 xl:pl-0">
              <p className="text-brand-800 sm:text-[18px] md:text-xl lg:text-[22px]">
                {formattedDate}
              </p>
            </div>
            <section className="rounded-xl bg-linear-to-t from-brand-800 to-brand-500 mb-6 md:mb-14">
              <div className="rounded-xl flex flex-col gap-4 pt-6 pb-6  pl-2.5 pr-2.5 largephone:pl-8 largephone:pr-8 sm:pl-4 sm:pr-4 sm:pt-12 sm:pb-12 sm:gap-6 md:gap-8 md:pl-6 md:pr-6 lg:wrapper1 lg:gap-12 xl:pl-0 xl:pr-0">
                {transactions.map((transaction) => {
                  return (
                    <details
                      key={transaction.paymentId}
                      className="group max-w-full bg-white border border-transparent open:border-brand-800/70 open:bg-white open:drop-shadow-xl/25 pt-2.5 pb-2.5 pl-2 pr-2 rounded-xl not-open:hover:drop-shadow-xl/25 transition-all duration-500  sm:p-5 md:pt-7 md:pb-7 lg:pt-10 lg:pb-10"
                    >
                      <summary className="text-brand-800 text-[17px] flex items-center hover:cursor-pointer hover:font-semibold hover:text-brand-800/80 duration-500 largephone:text-[18px] md:text-[22px] lg:text-2xl">
                        <FaChevronRight className="group-open:rotate-90 transition duration-100" />
                        <div className="w-full flex justify-between">
                          <span className="ml-1 line-clamp-1 max-w-48 sm:max-w-80 md:max-w-84 lg:max-w-105">
                            {transaction.label}
                          </span>
                          <span>{transaction.amount}</span>
                        </div>
                      </summary>
                      <div className="pl-1.5 mt-2.5 flex flex-col gap-6 md:gap-7 md:mt-5 md:text-[18px] lg:text-xl">
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
                                {transaction.transactionType
                                  .split("_")
                                  .join(" ")}
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
                        <Badge status={transaction.status} />
                        {transaction.statusErrorDisplay && (
                          <p className="text-brand-800 font-bold">
                            {transaction.statusErrorDisplay}
                          </p>
                        )}
                      </div>
                    </details>
                  );
                })}
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionsDetails;
