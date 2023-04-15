import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Loading from "../../../components/Loading/Loading";
import Modal from "../../../components/Modal";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { Notification } from "../../../components/ToastNotification";
import { useClickOutside } from "../../../hooks/useClickOutside";
import {
  useGetBloodRequestReceivedFromRequesterQuery,
  useAddDonationRequestUpdateMutation,
} from "../../../Services/BloodApi";
import BloodRequestReceivedTable from "./table/BloodRequestReceivedTable";

const BloodRequestReceived = () => {
  const [details, setDetails] = useState({});
  const showDetails = (body) => {
    setDetails(body);
    // console.log(body);
    setOpenModal(true);
  };
  // modal toggle
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setOpenModal(false));
  // get all deposit history
  const { data, isLoadingDonationRequest } =
    useGetBloodRequestReceivedFromRequesterQuery();
  // status change
  const [
    RequestUpdate,
    { data: RequestUpdateData, error: RequestUpdateError },
  ] = useAddDonationRequestUpdateMutation();
  useEffect(() => {
    if (RequestUpdateData?.message) {
      Notification(RequestUpdateData?.message, "success");
    } else {
      Notification(RequestUpdateError?.data?.message, "error");
    }
  }, [RequestUpdateError, RequestUpdateData]);
  const statusChange = async (status, d) => {
    const statusChanges = {
      ...d,
      status: status,
    };
    await RequestUpdate(statusChanges);
    console.log(statusChanges);
  };
  const [filterData, setFilterData] = useState([]);
  // if (isLoadingDonationRequest) {
  //   return <Loading />;
  // }
  return (
    <>
      <SectionCommonTable
        wrapperClassName="allmember_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle={`Blood Request received (${
          data?.total > 0 ? data?.total : "0"
        })`}
        data={data?.donations}
        setFilterData={setFilterData}
        table={
          <BloodRequestReceivedTable
            data={filterData.length > 0 ? filterData : data?.donations}
            showDetails={showDetails}
            statusChange={statusChange}
          />
        }
      />

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalTitle="Blood Request Description"
        modalRef={modalRef}
      >
        <div className="rf_commol_modal_field">
          <div
            className="transaction_details"
            style={{ textAlign: "left", marginBottom: "10px" }}
          >
            <p>{details?.details}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BloodRequestReceived;
