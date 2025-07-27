import type { SideMenuLinks } from "../types/constant";

export const SIDE_MENU_LINKS: SideMenuLinks[] = [
  {
    links: [
      {
        icon: "/icons/dashboard.svg",
        title: "Dashboard",
      },
    ],
  },
  {
    header: "CUSTOMERS",
    links: [
      {
        icon: "/icons/users.svg",
        title: "Users",
        url: "/users",
      },
      {
        icon: "/icons/guarantors.svg",
        title: "Guarantors",
      },
      {
        icon: "/icons/loans.svg",
        title: "Loans",
      },
      {
        icon: "/icons/dm.svg",
        title: "Decision Models",
      },
      {
        icon: "/icons/savings.svg",
        title: "Savings",
      },
      {
        icon: "/icons/lr.svg",
        title: "Loan Requests",
      },
      {
        icon: "/icons/whitelist.svg",
        title: "Whitelist",
      },
      {
        icon: "/icons/karma.svg",
        title: "Karma",
      },
    ],
  },
  {
    header: "BUSINESS",
    links: [
      {
        icon: "/icons/org.svg",
        title: "Organization",
      },
      {
        icon: "/icons/lp.svg",
        title: "Loan Products",
      },
      {
        icon: "/icons/sp.svg",
        title: "Savings Products",
      },
      {
        icon: "/icons/fac.svg",
        title: "Fees and Charges",
      },
      {
        icon: "/icons/transactions.svg",
        title: "Transactions",
      },
      {
        icon: "/icons/services.svg",
        title: "Services",
      },
      {
        icon: "/icons/sa.svg",
        title: "Service Accounts",
      },
      {
        icon: "/icons/settlements.svg",
        title: "Settlements",
      },
      {
        icon: "/icons/reports.svg",
        title: "Reports",
      },
    ],
  },
  {
    header: "SETTINGS",
    links: [
      {
        icon: "/icons/preferences.svg",
        title: "Preferences",
      },
      {
        icon: "/icons/fees.svg",
        title: "Fees and Pricing",
      },
      {
        icon: "/icons/audit.svg",
        title: "Audit Logs",
      },
    ],
  },
];
