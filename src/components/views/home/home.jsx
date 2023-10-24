import "./home.css";
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
import chatbot from "./../../../assets/imgHome/buttonChatbot.png";
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
    { imageSrc: fowIndicator, texto: "FOW Indicator" },
  ];

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
      <main>
        <div className="flex justify-center items-center">
          <img
            src={banner}
            alt="people portal"
            className="mx-4 my-2 w-[80%] h-[150px] "
          />
        </div>
        <div className="grid grid-cols-2 mx-auto text-center  w-[80%]">
          <div className="w-[80%] border-gray-border border-2">
            <img src={search} alt="buscar" className="w-[20%] " />
          </div>
        </div>
        <p className="mx-[50px] h-[50px] mt-9">
          <strong>You</strong>
          <span> 7</span>
        </p>
        <article className="grid grid-cols-6 ml-10 space-y ">
          {elements.map((elemento, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 w-[100px] h-[100px]"
            >
              <img
                src={elemento.imageSrc}
                alt={`Imagen ${index}`}
                className="w-[200px]"
              />
              <span className="text-sm w-[101px] flex flex-col items-center">
                {elemento.texto}
              </span>
            </div>
          ))}
        </article>
        <article className="grid grid-cols-5 w-[900px] mx-auto text-center">
          {imagenes.map((imagen, index) => (
            <div key={index}>
              <img src={imagen.information} alt={`Imagen ${index}`} />
            </div>
          ))}
          <div className="w-[50px]">
            <img src={chatbot} alt="Imagen del chatbot"></img>
          </div>
        </article>
      </main>

      <footer></footer>
    </>
  );
}
