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
