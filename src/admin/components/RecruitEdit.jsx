import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setWork,
  addWork,
  setWont,
  addWont,
  setConditions,
  addConditions,
  setTime,
  addTime,
  setWelfare,
  addWelfare,
} from "../../store/recruitInput";

const RecruitEdit = () => {
  const dispatch = useDispatch();
  const work = useSelector((state) => state.recruit.work);
  const wont = useSelector((state) => state.recruit.wont);
  const conditions = useSelector((state) => state.recruit.conditions);
  const time = useSelector((state) => state.recruit.time);
  const welfare = useSelector((state) => state.recruit.welfare);

  const editWork = useSelector((state) => state.recruit.editWork);
  const editWont = useSelector((state) => state.recruit.editWont);
  const editConditions = useSelector((state) => state.recruit.editConditions);
  const editTime = useSelector((state) => state.recruit.editTime);
  const editWelfare = useSelector((state) => state.recruit.editWelfare);

  const [selected, setSelected] = useState("work");

  const [decision, setDecision] = useState(true);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const checkBox = () => {
    switch (selected) {
      case "work":
        return work;
      case "wont":
        return wont;
      case "conditions":
        return conditions;
      case "time":
        return time;
      case "welfare":
        return welfare;
      default:
        return null;
    }
  };

  const selectChange = (value) => {
    switch (selected) {
      case "work":
        return dispatch(setWork(value));
      case "wont":
        return dispatch(setWont(value));
      case "conditions":
        return dispatch(setConditions(value));
      case "time":
        return dispatch(setTime(value));
      case "welfare":
        return dispatch(setWelfare(value));
      default:
        return null;
    }
  };

  const onNoticeSubmit = (e) => {
    e.preventDefault();
    switch (selected) {
      case "work":
        dispatch(addWork(work));
        dispatch(setWork(""));
        break;
      case "wont":
        dispatch(addWont(wont));
        dispatch(setWont(""));
        break;
      case "conditions":
        dispatch(addConditions(conditions));
        dispatch(setConditions(""));
        break;
      case "time":
        dispatch(addTime(time));
        dispatch(setTime(""));
        break;
      case "welfare":
        dispatch(addWelfare(welfare));
        dispatch(setWelfare(""));
        break;
      default:
        return null;
    }
  };

  const changePrev = () => {
    switch (selected) {
      case "work":
        return <>{editWork}</>;
      case "wont":
        return <>{editWont}</>;
      case "conditions":
        return <>{editConditions}</>;
      case "time":
        return <>{editTime}</>;
      case "welfare":
        return <>{editWelfare}</>;
      default:
        return null;
    }
  };

  return (
    <>
      <div class="inline-block relative w-64">
        <form onSubmit={onNoticeSubmit}>
          <select
            onChange={handleChange}
            class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="none">選択して下さい</option>
            <option value="work">仕事内容</option>
            <option value="wont">求める人材</option>
            <option value="conditions">応募資格</option>
            <option value="time">勤務時間・休日</option>
            <option value="welfare">福利厚生</option>
          </select>
          <textarea
            type="text"
            class="px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="4"
            value={checkBox()}
            onChange={(e) => {
              selectChange(e.target.value);
            }}
          />
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            送信
          </button>
        </form>
      </div>
      <div>
        {decision && changePrev()}
        <button
          onClick={() => {
            setDecision(false);
          }}
        >
          確認OK
        </button>
      </div>
    </>
  );
};

export default RecruitEdit;