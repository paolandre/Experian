import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import './calendar.css';
import { holiday } from "../../../holidays";
import { authorizedExceptions } from "../../../authorizedExceptions";
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



function MyCalendar() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "", id:""});
    const [allEvents, setAllEvents] = useState(authorizedExceptions);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }
    const clickRef = useRef(null);

  
  const buildMessage = (calEvent, eventType) => {
    return `Event ${eventType} - ID: ${calEvent.id} - Title: ${calEvent.title}`;
  };

  const onSelectEvent = useCallback((calEvent) => {
    window.clearTimeout(clickRef.current);
    clickRef.current = window.setTimeout(() => {
      window.alert(buildMessage(calEvent, 'onSelectEvent'));
    }, 250);
  }, []);

    return (
        <div className="vent">
            
            <Calendar onSelectEvent={onSelectEvent} localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default MyCalendar;