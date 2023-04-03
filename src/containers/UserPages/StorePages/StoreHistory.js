import React, { useRef, useState } from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useGetUserStoreHistoryQuery } from "../../../Services/StoreDataApi";
import StoreHistoryTable from "./table/StoreHistoryTable";

const StoreHistory = () => {

  const { data: UserStoreHistory } = useGetUserStoreHistoryQuery();
  return (
    <>
      <SectionCommonTable
        wrapperClassName="mytopuphistory_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="user store History"
        table={<StoreHistoryTable data={UserStoreHistory?.data} />}
      />
    </>
  );
};

export default StoreHistory;
