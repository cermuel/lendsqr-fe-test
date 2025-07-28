export interface User {
  id: string;
  organization: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: number;
  dateJoined: string;
  status: string;
  gender: string;
  minIncome: number;
  maxIncome: number;
  employmentStatus: string;
  employmentDuration: number;
  loanRepayment: number;
  guarantor: Guarantor;
}

interface Guarantor {
  name: string;
  email: string;
  relationship: string;
}
