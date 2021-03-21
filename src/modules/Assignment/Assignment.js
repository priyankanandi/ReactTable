import React from "react";
import Table from "../../component/Table/Table";
import { tableData, columns, getColumns } from "../../utils/assignment";

const Assignment = () => {
  return (
    <Table
      tableData={tableData}
      columns={getColumns(columns, tableData)}
      pageSize={4}
      showPagination={false}
      sortable={false}
    />
  );
};

export default Assignment;
