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
    <article className="w-[100vw] h-[70vh] ">
      <div className="w-[90vw]  flex flex-row-reverse">
        <img
          src={exportbutton}
          alt="boton para exportar información"
          className="w-[100px] transition-transform transform hover:scale-110"
        />
      </div>
      <section className="flex flex-row w-[90vw] h-[8vh] ml-3 mb-6">
        <div className="  flex flex-col border-r-2 border-greyborder ml-3 w-[12vw] ">
          <p className="text-xl font-bold ">5</p>
          <p>Total team members</p>
        </div>
        <div className=" w-[6vw]  flex items-center justify-center ">
          <img src={promedio} alt="porcentaje rojo de rendimiento " />
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-bold">90%</p>
          <p>Monthly team FOW</p>
        </div>
      </section>
      <section className="flex flex-row w-[90vw] h-[10vh] ml-3">
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
              className="w-[7vw] border-transparent focus:outline-none"
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
      </section>
      <section className=" w-[90vw] ml-4">
        <table className="bg-white w-[90vw] h[10vh] mb-4">
          <thead>
            <tr>
              <th className="border border-gray-icon border-2"></th>
              <th className="border border-gray-icon border-2  font-bold py-2">
                ID
              </th>
              <th className="border border-gray-icon border-2  font-bold py-2">
                Country
              </th>
              <th className="border border-gray-icon border-2  font-bold py-2">
                Job title
              </th>
              <th className="border border-gray-icon border-2  font-bold py-2">
                Office location
              </th>
              <th className="border border-gray-icon border-2  font-bold py-2">
                FOW
              </th>
              <th className="border border-gray-icon border-2  font-bold py-2">
                <div className="flex flex-row items-center">
                  <p className="ml-2 mr-7">FOW indicator</p>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-[10px] h-[11px]  rounded"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {profile.map((user, index) => (
              <tr key={index} className="text-center h-[6vh]">
                <td className="text-center w-[2.8vw] p-1">
                  <img src={user.user} alt="user profile" />
                </td>
                <td>
                  <a
                    href="/employee-view"
                    className="text-dark-blue  hover:underline"
                  >
                    {user.id}
                  </a>
                </td>
                <td>{user.country}</td>
                <td>{user.jobTitle}</td>
                <td>{user.officeLocation}</td>
                <td className="w-[11vw]">{user.fow}</td>
                <td className=" tex-center w-[11vw]">
                  <div className=" flex flex-col  ml-4 mb-2  w-[8vw]">
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
        <div className=" flex flex-cols  items-center fontRob border-underlineGrey border-2 rounded-md w-[60vw] h-[5vh]  bg-white">
          <div className=" w-[2vw] ">
            <img
              src={colorInformation}
              alt="barra morada"
              className="w-[1vw] h-[5vh]"
            ></img>
          </div>
          <p>
            If you have any concerns or need clarification, please feel free to
            contact us at the email address:
          </p>
          <span className="font-bold bg-white">onehrsla@experian.com</span>
        </div>
        <Chatbot />
      </section>
    </article>
  );
}

export default TeamFowTab;
