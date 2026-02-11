import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const TransactionsDetails = () => {
  return (
    <div className="flex flex-col mt-10">
      <p className="text-brand-800">10 février</p>
      <section className="bg-brand-100/50 rounded-s flex flex-col gap-2.5 pt-2">
        <details className="group max-w-full border border-transparent open:border-brand-800/50 open:bg-white open:shadow-md open:duration-500 p-2.5 rounded-xl not-open:hover:shadow-lg/20">
          <summary className="text-brand-800 text-s flex items-center">
            <FaChevronRight className="group-open:rotate-90 transition duration-100" />
            <div className="w-full flex justify-between">
              <span className="ml-1 line-clamp-1 w-36">
                Pathé Boulogne-Billancourt passage
              </span>
              <span>15,50 €</span>
            </div>
          </summary>
          <div className="pl-1.5 mt-2.5 flex flex-col gap-6">
            <section className="text-brand-800/60 *:font-semibold">
              <p>SENDER</p>
              <div className="text-brand-500/70 flex flex-col mt-1.5">
                <p>
                  Name : <span className="text-brand-500">Thomas Martin</span>
                </p>
                <p>
                  ID : <span className="text-brand-500">544072</span>
                </p>
              </div>
            </section>
            <section className="text-brand-800/60 *:font-semibold">
              <p>RECEIVER</p>
              <div className="text-brand-500/70 flex flex-col mt-1.5">
                <p>
                  Name : <span className="text-brand-500">Damien Laurent</span>
                </p>
              </div>
            </section>
            <section className="text-brand-800/60 *:font-semibold">
              <p>PAYMENT</p>
              <div className="text-brand-500/70 flex flex-col mt-1.5">
                <p className="text-brand-800/60">
                  Pathé Boulogne-Billancourt passage
                </p>
                <p>
                  Type :{" "}
                  <span className="text-brand-500">Lydia Transaction</span>
                </p>
                <p>
                  ID :{" "}
                  <span className="text-brand-500">
                    c0e6b320-9429-45f1-9e61-2a9746cfc87c
                  </span>
                </p>
              </div>
            </section>
            <div className="bg-completed-500/70 w-32 h-8 border border-completed-600 text-white font-medium rounded-2xl flex justify-center items-center">
              <span>Completed</span>
            </div>
          </div>
        </details>

        <details className="group max-w-full border border-transparent open:border-brand-800/50 open:bg-white open:shadow-md open:duration-700 p-2.5 rounded-xl not-open:hover:shadow-lg/20">
          <summary className="text-brand-800 text-s flex items-center">
            <FaChevronRight className="group-open:rotate-90 transition duration-200" />
            <span className="ml-1 line-clamp-1 w-36">Cheveux courts</span>
          </summary>
          <div className="pl-6.5 mt-2.5">
            <ul className="text-white list-disc! *:font-semibold">
              <li className="relative">Insurance is provided</li>
              <li className="relative">Lunch is provide</li>
            </ul>
          </div>
        </details>
      </section>
    </div>
  );
};

export default TransactionsDetails;
