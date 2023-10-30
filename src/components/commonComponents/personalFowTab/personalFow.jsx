import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import "./personalFow.css";
import MyCalendar from "../calendar/calendar";

function PersonalFowTab() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-none sm:w-3/10 pr-4 space-y-4 max-w-sm">
        <div className="flex justify-between items-center mb-4 items-start p-4">
          <div className="flex-1 flex flex-col justify-center items-start">
            <p className="text-xl font-bold">8</p>
            <p>Days reported</p>
          </div>
          <div className="h-12 w-px bg-custom-gray mx-4"></div>
          <div className="flex-1 flex flex-col justify-center items-end">
            <div className="flex items-center">
              <p className="text-xl mr-2 font-bold">100%</p>
              <div className="flex-1 h-2 bg-gree-bar w-20 rounded-md"></div>
            </div>
            <p className="pr-4">My monthly FOW</p>
          </div>
        </div>

        {/* Leader info */}
        <div className="desktop:p-4 desktop:bg-white desktop:rounded-md desktop:shadow-custom-shadow desktop:max-w-sm telephone:p-2 telephone:bg-white telephone:rounded-md telephone:shadow-custom-shadow telephone:max-w-sm">
          <div className="flex items-center">
            <IoPersonCircleSharp className="text-gray-icon" size={80} />
            <div className="ml-4">
              <p className="desktop:font-bold desktop:text-xl telephone:text-sm telephone:font-bold">
                Leader name
              </p>
              <p className="desktop:font-bold desktop:text-base telephone:text-sm telephone:font-bold">
                ID: 72794037
              </p>
              <p className="desktop:font-bold desktop:text-base telephone:text-sm telephone:font-bold">
                FOW: <span>Hybrid</span>
              </p>
            </div>
          </div>
          <div className="desktop:mt-4 telephone:mt-1">
            <p className="desktop:text-base telephone:text-sm">
              <span className="desktop:text-base desktop:font-bold telephone:text-sm telephone:font-bold">
                Job:
              </span>
              Lider técnico funcional
            </p>
            <p className="desktop:text-base telephone:text-sm">
              <span className="desktop:text-base desktop:font-bold telephone:text-sm telephone:font-bold">
                VP:
              </span>
              Delivery & VAPS CS Delivery
            </p>
            <p className="desktop:text-base telephone:text-sm">
              <span className="desktop:text-base desktop:font-bold telephone:text-sm telephone:font-bold">
                Country:
              </span>
              Colombia
            </p>
            <p className="desktop:text-base telephone:text-sm">
              <span className="desktop:text-base desktop:font-bold telephone:text-sm telephone:font-bold">
                Office location:
              </span>
              CO Bogotá oficina principal
            </p>
          </div>
        </div>

        {/* Calendar Summary */}
        <div className="calendar">
          <p className="font-bold mb-2">Calendar Summary</p>
          <div className="p-2">
            <div className="flex items-center mb-1">
              <span className="mr-2 w-4 h-4 rounded-full bg-purple-icon inline-block"></span>
              <p className="font-bold">Holiday</p>
            </div>
            <p className="ml-6 mb-1">Aug 7, 2023 Batalla de Boyacá</p>
            <p className="ml-6 mb-2">Aug 21, 2023 La asunción de la Virgen</p>

            <div className="flex items-center mb-1">
              <span className="mr-2 w-4 h-4 rounded-full bg-yellow-icon inline-block"></span>
              <p className="font-bold">Authorized exceptions</p>
            </div>
            <p className="ml-6 mb-2">Aug 15, 2023 Corporate events</p>
            <div className="flex items-center mb-1">
              <span className="mr-2 w-4 h-4 rounded-full bg-green-icon inline-block"></span>
              <p className="font-bold">Scheduled absences</p>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="textParraf border-l-light-blue border-4 pl-4 p-4 bg-white shadow-custom-shadow rounded-md max-w-sm">
          <p>
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
      </div>

      {/* Columna de la derecha ocupando el 70% de la pantalla */}
      <div className="classDiv">
        <div className="typesOfJob">
          {/* Circle with border */}
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-white border-[3px] border-dark-purple rounded-full"></span>
            <span className="font-bold whitespace-nowrap text-sm">
              Office entrance
            </span>
          </div>

          {/* Yellow icon circle */}
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-yellow-icon rounded-full"></span>
            <span className="font-bold whitespace-nowrap text-sm">
              Authorized exceptions
            </span>
          </div>

          {/* Purple icon circle */}
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-purple-icon rounded-full"></span>
            <span className="font-bold whitespace-nowrap text-sm">Holiday</span>
          </div>

          {/* Green icon circle */}
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-green-icon rounded-full"></span>
            <span className="font-bold whitespace-nowrap text-sm">
              Scheduled absences
            </span>
          </div>
        </div>
      </div>
      <div className="calendarDiv">
        <MyCalendar />
      </div>
    </div>
  );
}

export default PersonalFowTab;
