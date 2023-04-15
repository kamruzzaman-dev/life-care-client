import React from "react";
import DataTable from "../../../../components/DataTable";

const columns = [
  { id: "sr", label: "Sr.", minWidth: 20 },
  { id: "requestSended", label: "Request sended", minWidth: 150 },
  {
    id: "location",
    label: "Location",
    minWidth: 100,
  },
  {
    id: "bloodGroup",
    label: "Blood Group",
    minWidth: 120,
  },
  {
    id: "details",
    label: "Details",
    minWidth: 120,
  },
  {
    id: "date",
    label: "Date",
    minWidth: 120,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 80,
  },
];

const BloodRequestSendTable = ({ data, showDetails, statusChange }) => {
  function createData(
    sr,
    requestSended,
    location,
    bloodGroup,
    details,
    date,
    status
  ) {
    return {
      sr,
      requestSended,
      location,
      bloodGroup,
      details,
      date,
      status,
    };
  }

  const rows = data?.map((d, index) =>
    createData(
      index + 1,
      <span
        style={{
          cursor: "pointer",
        }}
      >
        <span style={{ textTransform: "capitalize" }}>{d?.askedTo?.name}</span>{" "}
        <br />
        <span style={{ color: "#f74f75" }}>{d?.askedTo?.phoneNumber}</span>
        <br />
        <span style={{ color: "#38cab3" }}>{d?.askedTo?.email}</span>
      </span>,
      d?.askedTo?.location,
      d?.askedTo?.bloodGroup,
      <span
        onClick={() => showDetails(d)}
        style={{
          userSelect: "none",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        {d?.details}
      </span>,
      new Date(d?.date).toLocaleString(),
      <span>
        <select
          name="status"
          style={{
            border: "none",
            outline: "none",
            padding: "5px 8px",
            borderRadius: "5px",
            textTransform: "capitalize",
            backgroundColor:
              d.status === "pending"
                ? "rgba(255,189,90,.2)"
                : d.status === "confirmed"
                ? "rgba(28,213,174,.2)"
                : "rgba(247,79,117,.2)",
            color:
              d.status === "pending"
                ? "#ffc107"
                : d.status === "confirmed"
                ? "#38cab3"
                : "#f74f75",
          }}
          value={d.status}
          onChange={(e) => statusChange(e.target.value, d)}
        >
          <option style={{ padding: "5px 0px" }} value="pending">
            pending
          </option>
          <option value="confirmed">confirmed</option>
          <option value="completed">completed</option>
        </select>
      </span>
    )
  );
  // console.log(data);
  return (
    <DataTable
      columns={columns}
      rows={rows}
      perPageShow={4}
      tableHeight={440}
      className="common_table"
    />
  );
};

export default BloodRequestSendTable;
