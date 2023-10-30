import React from "react";
import "./teamFow.css";
import { handleImageClick, filteredProfile } from "./functions";

function FowIndicator({ selectedCountry, selectedFow, selectedDate }) {
  const filteredData = filteredProfile(selectedCountry, selectedFow, selectedDate);

  return (
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
          {filteredData

            .filter(
              (user) =>
                (selectedCountry !== "default"
                  ? user.country === selectedCountry
                  : true) &&
                (selectedFow !== "default" ? user.fow === selectedFow : true)
            )
            .map((user, index) => (
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
                <td className="userFow" >{user.fow}</td>

                <td className="tex-center">
                  <div className="percentageContainer">
                    {/* Barra de progreso y fondo */}
                    <div className="progressBarBackground">
                      <div
                        className="progressBar"
                        style={{
                          width: `${parseInt(user.percentage, 10)}%`,
                          backgroundColor: Number(user.percentage.replace('%', '')) === 100 ? '#009F4D' : '#E4002B',
                        }}
                        onClick={() => handleImageClick(user.percentage)}
                      />
                    </div>
                    {/* Porcentaje */}
                    <div className="percentageText">
                      {user.percentage}
                    </div>
                  </div>
                </td>





              </tr>
            ))}
        </tbody>
      </table>
    </article>
  );
}

export default FowIndicator;
