import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function ReactCalendar(props) {
  const [date, setDate] = useState(new Date(props.date));

  const changeDate = (date) => {
    setDate(date);
    props.onChange(date);
  };

  return (
    <Wrapper {...props}>
      <Calendar
        locale="ko"
        calendarType="US"
        minDetail="month"
        className={style}
        value={date}
        onChange={changeDate}
      />
    </Wrapper>
  );
}

export default ReactCalendar;

ReactCalendar.defaultProps = {
  date: new Date(),
  width: "auto",
  height: "auto",
  isOpen: false,
  setIsOpen: () => {},
  onChange: () => {},
};

const style = css`
  border: 1px solid var(--sectionLine);
  width: 100%;
  & abbr {
    text-decoration: none;
    background-color: inherit;
    color: inherit;
  }
  // 네비게이션
  .react-calendar__navigation {
    margin: 0px;
    button:disabled {
      background-color: transparent;
    }
    button:enabled:hover,
    button:enabled:focus {
      background-color: transparent;
    }
  }
  // 현재 날짜 배경색 비활성화
  .react-calendar__tile--now {
    background-color: transparent;
    &:enabled:hover,
    &:enabled:focus {
      background-color: var(--sectionLine);
    }
  }
  // 주말 텍스트 색
  .react-calendar__month-view__days__day--weekend {
    color: var(--red600);
  }
  // hover 색
  .react-calendar__tile:enabled:hover {
    background-color: var(--sectionLine);
  }
  // 선택된 날짜
  .react-calendar__tile--active {
    color: white;
    background-color: var(--brandColor) !important;
    &:hover,
    &:focus {
      background-color: inherit;
    }
  }
  // 이전달 or 다음달 날짜
  .react-calendar__month-view__days__day--neighboringMonth {
    visibility: hidden;
  }
`;

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
