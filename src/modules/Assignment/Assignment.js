import React from "react";
import Table from "../../component/Table/Table";
import { tableData, columns } from "../../utils/assignment";

const Assignment = () => {
  const getColumns = (columns) => {
    let style = {
      padding: "20px 35px 20px 15px",
      fontWeight: 200,
      borderRight: 0,
      color: "#2F3F55"
    };
    let headerStyle = {
      padding: "20px 35px 20px 15px",
      fontWeight: 200,
      color: "rgba(0, 0, 0, 0.38)",
      textAlign: "left",
      borderRight: 0,
      background: "white",
      boxShadow: "none"
    };
    columns &&
      columns.forEach((col) => {
        if (col.columns) {
          col.columns.forEach((subCol) => {
            subCol.style = style;
            if (subCol.Header && subCol.Header.length) {
              subCol.Header = (
                <span className="fontSize12">
                  {`${subCol.Header.toUpperCase()} (${tableData.length})`}
                </span>
              );
            }
            subCol.headerStyle = {
              ...headerStyle,
              fontWeight: 200,
              color: "#000000",
              opacity: 0.54
            };
          });
        }
        col.style = style;
        col.headerStyle = headerStyle;
      });
    return columns;
  };

  return (
    <Table
      tableData={tableData}
      columns={getColumns(columns)}
      pageSize={4}
      showPagination={false}
      sortable={false}
    />
  );
};

export default Assignment;
