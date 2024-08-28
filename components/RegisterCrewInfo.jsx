"use client";

import React, { useState, useEffect } from "react";
import { Select, InputNumber, DatePicker, ConfigProvider } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import locale from "antd/locale/ko_KR";
import RegisterTool from "./RegisterTool";

const { Option } = Select;
const { RangePicker } = DatePicker;

const RegisterCrewInfo = ({ setRecruitmentInfo }) => {
  const [position, setPosition] = useState("");
  const [tools, setTools] = useState([]);
  const [year, setYear] = useState(0);
  const [duration, setDuration] = useState("개월 선택");
  const [dateRange, setDateRange] = useState([]);

  useEffect(() => {
    setRecruitmentInfo([
      {
        position,
        tools: tools.map((tool) => ({ stackName: tool })),
        year,
        expectedRecruitmentDuration: {
          duration,
          startDate: dateRange && dateRange[0] ? dateRange[0].format("YYYY-MM-DD") : "",
          endDate: dateRange && dateRange[1] ? dateRange[1].format("YYYY-MM-DD") : "",
        },
      },
    ]);
  }, [position, tools, year, duration, dateRange, setRecruitmentInfo]);

  const handleToolSelect = (selectedTools) => {
    setTools(selectedTools);
  };

  const handleDurationChange = (value) => {
    setRecruitmentInfo([value]);
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
        <div className="flex  items-center justify-start gap-20">
          <div className="flex justify-between items-center w-72">
            <p className="text-[#4f4f4f] text-lg font-semibold">포지션</p>
            <Select
              style={{ width: 200 }}
              placeholder="포지션 선택"
              onChange={setPosition}
              className="w-40 h-9 ring-1 ring-line bg-transparent rounded-full text-base outline-none text-black"
            >
              <Option value="프론트엔드">프론트엔드</Option>
              <Option value="백엔드">백엔드</Option>
            </Select>
          </div>
          <div className="flex justify-between items-center w-[500px]">
            <p className="text-[#4f4f4f] text-lg font-semibold">활용 툴</p>
            <RegisterTool onSelect={handleToolSelect} initialSelectedTools={tools} />
          </div>
          <div className="flex justify-between items-center w-72">
            <p className="text-[#4f4f4f] text-lg font-semibold">{"연차(경력)"}</p>
            <InputNumber
              min={0}
              value={year}
              onChange={setYear}
              className="w-40 h-9 ring-1 ring-line bg-transparent rounded-full text-base outline-none px-2"
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-[650px] gap-2">
          <p className="text-[#4f4f4f] text-lg font-semibold">구인 기간</p>
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
    </ConfigProvider>
  );
};

export default RegisterCrewInfo;
