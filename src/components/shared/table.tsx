import type { ReactNode } from "react";
import "../../styles/components/table.scss";

type TableProps = {
  children: ReactNode;
};

type TableColumnProps = {
  children: ReactNode;
  isHeader?: boolean;
  className?: string;
};

export const Table: React.FC<TableProps> = ({ children }) => (
  <div className="table-wrapper">
    <table>{children}</table>
  </div>
);

export const TableHead: React.FC<TableProps> = ({ children }) => (
  <thead>{children}</thead>
);

export const TableBody: React.FC<TableProps> = ({ children }) => (
  <tbody>{children}</tbody>
);

export const TableRow: React.FC<TableProps> = ({ children }) => (
  <tr>{children}</tr>
);

export const TableColumn: React.FC<TableColumnProps> = ({
  children,
  isHeader = false,
  className = "",
}) => {
  const Tag = isHeader ? "th" : "td";
  return <Tag className={className}>{children}</Tag>;
};
