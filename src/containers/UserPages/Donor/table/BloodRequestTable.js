import React from "react";
import DataTable from "../../../../components/DataTable";

const columns = [
  { id: "sr", label: "Sr.", minWidth: 20 },
  {
    id: "bloodGroup",
    label: "Blood Group",
    minWidth: 120,
  },
  {
    id: "location",
    label: "Location",
    minWidth: 100,
  },
  {
    id: "requestedAt",
    label: "Requested At",
    minWidth: 40,
  },
  {
    id: "numberOfBags",
    label: "Number Of Bags",
    minWidth: 40,
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

const BloodRequestTable = ({ data, showDetails, statusChange }) => {
  function createData(
    sr,
    bloodGroup,
    location,
    requestedAt,
    numberOfBags,
    date,
    status
  ) {
    return {
      sr,
      bloodGroup,
      location,
      requestedAt,
      numberOfBags,
      date,
      status,
    };
  }

  const rows = data?.map((d, index) =>
    createData(
      index + 1,
      <span style={{ color: "#f74f75" }}>{d?.bloodGroup}</span>,
      d?.location,
      new Date(d?.requestedAt).toLocaleString(),
      <span style={{ color: "#38cab3" }}>{d?.numberOfBags}/bg</span>,
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

export default BloodRequestTable;
