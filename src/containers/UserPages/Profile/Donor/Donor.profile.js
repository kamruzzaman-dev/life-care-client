// import { color } from "@mui/system";
import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import CardLayout from "../../../../components/CardLayout";
import Input from "../../../../components/Input";
import Loading from "../../../../components/Loading/Loading";
import Select from "../../../../components/Select";
import { Notification } from "../../../../components/ToastNotification";
import avatar from "../../../../assets/avatar.png";
import {
  useEditImageMutation,
  useEditUserMutation,
  useGetLoginUserQuery,
} from "../../../../Services/userApi";

const Profile = () => {
  const { data: userData, isLoading: isLoadingUserData } =
    useGetLoginUserQuery();
  const [
    uploadImage,
    { error: errorUploadImage, data: user, isLoading: isLoadingUploadImage },
  ] = useEditImageMutation();
  const [editProfile, { error, data: userProfile, isLoading }] =
    useEditUserMutation();

  const [data, setData] = useState({
    blood_group: userData?.data?.bloodGroup,
    eligibility: userData?.data?.eligibility,
    lastDonationDate: userData?.data?.lastDonationDate,
    user_id: userData?.data?.user_id,
    name: userData?.data?.name,
    mobile: userData?.data?.phoneNumber,
    gender: userData?.data?.gender,
    location: userData?.data?.location,
    email: userData?.data?.email,
  });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((json) => {
        setCountries(json.map((c) => c.name));
      });
  }, []);

  useEffect(() => {
    if (user?.message) {
      Notification(user?.message, "success");
    } else {
      Notification(errorUploadImage?.data?.message, "error");
    }
  }, [errorUploadImage, user]);

  useEffect(() => {
    if (userProfile?.message) {
      Notification(userProfile?.message, "success");
    } else {
      Notification(error?.userProfile?.message, "error");
    }
  }, [error, userProfile]);

  /* edit profile */
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editProfile(data);
  };
  /* iamge update */
  const handleChangeImage = async (e) => {
    let formData = new FormData();
    formData.append("image", e.target.files[0]);
    await uploadImage(formData);
  };

  /* donor profile update */
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoadingUserData) {
    return <Loading />;
  }
  console.log(userData);
  return (
    <div className="life_care_project_userUpdate_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="life_care_project_userupdate_card"
      >
        <div className="life_care_project_userupdate_title">
          <h2>profile</h2>
        </div>
        <div className="life_care_project_profile_head">
          <div className="life_care_project_photo_content">
            <div className="life_care_project_cover_photo"></div>
          </div>
          <div className="life_care_project_profile_short_info">
            <div className="life_care_project_profile_photo">
              <img
                src={data?.data?.profilePic ? data?.data?.profilePic : avatar}
                width="100%"
                alt="img"
              />

              {isLoading && "Uploading..."}
              <form encType="multipart/form-data">
                <div className="form-check form-check-label">
                  <label htmlFor="img" className="form-check-label">
                    <Input
                      type="file"
                      name="image"
                      className="form-check-label"
                      onChange={handleChangeImage}
                    />
                  </label>
                </div>
              </form>
            </div>
            <div className="life_care_project_profile_info">
              <div className="life_care_project_profile_name">
                <h2>{userData?.data?.name}</h2>
                <p>Role: {userData?.data?.role}</p>
              </div>
              <div className="life_care_project_profile_email">
                <h2>{userData?.data?.email}</h2>
                <p>Email</p>
              </div>
            </div>
          </div>
        </div>
        <div className="life_care_project_userupdate_field">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label="Blood Group"
                type="text"
                value={data.blood_group}
                name="blood_group"
                onChange={handleChange}
                inputGroupClass="left"
              />
              <Input
                label="Eligibility"
                type="text"
                value={data.eligibility}
                name="eligibility"
                onChange={handleChange}
                inputGroupClass="right"
                disabled={true}
              />
            </div>
            <div className="form_group">
              <Input
                label="Last DonationDate"
                type="text"
                value={data.lastDonationDate}
                name="lastDonationDate"
                onChange={handleChange}
                inputGroupClass="left"
                disabled={true}
              />
              <Input
                label="Mobile"
                type="text"
                value={data.mobile}
                name="mobile"
                onChange={handleChange}
                inputGroupClass="right"
              />
            </div>
            <div className="form_group">
              <Input
                label="Username"
                type="text"
                value={data.user_id}
                name="user_id"
                onChange={handleChange}
                inputGroupClass="left"
                disabled={true}
              />
              <Input
                label="Email"
                type="email"
                value={data.email}
                name="email"
                onChange={handleChange}
                inputGroupClass="right"
                disabled={true}
              />
            </div>
            <div className="form_group">
              <Input
                label="Name"
                type="text"
                value={data.name}
                name="name"
                onChange={handleChange}
                inputGroupClass="left"
              />
              <div className="form_group_special_container">
                <Select
                  className="special_input"
                  label="Location"
                  value={data.location}
                  name="location"
                  onChange={handleChange}
                  options={countries}
                  inputGroupClass="left"
                />
              </div>
            </div>
            <div className="form_group">
              <div className="gender_select ">
                <Select
                  className="special_input"
                  label="Gender"
                  name="gender"
                  value={data.gender}
                  onChange={handleChange}
                  options={["Male", "Female", "Others"]}
                />
              </div>
            </div>
            <div className="submit_button">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Update"}
              </Button>
            </div>
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default Profile;
