// TeamFowTab.jsx

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";
import calendarImg from "./../../../assets/teamFow/calendarIcon.png";
import promedio from "./../../../assets/teamFow/teamfowpercentage.png";
import exportbutton from "./../../../assets/teamFow/exportbutton.png";
import "./teamFow.css";

function TeamFowTab() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <article className="w-[100vw] h-[70vh] ">
      <div className="w-[90vw]  flex flex-row-reverse">
        <img
          src={exportbutton}
          alt="boton para exportar información"
          className="w-[100px]"
        />
      </div>
      <section className="flex flex-row w-[90vw] h-[10vh] mb-8">
        <div className="  flex flex-col border-r-2 border-greyborder ml-3 w-[12vw] ">
          <p className="text-xl font-bold ">5</p>
          <p>Total team members</p>
        </div>
        <div className=" w-[6vw]  flex items-center justify-center ">
          <img src={promedio} alt="porcentaje rojo de rendimiento " />
        </div>
        <div className="flex flex-col  bg-purple-clear">
          <p className="text-xl font-bold">90%</p>
          <p>Monthly team FOW</p>
        </div>
      </section>
      <section className="flex flex-row w-[90vw] h-[10vh]">
        <div className="flex flex-col  w-[11vw]">
          <span htmlFor="selectBox">Date range</span>
          <div className="flex flex-row bg-white border-custom-gray border-2 rounded-md w-[10vw]  h-[4vh] items-center ">
            <img
              src={calendarImg}
              alt="imagen de un calendario"
              className="w-[2vw] h-[3vh]"
            />
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MMM/yyyy"
              locale={es}
              className="w-[7vw]"
            />
          </div>
        </div>
        <div className="flex flex-col w-[11vw]">
          <label htmlFor="selectBox">Country</label>
          <select
            id="selectBox"
            className="bg-white border-custom-gray border-2 rounded-md w-[10vw] h-[4vh] "
          >
            <option value="default" disabled selected>
              Select
            </option>
            <option value="option1">Argentina</option>
            <option value="option2">Chile</option>
            <option value="option3">Colombia</option>
            <option value="option4">Perú</option>
          </select>
        </div>
        <div className="flex flex-col  w-[10vw]">
          <label htmlFor="selectBox">FOW</label>
          <select
            id="selectBox"
            className="bg-white border-custom-gray border-2 rounded-md w-[10vw] h-[4vh] "
          >
            <option value="default" disabled selected>
              Select
            </option>
            <option value="option1">Hybrid</option>
            <option value="option2">Home office</option>
            <option value="option3">Roam</option>
          </select>
        </div>
        <div
          className="bg-yellow-ico
        n  w-[15vw]"
        ></div>
      </section>
    </article>
  );
}

export default TeamFowTab;
