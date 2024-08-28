"use client";

import React, { useState, useEffect } from "react";
import { Input, Select, DatePicker, ConfigProvider } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import locale from "antd/locale/ko_KR";

const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const RegisterProjectInfo = ({ setProjectInfo }) => {
  const [projectName, setProjectName] = useState("");
  const [creator, setCreator] = useState("");
  const [duration, setDuration] = useState("개월 선택");
  const [dateRange, setDateRange] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const crewInfo = JSON.parse(localStorage.getItem("crewInfo")) || {};
    setCreator(crewInfo.userName || "");
  }, []);

  useEffect(() => {
    setProjectInfo((prevState) => ({
      ...prevState,
      projectName,
      expectedProjectDuration: {
        duration,
        startDate: dateRange && dateRange[0] ? dateRange[0].format("YYYY-MM-DD") : "",
        endDate: dateRange && dateRange[1] ? dateRange[1].format("YYYY-MM-DD") : "",
      },
      description,
    }));
  }, [projectName, duration, dateRange, description, setProjectInfo]);

  const handleDurationChange = (value) => {
    setDuration(value);
    if (value) {
      const start = dayjs();
      let end;
      switch (value) {
        case "1개월":
          end = start.add(1, "month").subtract(1, "day");
          break;
        case "3개월":
          end = start.add(3, "month").subtract(1, "day");
          break;
        case "6개월":
          end = start.add(6, "month").subtract(1, "day");
          break;
        case "1년":
          end = start.add(1, "year").subtract(1, "day");
          break;
        case "1년 이상":
          end = start.add(1, "year");
          break;
        default:
          end = start;
      }
      setDateRange([start, end]);
    }
  };

  const handleDateRangeChange = (dates) => {
    setDateRange(dates);
    if (dates && dates[0] && dates[1]) {
      const days = dates[1].diff(dates[0], "day");
      const months = dates[1].diff(dates[0], "month");
      const years = dates[1].diff(dates[0], "year");

      setDuration(days < 30 ? "1개월" : months < 3 ? "3개월" : months < 6 ? "6개월" : years < 1 ? "1년" : "1년 이상");
    } else {
      setDuration("개월 선택");
    }
  };

  return (
    <ConfigProvider locale={locale}>
      <div className="flex flex-col justify-center items-start gap-5 mt-5">
        <div className="flex  items-center justify-center gap-20">
          <div className="flex justify-between items-center w-72">
            <p className="text-[#4f4f4f] text-lg font-semibold">프로젝트명</p>
            <Input
              placeholder="프로젝트명 입력"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-40 h-9 p-3 ring-1 ring-line bg-transparent rounded-full text-base placeholder:text-line outline-none"
            />
          </div>
          <div className="flex justify-between items-center w-64">
            <p className="text-[#4f4f4f] text-lg font-semibold">생성자</p>
            <Input
              value={creator}
              readOnly
              className="w-40 h-9 p-3 ring-1 ring-line bg-transparent rounded-full text-base outline-none"
            />
          </div>
          <div className="flex justify-between items-center w-[750px] gap-6">
            <p className="text-[#4f4f4f] text-lg font-semibold">프로젝트 진행 기간</p>
            <Select
              style={{ width: 160 }}
              value={duration}
              onChange={handleDurationChange}
              className="w-40 h-9 ring-1 ring-line bg-transparent rounded-full text-base outline-none text-black"
            >
              <Option value="1개월">1개월</Option>
              <Option value="3개월">3개월</Option>
              <Option value="6개월">6개월</Option>
              <Option value="1년">1년</Option>
              <Option value="1년 이상">1년 이상</Option>
            </Select>
            <RangePicker
              value={dateRange}
              onChange={handleDateRangeChange}
              style={{ marginLeft: 10, fontSize: 23 }}
              className="custom-range-picker w-80 h-9 ring-1 ring-line rounded-full text-base outline-none text-black"
              disabledDate={(current) => current && current < dayjs().startOf("day")}
              placeholder={["시작날짜", "종료날짜"]}
              separator="~"
            />
          </div>
        </div>
        <div className="flex justify-start items-start w-full">
          <p className="text-[#4f4f4f] text-lg font-semibold w-44">프로젝트 소개글</p>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={100}
            showCount
            className="w-[700px] h-40 text-lg text-accent ring-1 ring-line rounded-2xl"
            placeholder="프로젝트를 소개하는 글을 작성해 주세요. (최대 100자)"
          />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default RegisterProjectInfo;
