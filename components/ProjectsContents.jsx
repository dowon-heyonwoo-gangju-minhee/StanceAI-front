import { IoIosHeartEmpty } from "react-icons/io";

// 스타일 상수
const STYLES = {
  text: "text-xl text-[#4f4f4f] font-medium",
  container: "w-[800px] m-auto",
};

// 헤더 컴포넌트
export const Header = () => (
  <div className="rounded-full w-14 h-14 flex justify-center items-center bg-accent absolute -top-[4.5rem] left-4">
    <IoIosHeartEmpty className="text-white mt-1" size={35} />
  </div>
);

// 제목 컴포넌트
export const Title = ({ title }) => <div className="text-3xl text-[#4f4f4f] font-semibold m-auto">{title}</div>;

// 정보 컴포넌트
export const Info = ({ leader, date }) => (
  <div className={`flex ${STYLES.text} justify-end items-end gap-5`}>
    <p>{leader}</p>
    <p>{date}</p>
  </div>
);

// 내용 컴포넌트
export const Contents = ({ description }) => (
  <div className={`${STYLES.container} h-[105px]  text-black text-xl flex justify-center items-center leading-relaxed`}>
    {description}
  </div>
);

// 팀 정보 컴포넌트
export const TeamInfo = ({ teamInfo }) => (
  <div className={`${STYLES.container} grid-cols-3 grid text-xl  gap-y-4 text-accent/90`}>
    {Object.entries(teamInfo).map(([key, value]) => (
      <div key={key} className="flex flex-col">
        <p className="font-medium text-accent/80">
          {key === "members"
            ? "모집인원"
            : key === "duration"
            ? "진행 예상 기간"
            : key === "position"
            ? "포지션"
            : key === "deadline"
            ? "모집 마감일"
            : "활용 툴"}
        </p>
        {key === "tools" ? (
          <div className="font-semibold flex flex-wrap gap-2">
            {value.map((tool, index) => (
              <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm mt-1 whitespace-nowrap">
                {tool}
              </span>
            ))}
          </div>
        ) : (
          <p className="font-semibold">{value}</p>
        )}
      </div>
    ))}
  </div>
);
