export interface IFormattedUtility {
  date: string;
  amount: string;
  status: 'paid' | 'pending';
  contract: string;
}