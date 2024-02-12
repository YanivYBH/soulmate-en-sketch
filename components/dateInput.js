import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const DatePicker = ({
  daysInMonth,
  setDaysInMonth,
  setSelectedDay,
  setSelectedYear,
  setSelectedMonth,
  selectedDay,
  selectedMonth,
  selectedYear,
}) => {
  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    if (e.target.value === "2" && selectedDay > 28) {
      setSelectedDay("");
    }
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  useEffect(() => {
    if (selectedMonth === "2") {
      setDaysInMonth(28);
      if (selectedDay > 28) {
        setSelectedDay("");
      }
    } else if (["4", "6", "9", "11"].includes(selectedMonth)) {
      setDaysInMonth(30);
      if (selectedDay > 30) {
        setSelectedDay("");
      }
    } else {
      setDaysInMonth(31);
    }
  }, [selectedMonth, selectedDay]);

  const years = Array.from(
    { length: new Date().getFullYear() - 1899 },
    (_, index) => 1900 + index
  ).reverse();

  return (
    <Fade  cascade={true} triggerOnce={false}>
      <div className="flex justify-between items-center gap-[8px] w-full">
        <div className="w-1/4">
          <select
            className="w-full ml-10 px-15 py-10 font-bold border-2 border-brown rounded-md"
            value={selectedDay}
            onChange={handleDayChange}
          >
            <option className="" value="">
              Day
            </option>
            {/* Generate day options */}
            {Array.from({ length: daysInMonth }, (_, index) => (
              <option className="" key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2 mx-10">
          <select
            className=" px-15 py-10 w-full font-bold border-2 border-brown rounded-md"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option className=" " value="">
              Month
            </option>
            <option className="" value="1">
              January
            </option>
            <option className="text-xs" value="2">
              February
            </option>
            <option className="" value="3">
              March
            </option>
            <option className="" value="4">
              April
            </option>
            <option className="" value="5">
              May
            </option>
            <option className="" value="6">
              June
            </option>
            <option className="" value="7">
              July
            </option>
            <option className="" value="8">
              August
            </option>
            <option className="" value="9">
              September
            </option>
            <option className="" value="10">
              October
            </option>
            <option className="" value="11">
              November
            </option>
            <option className="" value="12">
              December
            </option>
            {/* Add options for all 12 months */}
          </select>
        </div>
        <div className="w-1/4">
          <select
            className=" w-full px-15 py-10 font-bold border-2 border-brown rounded-md text-xs"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option className="" value="">
              Year
            </option>
            {/* Generate year options, e.g., from 1900 to the current year */}
            {years.map((year) => (
              <option className="" key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Fade>
  );
};

export default DatePicker;
