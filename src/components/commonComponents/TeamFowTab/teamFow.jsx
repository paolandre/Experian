// TeamFowTab.jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarImg from "./../../../assets/teamFow/calendarIcon.png";
import promedio from "./../../../assets/teamFow/teamfowpercentage.png";
import exportbutton from "./../../../assets/teamFow/exportbutton.png";
import charRow from "./../../../assets/charRow.png";
import diagram from "./../../../assets/diagram.png";
import diagrWhite from "./../../../assets/diagrWhite.png";
import columnsblue from "./../../../assets/columnsblue.png";

function TeamFowTab() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("Team list");
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section className="w-[100vw] h-[70vh]">
      <div className="desktop:w-[90vw]  desktop:flex flex-row-reverse telephone:w-[70vw] telephone:flex flex-row-reverse telephone:mb-2">
        <img
          src={exportbutton}
          alt="boton para exportar información"
          className="desktop:w-[100px] desktop:transition-transform transform hover:scale-110 telephone:w-[90px] mt-2"
        />
      </div>
      <section className="desktop:flex flex-row desktop:w-[90vw] desktop:h-[8vh] desktop:ml-3 desktop:mb-3 telephone:flex flex-row telephone:w-[90vw] telephone:h-[8vh] telephone:ml-3 telephone:mb-2">
        <div className="desktop:w-[12vw] desktop:ml-3  desktop:flex flex-col desktop:border-r-2 desktop:border-greyborder   telephone:ml-0  telephone:w-[20vw] telephone:border-r-2 telephone:border-greyborder telephone:h-[6vh]">
          <p className="desktop:text-xl desktop:font-bold desktop:mb-4 telephone:text-xs telephone:font-bold telephone:mb-0">
            5
          </p>
          <p className="desktop:text-base telephone:text-xs">
            Total team members
          </p>
        </div>
        <div className="desktop:w-[6vw]  desktop:flex items-center desktop:justify-center telephone:w-[8vw] ml-2 ">
          <img src={promedio} alt="porcentaje rojo de rendimiento " />
        </div>
        <div className="desktop:flex flex-col telephone:ml-3">
          <p className=" desktop:font-bold desktop:mb-4 desktop:text-xl  telephone:mb-0 telephone:text-xs telephone:font-bold telephone:mb-0">
            90%
          </p>
          <p className="desktop:text-base telephone:text-xs">
            Monthly team FOW
          </p>
        </div>
      </section>
      <section className="desktop:flex flex-row desktop:w-[90vw] desktop:h-[10vh] desktop:ml-3 desktop:mb-1 telephone:flex flex-row telephone:w-[70vw] telephone:mb-3">
        <div className="desktop:flex flex-col  desktop:w-[11vw] telephone:w-[20vw] telephone:mr-8">
          <span htmlFor="selectBox">Date range</span>
          <div className="desktop:flex flex-row desktop:bg-white desktop:border-custom-gray desktop:border-2 desktop:rounded-md desktop:w-[10vw]  desktop:h-[4vh] desktop:items-center telephone:w-[25vw] telephone:bg-white telephone:flex flex-row telephone:border-custom-gray telephone:border-2 telephone:rounded-md   telephone:items-center telephone:h-[2.5vh]">
            <img
              src={calendarImg}
              alt="imagen de un calendario"
              className="desktop:w-[2vw] desktop:h-[3vh] telephone:w-[4vw] telephone:h-[2vh]"
            />
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MMM/yyyy"
              className="desktop:w-[7vw] desktop:border-transparent desktop:focus:outline-none telephone:w-[20vw] telephone:text-xs telephone:h-[1.5vh]"
            />
          </div>
        </div>
        <div className="desktop:flex flex-col desktop:w-[11vw] telephone:w-[20vw] telephone:mr-5">
          <label htmlFor="selectBox">Country</label>
          <select
            id="selectBox"
            className="desktop:bg-white desktop:border-custom-gray desktop:border-2 desktop:rounded-md desktop:w-[10vw] desktop:h-[4vh] telephone:bg-white telephone:border-custom-gray telephone:border-2 telephone:rounded-md telephone:w-[20vw] telephone:text-xs"
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
        <div className="desktop:flex flex-col desktop:w-[10vw] telephone:w-[20vw] telephone:mr-5">
          <label htmlFor="selectBox">FOW</label>
          <select
            id="selectBox"
            className="desktop:bg-white desktop:border-custom-gray desktop:border-2 desktop:rounded-md desktop:w-[10vw] desktop:h-[4vh] telephone:bg-white telephone:border-custom-gray telephone:border-2 telephone:rounded-md telephone:w-[20vw] telephone:text-xs "
          >
            <option value="default" disabled selected>
              Select
            </option>
            <option value="option1">Hybrid</option>
            <option value="option2">Home office</option>
            <option value="option3">Roam</option>
          </select>
        </div>
        <div className="w-[60vw] flex flex-row justify-end items-center">
          <div
            id="buttons"
            className="flex flex-row items-center justify-center rounded-full border border-underlineGrey w-[20vw] p-1 h-[6vh]"
          >
            <button
              className={`cursor-pointer w-[10vw] h-[5vh] flex flex-row  items-center justify-center text-dark-blue bg-white rounded-full ${
                activeTab === "Team list"
                  ? "border-b-2 font-bold text-white bg-bluebuttons"
                  : "text-black"
              }`}
              onClick={() => setActiveTab("Team list")}
            >
              <img
                src={activeTab === "Team list" ? charRow : columnsblue}
                className="w-[1vw] h-[1vw]"
                alt="rows of papel"
              />
              Team list
            </button>
            <button
              className={`w-[10vw] h-[5vh] bg-white flex flex-row items-center justify-center text-dark-blue rounded-full ${
                activeTab === "Monthly charts"
                  ? "bg-bluebuttons text-white border-b-2 font-bold "
                  : "text-black"
              }`}
              onClick={() => setActiveTab("Monthly charts")}
            >
              <img
                src={activeTab === "Monthly charts" ? diagrWhite : diagram}
                className="w-[1vw] h-[1vw]"
                alt="figure of diagram"
              />
              Monthly charts
            </button>
          </div>
        </div>
      </section>
      <article>
        <div className="information">
          <p>
            If you have any concerns or need clarification, please feel free to
            contact us at the email address:{" "}
            <a
              href="mailto:onehrsla@experian.com"
              className="hover:underline text-black font-bold"
            >
              onehrsla@experian.com
            </a>
          </p>
        </div>
      </article>
    </section>
  );
}

export default TeamFowTab;
