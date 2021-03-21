import React from "react";
import { renderWithRouter } from "../../../utils/tests/react-testing";
import Table from "../Table";
import { tableData, columns, getColumns } from "../../../utils/assignment";

describe("number of assignment and details", () => {
  it("render list view", () => {
    const { getByText } = renderWithRouter(
      <Table
        tableData={tableData}
        columns={getColumns(columns, tableData)}
        pageSize={4}
        showPagination={false}
        sortable={false}
      />
    );
    expect(getByText("Partos Co. (Martijn Hostetler)")).toBeInTheDocument();
    expect(getByText("Feb 23, 2019")).toBeInTheDocument();
    expect(getByText("The Agency Arizona LLC")).toBeInTheDocument();
  });
});
