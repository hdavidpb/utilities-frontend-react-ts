export interface IFormattedUtility {
  date: string;
  amount: string;
  status: "paid" | "pending";
  contract: string;
}

export interface IGasesUtility {
  date: string;
  total: string;
  status: string;
  contract: string;
}
