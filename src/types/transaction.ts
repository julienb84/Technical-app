export type Transaction = {
  paymentId: string;
  receiverFirstname: string;
  receiverLastname?: string;
  transactionType: string;
  memberId: number;
  label: string;
  firstname: string;
  lastname: string;
  amount: string;
  date: number;
  statusErrorDisplay?: string;
  status: "completed" | "canceled" | "pending";
};
