import React from "react";
import classnames from "classnames";
export const tableData = [
  {
    name: "73 Questions: James Corden",
    middle: "CBS Broadcasting, Inc",
    assignmentType: "Access Agreement",
    modified: "11:32 AM"
  },
  {
    name: "100 Ways: PILOT",
    middle: "Miami City Ballet, Inc.",
    assignmentType: "Access Agreement",
    modified: "Feb 25, 2019"
  },
  {
    name: "Saks In 30 Seconds",
    middle: "Partos Co. (Martijn Hostetler)",
    assignmentType: "Agency Fee",
    modified: "Feb 23, 2019"
  },
  {
    name: "Glamour Allure X P&G",
    middle: "The Agency Arizona LLC",
    assignmentType: "Agency Fee",
    modified: "Feb 22,2019"
  }
];

const formatAgreementType = (props) => {
  let classProperty = "";
  switch (props.value) {
    case "Agency Fee":
      classProperty = "initiate";
      break;
    case "Access Agreement":
      classProperty = "success";
      break;
    default:
      break;
  }
  return (
    <div
      className={classnames(
        "maxWidth150 borderRadius4 colorWhite paddingAssignmentType textCenter",
        classProperty
      )}
    >
      <span className="fontSize11">{props.value.toUpperCase()}</span>
    </div>
  );
};

export const columns = [
  {
    Header: "Agreement Name",
    columns: [
      {
        Header: "Assignment",
        accessor: "name" // String-based value accessors!
      }
    ]
  },
  {
    Header: "3rd Party",
    columns: [
      {
        accessor: "middle"
      }
    ]
  },
  {
    Header: "Agreement Type",
    columns: [
      {
        accessor: "assignmentType",
        Cell: (props) => formatAgreementType(props)
      }
    ]
  },
  {
    Header: "Date Modified",
    columns: [
      {
        accessor: "modified"
      }
    ]
  }
];

export const getColumns = (columns, tableData) => {
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
