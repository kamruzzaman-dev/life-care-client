import React, { useState } from "react";
import { useEffect } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { Notification } from "../../../components/ToastNotification";
import { storeValidate } from "../../../components/Validation/vaildate";
import {
  useAddMoreInfoMutation,
  useAddStoreInfoMutation,
  useGetStoreHistoryQuery,
} from "../../../Services/StoreDataApi";

const AddStore = () => {
  // get ticket history
  const [checked, setChecked] = useState(false);
  const { data: GetStore } = useGetStoreHistoryQuery();
  // get user info
  const [formErrors, setFormErrors] = useState({}); // form errors
  const [data, setData] = useState({
    name: "",
    sectors: [],
    agree: false,
  });

  const [req, setReq] = useState("");
  const [res, setRes] = useState([]);
  const [idx, setIdx] = useState(null);

  /* handleChange */
  const handleChange = (e, type, index) => {
    setData({
      ...data,
      sectors: [
        ...data.sectors,
        e.target.value === "--select--" ? null : e.target.value,
      ],
    });
    setReq(e.target.value === "--select--" ? null : e.target.value);
    if (type === "rootSelector") {
      setRes([]);
      setData((prev) => ({
        ...prev,
        sectors: [e.target.value === "--select--" ? null : e.target.value],
      }));
    }
    if (type === "secondSelector") {
      setIdx(index);
      data.sectors.splice(index);
      setData((prev) => ({
        ...prev,
        sectors: [
          ...data.sectors,
          e.target.value === "--select--" ? null : e.target.value,
        ],
      }));
    }
  };

  useEffect(() => {
    let existArr = res.find((i) => i.find((item) => item === req));
    if (existArr) res.splice(res.indexOf(existArr) + 1);
    if (existArr === undefined) res.splice(idx);
  }, [req, idx]);

  /* first sectors handling*/
  const [
    addMoreInfo,
    {
      data: responseAddMoreInfo,
      errorAddMoreInfo,
      isLoading: isLoadingAddMoreInfo,
    },
  ] = useAddMoreInfoMutation();

  useEffect(() => {
    addMoreInfo({
      next: req,
    });
  }, [data?.sectors]);
  useEffect(() => {
    if (responseAddMoreInfo?.message) {
      setRes([...res, responseAddMoreInfo?.data]);
    } else {
      Notification(errorAddMoreInfo?.data?.message, "error");
    }
  }, [errorAddMoreInfo, responseAddMoreInfo]);

  /* --------------------*************************-------------------------- */
  /* agreed */
  useEffect(() => {
    setData({
      ...data,
      agree: checked,
    });
  }, [checked]);
  /* -------------****--------------- */

  useEffect(() => {
    setFormErrors(storeValidate(data));
  }, [data]);

  /* submitting */
  const [addStoreInfo, { data: responseAddStoreInfo, error, isLoading }] =
    useAddStoreInfoMutation();

  useEffect(() => {
    if (responseAddStoreInfo?.message) {
      Notification(responseAddStoreInfo?.message, "success");
      setData({
        name: "",
        sectors: [],
        agree: false,
      });
      setReq("");
      setRes([]);
      setIdx(null);
      setChecked(false);
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, responseAddStoreInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formErrors).length > 0) {
      Notification("All field are required", "error");
    } else {
      if (data?.agree === false) {
        Notification("Agree the Teams & condition", "error");
      } else {
        console.log(data);
        await addStoreInfo(data);
      }
    }
  };

  // console.log("main data", data);

  return (
    <div className="life_care_project_supportticket_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="life_care_project_supporttickett_form_card"
      >
        <div className="life_care_project_section_title">
          <h2>currently involved</h2>
        </div>
        <div className="life_care_project_supportticket_page_content">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <div className="form_group">
                <div className="ticket_reference">
                  <Input
                    label="Name"
                    type="text"
                    name="name"
                    value={data?.name}
                    onChange={(e) =>
                      setData({
                        ...data,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter Your Name"
                    className="input_field"
                    inputGroupClass="right"
                  />
                </div>
              </div>
              <div className="purpose">
                <Select
                  label="sectors"
                  className="select_field"
                  name="sectors"
                  onChange={(e) => handleChange(e, "rootSelector", null)}
                  options={
                    GetStore?.data[0]?.root ? GetStore?.data[0]?.root : []
                  }
                  isRequired={true}
                />
              </div>
              {res?.map((i, index) => (
                <div key={index + 10} className="purpose">
                  <Select
                    label="sectors"
                    className="select_field"
                    name="sectors"
                    onChange={(e) =>
                      handleChange(e, "secondSelector", index + 1)
                    }
                    options={i}
                    isRequired={true}
                  />
                </div>
              ))}
            </div>
            <div
              className="form-check form-check-label agreed-to form_group"
              style={{
                userSelect: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Input
                type="checkbox"
                className="form-check-input form-check-label"
                value="termscondition"
                id="termscondition"
                defaultChecked={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
              <label htmlFor="termscondition" className="form-check-label">
                &nbsp;I agree{" "}
              </label>
            </div>
            <Button
              type="submit"
              className="submit_btn"
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Loading..." : "submit"}
            </Button>
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default AddStore;
