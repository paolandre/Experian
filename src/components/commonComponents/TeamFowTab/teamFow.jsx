// TeamFowTab.jsx

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarImg from "./../../../assets/teamFow/calendarIcon.png";
import promedio from "./../../../assets/teamFow/teamfowpercentage.png";
import exportbutton from "./../../../assets/teamFow/exportbutton.png";
import arrow from "./../../../assets/teamFow/arrow.png";
import userProfile from "./../../../assets/teamFow/user.png";
import novenPorce from "./../../../assets/teamFow/noventaporce.png";
import cien from "./../../../assets/teamFow/cienporcen.png";
import ochenta from "./../../../assets/teamFow/ochentaporce.png";
import colorInformation from "./../../../assets/teamFow/colorInformation.png";
import Chatbot from "../chatbot/chatbot.jsx";
import "./teamFow.css";
function TeamFowTab() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const profile = [
    {
      user: userProfile,
      id: "72836375",
      country: "Perú",
      jobTitle: "Senior business consultant",
      officeLocation: "PE Lima",
      fow: "Hybrid",
      imageIndicator: novenPorce,
      percentage: "90 %",
    },
    {
      user: userProfile,
      id: "72982736",
      country: "Chile",
      jobTitle: "Administrador de base de datos",
      officeLocation: "CL Santiago (4091)",
      fow: "Hybrid",
      imageIndicator: cien,
      percentage: "100 %",
    },
    {
      user: userProfile,
      id: "72623202",
      country: "Colombia",
      jobTitle: "Service leader",
      officeLocation: "CO Bogota oficina principal",
      fow: "Hybrid",
      imageIndicator: ochenta,
      percentage: "80 %",
    },
    {
      user: userProfile,
      id: "72818597",
      country: "Argentina",
      jobTitle: "Business consultant",
      officeLocation: "AR Buenos Aires",
      fow: "Hybrid",
      imageIndicator: cien,
      percentage: "100 %",
    },
    {
      user: userProfile,
      id: "72765178",
      country: "Colombia",
      jobTitle: "Architecture technical leader 1",
      officeLocation: "CO Bogota oficina principal",
      fow: "Hybrid",
      imageIndicator: cien,
      percentage: "100 %",
    },
  ];

  return (
    <section className="w-[100vw] h-[70vh] ">
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
      </section>
      <article className=" tableArticle">
        <table className="tableTeam ">
          <thead>
            <tr>
              <th className="firstRow"></th>
              <th className="idRow">ID</th>
              <th className=" firstRow">Country</th>
              <th className=" firstRow">Job title</th>
              <th className=" firstRow">Office location</th>
              <th className=" idCol">FOW</th>
              <th className="titleRow">
                <div className="indicator">
                  <p className=" ml-2 mr-3">FOW</p>
                  <span>indicator</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {profile.map((user, index) => (
              <tr key={index} className="text-center h-[6vh]">
                <td className="tableProfile">
                  <img
                    src={user.user}
                    alt="user profile"
                    className="w-[2vw] ml-2"
                  />
                </td>
                <td>
                  <a href="/employee-view" className="link">
                    {user.id}
                  </a>
                </td>
                <td className="tableColumns">{user.country}</td>
                <td className="tableColumns">{user.jobTitle}</td>
                <td className="tableColumns">{user.officeLocation}</td>
                <td className="userFow">{user.fow}</td>
                <td className="  tex-center w-[11vw]">
                  <div className="percentageItem ">
                    {user.percentage}
                    <img
                      src={user.imageIndicator}
                      alt="indicator of percentage"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

        <Chatbot />
      </article>
    </section>
  );
}

export default TeamFowTab;
