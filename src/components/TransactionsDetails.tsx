import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const TransactionsDetails = () => {
  return (
    <div className="flex flex-col mt-10">
      <p className="text-brand-800">10 février</p>
      <section className="bg-brand-100/50 rounded-s flex flex-col gap-2.5 pt-2">
        <details className="group max-w-full border border-transparent open:border-brand-800/50 open:bg-white open:shadow-md open:duration-700 p-2.5 rounded-xl not-open:hover:shadow-lg/20">
          <summary className="text-brand-800 text-s flex items-center">
            <FaChevronRight className="group-open:rotate-90 transition duration-200" />
            <div className="w-full flex justify-between">
              <span className="ml-1 line-clamp-1 w-36">
                Pathé Boulogne-Billancourt passage
              </span>
              <span>15,50 €</span>
            </div>
          </summary>
          <div className="pl-6.5 mt-2.5">
            <ul className="text-white list-disc! *:font-semibold">
              <li className="relative">Insurance is provided</li>
              <li className="relative">Lunch is provide</li>
            </ul>
          </div>
        </details>
        <details className="group max-w-full border border-transparent open:border-brand-800/50 open:bg-white open:shadow-md p-2.5 rounded-xl not-open:hover:shadow-lg/20">
          <summary className="text-brand-800 text-s flex items-center">
            <FaChevronRight className="group-open:hidden" />
            <FaChevronDown className="hidden group-open:block" />
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
