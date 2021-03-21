import React from "react";
import ReactTable from "react-table";
import s from "./Table.module.scss";
import "../../styles/app.scss";

const Table = ({
  tableData,
  columns,
  pageSize,
  showPagination,
  sortable,
  getHeaderProps,
  ...props
}) => {
  return (
    <ReactTable
      data={tableData}
      columns={columns}
      showPagination={showPagination}
      defaultPageSize={pageSize}
      className={s.table}
      sortable={sortable}
      getHeaderProps={getHeaderProps}
      {...props}
    />
  );
};
export default Table;
