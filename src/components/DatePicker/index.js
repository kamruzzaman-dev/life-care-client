import React, { useState } from "react";
import DatePicker from "react-datepicker";

const CustomDatePicker = ({
  label,
  className,
  disabled,
  isRequired,
  name = "date",
  state = {},
  setState = () => null,
  canGoBack,
  canNotGoForward,
}) => {
  const [startDate, setDate] = useState(Date.parse(state[name]));
  const handleDateChange = (date) => {
    setDate(date);
    setState({ ...state, [name]: date });
  };
  return (
    <>
      {label && (
        <label htmlFor={label}>
          {label} {isRequired && <span style={{ color: "red" }}>*</span>}{" "}
        </label>
      )}
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        selectsStart
        startDate={startDate}
        // endDate={endDate}
        minDate={canGoBack ? "" : new Date()}
        maxDate={canNotGoForward ? new Date() : ""}
        nextMonthButtonLabel=">"
        previousMonthButtonLabel="<"
        className={className}
      />
    </>
  );
};

export default CustomDatePicker;
