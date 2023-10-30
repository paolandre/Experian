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

  const eventIdToFilter = ['72836375', 'Holiday'];
const filteredEvents = filterEventsById(events, eventIdToFilter);

function EmployeeCalendar() {
    const [allEvents, setAllEvents] = useState(filteredEvents );

    const eventPropGetter = useCallback(
        (event) => ({
          
            //Scheduled absences
            ...(event && event.title && event.title.includes('Office entrance') && {
                className: 'white',
              }),
            ...( event && event.title && event.title.includes('licencia no remunerada') && {
                className: 'green',
              }),
              ...(event && event.title && event.title.includes('Vacaciones') && {
                className: 'green',
              }),
              ...(event && event.title && event.title.includes('Enfermedad') && {
                className: 'green',
              }),
              ...(event && event.title && event.title.includes('Licencia personal') && {
                className: 'green',
              }),
              ...(event && event.title && event.title.includes('Eventos corporativos') && {
                className: 'yellow',
              }),...(event && event.title && event.title.includes('Visita / reuniones con clientes') && {
                className: 'yellow',
              }),...(event && event.title && event.title.includes('Viajes de trabajo') && {
                className: 'yellow',
              }),
              ...(event && event.title && event.title.includes('Festivo Chile') && {
                className: 'purple',
              }),
              ...(event && event.title && event.title.includes('Festivo Colombia') && {
                className: 'purple',
              }),
              ...(event && event.title && event.title.includes('Festivo Argentina') && {
                className: 'purple',
              }),
              ...(event && event.title && event.title.includes('Festivo Perú') && {
                className: 'purple',
              }),


          }),
          
          []
        )
       
    return (
        <div className="event">
            <Calendar
                eventPropGetter={eventPropGetter}
                localizer={localizer}
                events={allEvents}
                style={{ height: 500, margin: "50px" }}
            />
    
        </div>
    );
}

export default EmployeeCalendar;
