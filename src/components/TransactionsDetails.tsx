// UI //
import { FaChevronRight } from "react-icons/fa";
import Badge from "./ui/Badge";

// TYPES //
import type { Transaction } from "../types/transaction";

interface TransactionsDetailsProps {
  data: Transaction[];
  search: string;
}

const TransactionsDetails = ({ data, search }: TransactionsDetailsProps) => {
  return (
    <div className="flex flex-col mt-10">
      <p className="text-brand-800">10 février</p>

      <section className="rounded-s flex flex-col gap-4 pt-3">
        {data.map((element) => {
          return (
            <details
              key={element.paymentId}
              className="group max-w-full bg-brand-200/40 border border-transparent open:border-brand-800/50 open:bg-white open:shadow-md open:duration-500 p-2.5 rounded-xl not-open:hover:shadow-lg/20"
            >
              <summary className="text-brand-800 text-s flex items-center">
                <FaChevronRight className="group-open:rotate-90 transition duration-100" />
                <div className="w-full flex justify-between">
                  <span className="ml-1 line-clamp-1 w-44">
                    {element.label}
                  </span>
                  <span>{element.amount}</span>
                </div>
              </summary>
              <div className="pl-1.5 mt-2.5 flex flex-col gap-6">
                <section className="text-brand-800/60 *:font-semibold">
                  <p>SENDER</p>
                  <div className="text-brand-500/70 flex flex-col mt-1.5">
                    <p>
                      Name :{" "}
                      <span className="text-brand-500">{`${element.firstname} ${element.lastname}`}</span>
                    </p>
                    <p>
                      ID :{" "}
                      <span className="text-brand-500">{element.memberId}</span>
                    </p>
                  </div>
                </section>
                <section className="text-brand-800/60 *:font-semibold">
                  <p>RECEIVER</p>
                  <div className="text-brand-500/70 flex flex-col mt-1.5">
                    <p>
                      Name :{" "}
                      <span className="text-brand-500">
                        {element.receiverLastname
                          ? `${element.receiverFirstname} ${element.receiverLastname}`
                          : `${element.receiverFirstname}`}
                      </span>
                    </p>
                  </div>
                </section>
                <section className="text-brand-800/60 *:font-semibold">
                  <p>PAYMENT</p>
                  <div className="text-brand-500/70 flex flex-col mt-1.5">
                    <p className="text-brand-800/60">{element.label}</p>
                    <p>
                      Type :{" "}
                      <span className="text-brand-500">
                        {element.transactionType.split("_").join(" ")}
                      </span>
                    </p>
                    <p>
                      ID :{" "}
                      <span className="text-brand-500">
                        {element.paymentId}
                      </span>
                    </p>
                  </div>
                </section>
                <Badge variant={element.status} status={element.status} />
                {element.statusErrorDisplay && (
                  <p className="text-brand-800 font-bold">
                    {element.statusErrorDisplay}
                  </p>
                )}
              </div>
            </details>
          );
        })}
      </section>
    </div>
  );
};

export default TransactionsDetails;
