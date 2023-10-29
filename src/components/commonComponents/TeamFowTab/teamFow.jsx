import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarImg from "./../../../assets/teamFow/calendarIcon.png";
import exportbutton from "./../../../assets/teamFow/exportbutton.png";
import charRow from "./../../../assets/charRow.png";
import diagram from "./../../../assets/diagram.png";
import diagrWhite from "./../../../assets/diagrWhite.png";
import columnsblue from "./../../../assets/columnsblue.png";
import FowIndicator from "./fowIndicator";
import DiagramTeam from "./diagramTeam";
import {
  exportToExcel,
  filteredProfile,
  CircularProgressBar
} from './functions.js';
import profile from "./data";

function TeamFowTab() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCountry, setSelectedCountry] = useState("default");
  const [selectedFow, setSelectedFow] = useState("default");
  const [filteredDataLength, setFilteredDataLength] = useState(0);
  const [activeTab, setActiveTab] = useState("Team list");
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCountry = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleFow = (e) => {
    setSelectedFow(e.target.value);
  };

  useEffect(() => {
    const filteredData = filteredProfile(selectedCountry, selectedFow, selectedDate);
    setFilteredDataLength(filteredData.length);
  }, [selectedCountry, selectedFow, selectedDate]);

  const [averagePercentage, setAveragePercentage] = useState(0);

  useEffect(() => {
    const filteredData = filteredProfile(selectedCountry, selectedFow, selectedDate);
    const totalPercentage = filteredData.reduce((total, user) => {
      return total + parseInt(user.percentage, 10);
    }, 0);
    const average = (totalPercentage / filteredData.length) || 0;
    setAveragePercentage(average.toFixed(0));
  }, [selectedCountry, selectedFow, selectedDate]);

  return (
    <section className="w-[100vw] h-fit">
      <div className="desktop:w-[90vw]  desktop:flex flex-row-reverse telephone:w-[70vw] telephone:flex flex-row-reverse telephone:mb-2">
        <img
          src={exportbutton}
          alt="boton para exportar información"
          onClick={() => exportToExcel(profile)}
          className="desktop:w-[100px] desktop:transition-transform transform hover:scale-110 telephone:w-[90px] mt-2"
        />
      </div>
      <section className="desktop:flex flex-row desktop:w-[90vw] desktop:h-[8vh] desktop:ml-3 desktop:mb-3 telephone:flex flex-row telephone:w-[90vw] telephone:h-[7vh] telephone:ml-3 telephone:mb-[1px]">
        <div className="desktop:w-[12vw] desktop:ml-3  desktop:flex flex-col desktop:border-r-2 desktop:border-greyborder   telephone:ml-0  telephone:w-[20vw] telephone:border-r-2 telephone:border-greyborder telephone:h-[6vh]">
          <p className="desktop:text-xl desktop:font-bold desktop:mb-4 telephone:text-xs telephone:font-bold telephone:mb-0">
            {filteredDataLength}
          </p>
          <p className="desktop:text-base telephone:text-xs">
            Total team members
          </p>
        </div>
        <div className="desktop:w-[6vw]  desktop:flex items-center desktop:justify-center telephone:w-[8vw] ml-2 ">
          <CircularProgressBar percentage={averagePercentage} />
        </div>
        <div className="desktop:flex flex-col telephone:ml-3">
          <p className=" desktop:font-bold desktop:mb-4 desktop:text-xl  telephone:mb-0 telephone:text-xs telephone:font-bold telephone:mb-0">
            {averagePercentage}%
          </p>
          <p className="desktop:text-base telephone:text-xs">
            Monthly team FOW
          </p>
        </div>
      </section>
      <section className="sectionSelect">

        <div className="desktop:flex flex-col  desktop:w-[11vw] telephone:w-[20vw] telephone:mr-8">
          <span htmlFor="selectBox" className="textParraf">
            Date
          </span>
          <div className="desktop:flex flex-row  justify-center desktop:bg-white desktop:border-custom-gray desktop:border-2 desktop:rounded-md desktop:w-[10vw]  desktop:h-[4vh] desktop:items-center telephone:w-[25vw] telephone:bg-white telephone:flex flex-row telephone:border-custom-gray telephone:border-2 telephone:rounded-md   telephone:items-center telephone:h-[2.5vh]">
            <img
              src={calendarImg}
              alt="imagen de un calendario"
              className="desktop:w-[2vw] desktop:h-[3vh] telephone:w-[4vw] telephone:h-[2vh]"
            />
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              showMonthYearPicker
              dateFormat="MMM/yyyy"
              className="desktop:w-[6vw] desktop:border-transparent desktop:focus:outline-none telephone:w-[19vw] telephone:text-xs telephone:h-[1.5vh]"
            />
          </div>
        </div>
        <div className="desktop:flex flex-col desktop:w-[11vw] telephone:w-[20vw] telephone:mr-5">
          <label htmlFor="selectBox" className="textParraf">
            Country
          </label>
          <select
            id="selectBox"
            value={selectedCountry}
            onChange={handleCountry}
            className="desktop:bg-white desktop:border-custom-gray desktop:border-2 desktop:rounded-md desktop:w-[10vw] desktop:h-[4vh] telephone:bg-white telephone:border-custom-gray telephone:border-2 telephone:rounded-md telephone:w-[20vw] telephone:text-xs"
          >
            <option value="default">All</option>
            <option value="Argentina">Argentina</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Perú">Perú</option>
          </select>
        </div>
        <div className="desktop:flex flex-col desktop:w-[10vw] telephone:w-[20vw] telephone:mr-5">
          <label htmlFor="selectBox" className="textParraf">
            FOW
          </label>
          <select
            id="selectBox"
            value={selectedFow}
            onChange={handleFow}
            className="desktop:bg-white desktop:border-custom-gray desktop:border-2 desktop:rounded-md desktop:w-[10vw] desktop:h-[4vh] telephone:bg-white telephone:border-custom-gray telephone:border-2 telephone:rounded-md telephone:w-[20vw] telephone:text-xs "
          >
            <option value="default">All</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Home office">Home office</option>
            <option value="Roam">Roam</option>
          </select>
        </div>
        <div className="sectionButton">
          <div id="buttons" className="borderButton">
            <button
              className={`tabutton ${activeTab === "Team list" ? "effectButton" : "text-black"
                }`}
              onClick={() => setActiveTab("Team list")}
            >
              <img
                src={activeTab === "Team list" ? charRow : columnsblue}
                className="imageButton"
                alt="rows of papel"
              />
              Team list
            </button>
            <button
              className={`tabutton ${activeTab === "Monthly charts" ? "effectButton " : "text-black"
                }`}
              onClick={() => setActiveTab("Monthly charts")}
            >
              <img
                src={activeTab === "Monthly charts" ? diagrWhite : diagram}
                className="imageButton"
                alt="figure of diagram"
              />
              Monthly charts
            </button>
          </div>
        </div>
      </section>

      <section>
        {activeTab === "Team list" && (
          <FowIndicator
            selectedCountry={selectedCountry}
            selectedFow={selectedFow}
            selectedDate={selectedDate}
          />
        )}
        {activeTab === "Monthly charts" && <DiagramTeam />}

        {/* Notification */}
        <div
          div
          className="border-l-light-blue border-4 pl-4 p-2 bg-white shadow-custom-shadow rounded-md mt-4"
          style={{ maxWidth: "60vw" }}
        >
          <p className="textParraf">
            If you have any concerns or need clarification, please feel free to
            contact us at the email address:{" "}
            <a
              href="mailto:onehrsla@experian.com"
              className="hover:underline text-black font-bold"
            >
              onehrsla@experian.com
            </a>
            .
          </p>
        </div>
      </section>
    </section>
  );
}

export default TeamFowTab;
