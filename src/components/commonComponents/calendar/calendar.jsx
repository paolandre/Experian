import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useCallback } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import { events } from "../../../events";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function filterEventsById(data, id) {
  const filteredData = data.filter((event) => id.includes(event.id));
  return filteredData;
}

const eventIdToFilter = ["72794037", "Holiday"];
const filteredEvents = filterEventsById(events, eventIdToFilter);

function MyCalendar() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", id: "" });
  const [allEvents, setAllEvents] = useState(filteredEvents);

  // Calcula el valor del margin-top en función del ancho de la pantalla
  const marginTop = window.innerWidth <= 390 ? "425px" : "40px";
  const marginLeft = window.innerWidth <= 390 ? "0px" : "50px";
  const widithTable = window.innerWidth <= 390 ? "75vw" : "60vw";
  const heightTable = window.innerWidth <= 390 ? "35vh" : "620px";
  // Establece el estilo del componente Calendar
  const calendarStyle = {
    height: `${heightTable}`,
    margin: `${marginTop} ${marginLeft} 0px 0px`,
    width: `${widithTable}`,
  };

  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("CLASH");
        break;
      }
    }

    setAllEvents([...allEvents, newEvent]);
  }

  const eventPropGetter = useCallback(
    (event) => ({
      //Scheduled absences
      ...(event &&
        event.title &&
        event.title.includes("Office entrance") && {
          className: "white",
        }),
      ...(event &&
        event.title &&
        event.title.includes("licencia no remunerada") && {
          className: "green",
        }),
      ...(event &&
        event.title &&
        event.title.includes("Vacaciones") && {
          className: "green",
        }),
      ...(event &&
        event.title &&
        event.title.includes("Enfermedad") && {
          className: "green",
        }),
      ...(event &&
        event.title &&
        event.title.includes("Licencia personal") && {
          className: "green",
        }),
      ...(event &&
        event.title &&
        event.title.includes("Festivo en Chile") && {
          className: "purple",
        }),
      ...(event &&
        event.title &&
        event.title.includes("Festivo en Colombia") && {
          className: "purple",
        }),
      ...(event &&
        event.title &&
        event.title.includes("Festivo en Argentina") && {
          className: "purple",
        }),
      ...(event &&
        event.title &&
        event.title.includes("Festivo en Perú") && {
          className: "purple",
        }),
      ...(event &&
        event.title &&
        event.title.includes("Eventos corporativos") && {
          className: "yellow",
        }),
      ...(event &&
        event.title &&
        event.title.includes("Visita / reuniones con clientes") && {
          className: "yellow",
        }),
      ...(event &&
        event.title &&
        event.title.includes("Viajes de trabajo") && {
          className: "yellow",
        }),
      ...(event &&
        event.title &&
        event.title.includes("Licencia no remunerada") && {
          className: "yellow",
        }),
    }),

    []
  );

  return (
    <div>
      <Calendar
        eventPropGetter={eventPropGetter}
        localizer={localizer}
        events={allEvents}
        style={calendarStyle}
      />
    </div>
  );
}

export default MyCalendar;
