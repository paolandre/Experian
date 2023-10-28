import React from "react";
import userProfile from "./../../../assets/teamFow/user.png";
import novenPorce from "./../../../assets/teamFow/noventaporce.png";
import cien from "./../../../assets/teamFow/cienporcen.png";
import ochenta from "./../../../assets/teamFow/ochentaporce.png";
import "./teamFow.css";
import felicidades from "./../../../assets/felicidades.png";
import motivacion from "./../../../assets/motivacion.png";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import confetti from "canvas-confetti";

function tableTeam() {
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
  const handleImageClick = (percentage) => {
    const numericPercentage = parseInt(percentage, 10); // Convierte "90 %" a 90 como un número

    if (numericPercentage < 100) {
      Swal.fire({
        imageUrl: motivacion,
        imagePadding: 0,
        imageMargin: 0,
        imageAlt: "Image of motivation",
        showConfirmButton: true,
        confirmButtonText: "Send",
        margin: 0,
        padding: 10,
        confirmButtonColor: "#426DA9",
        customClass: {
          confirmButton: "my-confirm-button",
          image: "image-modal",
        },
      });
    }

    if (numericPercentage === 100) {
      confetti({
        particleCount: 150,
        spread: 60,
      });

      Swal.fire({
        imageUrl: felicidades,
        imagePadding: 0,
        imageMargin: 0,
        imageAlt: "Image of congratulations",
        showConfirmButton: true,
        confirmButtonText: "Send",
        margin: 0,
        padding: 10,
        confirmButtonColor: "#426DA9",
        customClass: {
          confirmButton: "my-confirm-button",
          image: "image-modal",
        },
      });
    }
  };

  return (
    <article className=" tableArticle">
      <div className="grid justify-items-end mt-0 w-[90vw] h-[8vh]"></div>
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
                    className="cursor-pointer"
                    onClick={() => handleImageClick(user.percentage)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default tableTeam;
