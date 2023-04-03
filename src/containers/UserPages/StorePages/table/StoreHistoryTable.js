import React from "react";
import DataTable from "../../../../components/DataTable";

const StoreHistoryTable = ({ data }) => {
  const columns = [
    { id: "id", label: "S.N", minWidth: 20 },
    { id: "name", label: "Name", minWidth: 100 },
    {
      id: "email",
      label: "Email",
      minWidth: 80,
    },
    {
      id: "sectors",
      label: "Sectors",
      minWidth: 140,
    },
    {
      id: "agree",
      label: "Agree",
      minWidth: 80,
    },
  ];

  function createData(id, name, email, sectors, agree) {
    return {
      id,
      name,
      email,
      sectors,
      agree,
    };
  }
  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      d?.name,
      d?.email,
      d?.sectors.map((item) => <p key={item + 1}>{item}</p>),
      d?.agree ? "True" : "False"
    )
  );
  return (
    <DataTable
      columns={columns}
      rows={rows}
      perPageShow={6}
      tableHeight={440}
      className="common_table"
    />
  );
};

export default StoreHistoryTable;
