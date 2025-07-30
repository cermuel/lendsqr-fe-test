import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableColumn,
} from "../components/shared/table";
import { render, screen } from "@testing-library/react";

describe("Table component suite", () => {
  test("renders the table structure correctly", () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableColumn isHeader>Name</TableColumn>
            <TableColumn isHeader>Age</TableColumn>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableColumn>John</TableColumn>
            <TableColumn>25</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>Jane</TableColumn>
            <TableColumn>30</TableColumn>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByText("Name").tagName).toBe("TH");
    expect(screen.getByText("Age").tagName).toBe("TH");

    expect(screen.getByText("John").tagName).toBe("TD");
    expect(screen.getByText("25").tagName).toBe("TD");
    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
  });
});
