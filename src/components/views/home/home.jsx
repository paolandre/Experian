import "./home.css";
import { useNavigate } from "react-router-dom";
import profilePage from "./../../../assets/imgHome/profilePage.png";
import employmentHistory from "./../../../assets/imgHome/EmploymentHistory.png";
import payInfo from "./../../../assets/imgHome/payInfo.png";
import absence from "./../../../assets/imgHome/absence.png";
import personalInfo from "./../../../assets/imgHome/personalInfo.png";
import viewSalary from "./../../../assets/imgHome/viewSalary.png";
import diversityInfo from "./../../../assets/imgHome/diversityInfo.png";
import fowIndicator from "./../../../assets/imgHome/fowindicator.png";
import banner from "./../../../assets/imgHome/BannerPeoplePortal.png";
import search from "./../../../assets/imgHome/search.png";
import activities from "./../../../assets/imgHome/buttonActivities.png";
import normativa from "./../../../assets/imgHome/buttonNormativa.png";
import notifications from "./../../../assets/imgHome/buttonNotifications.png";
import ourExperian from "./../../../assets/imgHome/buttonOurExperianCommunity.png";
import HeaderComponent from "./../../commonComponents/navbar/navBar";

export default function Home() {
  const elements = [
    { imageSrc: profilePage, texto: "Profile Page" },
    { imageSrc: employmentHistory, texto: "Employment History" },
    { imageSrc: payInfo, texto: "Pay Info" },
    { imageSrc: absence, texto: "Absence" },
    { imageSrc: personalInfo, texto: "Personal Info" },
    { imageSrc: viewSalary, texto: "View Salary Letter Certification" },
    { imageSrc: diversityInfo, texto: "Diversity Info" },
    {
      imageSrc: fowIndicator,
      texto: "FOW Indicator",
      onClick: handleFOWIndicatorClick,
    },
  ];
  const navigate = useNavigate();
  function handleFOWIndicatorClick() {
    navigate("/leader-view");
  }
  const imagenes = [
    { information: normativa },
    { information: ourExperian },
    { information: notifications },
    { information: activities },
  ];

  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <main className="bg-purple-clear telephone:h-[100vh]">
        <div className="flex justify-center items-center">
          <img
            src={banner}
            alt="people portal"
            className=" desktop:w-[60vw] my-[5px] mt-[2vh] telephone:w-[95vw]	"
          />
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <div className="desktop:w-[60vw] flex items-center justify-end   bg-white border-gray-border border-2 shadow-md telephone:w-[92vw]">
            <img
              src={search}
              alt="buscar"
              className="desktop:w-[20%] shadow-md telephone:w-[35vw]"
            />
          </div>
          <div className="desktop:w-[60vw]  h-[45px]  mb-4 telephone:w-[90vw] flex flex-start mt-4">
            <p>
              <strong>You</strong>
              <span> 7</span>
            </p>
          </div>
        </div>
        <section className="flex flex-col justify-center items-center ">
          <article className="grid-container">
            {elements.map((elemento, index) => (
              <div
                key={index}
                className="desktop:w-[7vw] mb-6 flex flex-col justify-center items-center transition-transform transform hover:scale-110 telephone:h-[10vh]"
              >
                <img
                  src={elemento.imageSrc}
                  alt={`Imagen ${index}`}
                  onClick={elemento.onClick}
                  className="desktop:w-[4vw] cursor-pointer  telephone:w-[15vw] "
                />
                <span className="text-sm flex flex-col items-center">
                  {elemento.texto}
                </span>
              </div>
            ))}
          </article>

          <article className="desktop:w-[50vw] grid grid-cols-4 text-center mt-4 telephone:w-[150vw] overflow-x-auto">
            {imagenes.map((imagen, index) => (
              <div
                key={index}
                className="hover:shadow-md transition-transform duration-150 transform hover:scale-105 m-0 "
              >
                <img
                  src={imagen.information}
                  alt={`Imagen ${index}`}
                  className="desktop:cursor-pointer telephone:w-[150vw]"
                />
              </div>
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
